import React from 'react';
import { flushSync } from 'react-dom';
import {
  DragDropProvider,
  KeyboardSensor,
  PointerSensor,
} from '@dnd-kit/react';
import type {
  BeforeDragStartEvent,
  DragDropManager,
  DragEndEvent,
  DragMoveEvent,
  DragOverEvent,
} from '@dnd-kit/react';
import { useSortable } from '@dnd-kit/react/sortable';
import { IconChevronRight, IconGripVertical } from '@tabler/icons-react';

import { Checkbox } from '../Checkbox';
import { cn } from '../../lib/utils';

import {
  DROP_SETTLE_TIMEOUT_MS,
  DWELL_MS,
  GAP_SETTLE_MS,
  PLACEHOLDER_ATTRIBUTE,
  locateGap,
  restoreRow,
  rowsOf,
  stepGap,
  syncIndexes,
} from './dragAndDrop';
import type { DragSnapshot, Pointer } from './dragAndDrop';
import {
  byDocumentPosition,
  collectLeaves,
  hasValue,
  rootSelectionOf,
} from './registry';
import type { Leaf, Registry, RootSelection, TreeNode } from './registry';
import type {
  TreeViewMoveEvent,
  TreeViewMovePlacement,
  TreeViewNodeKey,
  TreeViewNodeKind,
} from './types';

export type {
  TreeViewMoveEvent,
  TreeViewMovePlacement,
  TreeViewNodeKey,
  TreeViewNodeKind,
} from './types';
export { applyTreeViewMove } from './applyTreeViewMove';
export type { TreeViewMoveAccessors } from './applyTreeViewMove';

export type TreeViewSize = 'md' | 'lg';

export interface TreeViewHandle {
  collapseAll: () => void;
  expandAll: () => void;
}

export interface TreeViewAriaLabels {
  dragHandle?: string;
}

/** How many Roots with children exist and how many of them are open. */
export interface TreeViewExpandedCount {
  expandable: number;
  open: number;
}

/** Default `getItemValue`: the value itself for strings and numbers, or its `id`. */
export const resolveTreeViewItemValue = (item: unknown): TreeViewNodeKey => {
  if (typeof item === 'string' || typeof item === 'number') return item;
  if (item !== null && typeof item === 'object' && 'id' in item) {
    const { id } = item as { id: unknown };
    if (typeof id === 'string' || typeof id === 'number') return id;
  }
  throw new Error(
    'TreeView: values must be strings, numbers, or objects with a string or number `id`. Pass `getItemValue` for any other shape.'
  );
};

interface TreeViewContextValue {
  selectable: boolean;
  sortable: boolean;
  size: TreeViewSize;
  ariaLabels: Required<TreeViewAriaLabels>;
  resolveKey: (value: unknown) => TreeViewNodeKey;
  /** Returns the matching unregister function. */
  register: (node: TreeNode) => () => void;
  isOpen: (key: TreeViewNodeKey, defaultOpen?: boolean) => boolean;
  setOpen: (key: TreeViewNodeKey, open: boolean) => void;
  isSelected: (valueKey: TreeViewNodeKey) => boolean;
  getRootSelection: (key: TreeViewNodeKey) => RootSelection;
  toggleItem: (key: TreeViewNodeKey) => void;
  setRootSelected: (key: TreeViewNodeKey, checked: boolean) => void;
  canDrop: (sourceKey: TreeViewNodeKey, targetKey: TreeViewNodeKey) => boolean;
}

interface BranchContextValue {
  parentKey: TreeViewNodeKey | null;
  depth: number;
  disabled: boolean;
}

const TreeViewContext = React.createContext<TreeViewContextValue | null>(null);

const BranchContext = React.createContext<BranchContextValue>({
  parentKey: null,
  depth: 0,
  disabled: false,
});

const useTreeViewContext = () => {
  const ctx = React.useContext(TreeViewContext);
  if (!ctx) {
    throw new Error(
      'TreeView.Root and TreeView.Item must be rendered inside TreeView'
    );
  }
  return ctx;
};

/* -------------------------------------------------------------------------- */
/*                                  Keyboard                                  */
/* -------------------------------------------------------------------------- */

/** Rows the keyboard can reach: outside collapsed groups and the drag placeholder. */
const visibleRows = (tree: HTMLElement) =>
  Array.from(tree.querySelectorAll<HTMLElement>('[role="treeitem"]')).filter(
    (row) =>
      !row.closest('ul[hidden]') && !row.closest(`[${PLACEHOLDER_ATTRIBUTE}]`)
  );

/** Hands focus from a control inside a row back to the row itself. */
const focusRowOf = (event: React.FocusEvent<HTMLElement>) => {
  const row = event.currentTarget.closest('[role="treeitem"]');
  if (row instanceof HTMLElement) row.focus();
};

/* -------------------------------------------------------------------------- */
/*                                  Container                                 */
/* -------------------------------------------------------------------------- */

export interface TreeViewProps
  extends Omit<React.HTMLAttributes<HTMLUListElement>, 'children'> {
  /**
   * Collapses every Root that has no `defaultOpen` and has not been toggled.
   * The ref handle takes over once called.
   */
  allCollapsed?: boolean;
  /**
   * Renders a checkbox on Items with a value, and a cascading one on Roots.
   * A Root with nothing selectable inside selects itself instead.
   */
  selectable?: boolean;
  /**
   * Values of the selected Items. A Root with no selectable Item inside is
   * selectable itself, so its value can appear here as well.
   */
  selected?: unknown[];
  defaultSelected?: unknown[];
  onSelectedChange?: (values: unknown[]) => void;
  /**
   * Derives a unique key from a Root or Item value. Defaults to the value
   * itself for strings and numbers, or its `id` for objects.
   */
  getItemValue?: (value: unknown) => TreeViewNodeKey;
  /**
   * Adds a drag handle at the start of every row, shown on hover. Siblings
   * shift to open a gap where the node will land, in this list or between the
   * children of another Root. Hovering a collapsed Root opens it; hovering a
   * Root without children opens an empty slot beneath it to nest into. Roots
   * taking part in moves should have a `value` so `onMove` can identify them.
   */
  sortable?: boolean;
  /**
   * Called once per drop. Apply it to your data, e.g. with `applyTreeViewMove`.
   * Annotate the event as `TreeViewMoveEvent<Item, Root>` to type its values;
   * method syntax keeps that annotation assignable.
   */
  onMove?(event: TreeViewMoveEvent): void;
  /** Row height: `md` is 40px, `lg` is 48px. */
  size?: TreeViewSize;
  /** Reports how many Roots with children exist and how many are open. */
  onExpandedCountChange?: (state: TreeViewExpandedCount) => void;
  ariaLabels?: TreeViewAriaLabels;
  children: React.ReactNode;
}

interface OpenState {
  /** Set by collapseAll/expandAll; replaces `defaultOpen` and `allCollapsed`. */
  all?: boolean;
  overrides: Map<TreeViewNodeKey, boolean>;
}

/**
 * Composable tree with collapsible Roots, leaf Items, optional cascading
 * checkbox selection, drag-and-drop reordering and right-aligned row overlays.
 *
 * The rows form a single tab stop: arrow keys move between visible rows and
 * open or close groups, Home and End jump to the ends, Enter toggles a group
 * and Space toggles a checkbox. Controls rendered inside a row, such as the
 * drag handle or overlay actions, keep their own tab stops. In a sortable
 * tree, Enter or Space on the drag handle picks the row up, ArrowUp and
 * ArrowDown move it one slot at a time through the tree, Enter or Space
 * drops it and Escape cancels.
 */
function TreeViewInner(
  {
    allCollapsed = false,
    selectable = false,
    selected,
    defaultSelected,
    onSelectedChange,
    getItemValue = resolveTreeViewItemValue,
    sortable = false,
    onMove,
    size = 'md',
    onExpandedCountChange,
    ariaLabels,
    onFocus,
    onKeyDown,
    className,
    style,
    children,
    ...props
  }: TreeViewProps,
  ref: React.ForwardedRef<TreeViewHandle>
) {
  const registryRef = React.useRef<Registry>(new Map());
  // Wrapped again on every registration so memos can depend on the registry.
  const [registryState, setRegistryState] = React.useState<{ nodes: Registry }>(
    () => ({ nodes: registryRef.current })
  );

  const elementsRef = React.useRef(new WeakMap<Element, TreeNode>());

  const register = React.useCallback((node: TreeNode) => {
    const nodes = registryRef.current;
    const elements = elementsRef.current;
    if (nodes.has(node.key)) {
      console.warn(
        `TreeView: duplicate node key "${String(node.key)}". Item values must resolve to unique keys across the whole tree.`
      );
    }
    nodes.set(node.key, node);
    elements.set(node.element, node);
    setRegistryState({ nodes });
    return () => {
      if (nodes.get(node.key) === node) nodes.delete(node.key);
      if (elements.get(node.element) === node) elements.delete(node.element);
      setRegistryState({ nodes });
    };
  }, []);

  const [openState, setOpenState] = React.useState<OpenState>(() => ({
    overrides: new Map(),
  }));

  const isOpen = React.useCallback(
    (key: TreeViewNodeKey, defaultOpen?: boolean) =>
      openState.overrides.get(key) ??
      openState.all ??
      defaultOpen ??
      !allCollapsed,
    [openState, allCollapsed]
  );

  const setOpen = React.useCallback((key: TreeViewNodeKey, open: boolean) => {
    setOpenState((state) => ({
      ...state,
      overrides: new Map(state.overrides).set(key, open),
    }));
  }, []);

  React.useImperativeHandle(
    ref,
    () => ({
      collapseAll: () => setOpenState({ all: false, overrides: new Map() }),
      expandAll: () => setOpenState({ all: true, overrides: new Map() }),
    }),
    []
  );

  const nodeOf = React.useCallback(
    (element: Element | null | undefined) =>
      element ? elementsRef.current.get(element) : undefined,
    []
  );

  /** Whether every group above the node is open. */
  const isShown = React.useCallback(
    (node: TreeNode) => {
      const nodes = registryRef.current;
      for (
        let parent =
          node.parentKey === null ? undefined : nodes.get(node.parentKey);
        parent;
        parent =
          parent.parentKey === null ? undefined : nodes.get(parent.parentKey)
      ) {
        if (!isOpen(parent.key, parent.defaultOpen)) return false;
      }
      return true;
    },
    [isOpen]
  );

  const firstTopLevelKey = React.useMemo(
    () =>
      Array.from(registryState.nodes.values())
        .filter((node) => node.parentKey === null)
        .sort(byDocumentPosition)[0]?.key ?? null,
    [registryState]
  );

  // The tree has one tab stop: the row focused last, or the first row while
  // that one is gone or hidden. Rows render with tabIndex -1 and the active
  // one is switched to 0 here, so moving focus never re-renders the rows.
  const focusKeyRef = React.useRef<TreeViewNodeKey | null>(null);
  const activeRowRef = React.useRef<HTMLLIElement | null>(null);
  const activateRow = React.useCallback((element: HTMLLIElement | null) => {
    const previous = activeRowRef.current;
    if (previous && previous !== element) previous.tabIndex = -1;
    if (element) element.tabIndex = 0;
    activeRowRef.current = element;
  }, []);
  React.useLayoutEffect(() => {
    const nodes = registryState.nodes;
    const key = focusKeyRef.current;
    const focused = key === null ? undefined : nodes.get(key);
    const active =
      focused && isShown(focused)
        ? focused
        : firstTopLevelKey === null
          ? undefined
          : nodes.get(firstTopLevelKey);
    activateRow(active?.element ?? null);
  }, [registryState, isShown, firstTopLevelKey, activateRow]);

  const expandedRef = React.useRef<TreeViewExpandedCount | null>(null);
  React.useEffect(() => {
    if (!onExpandedCountChange) return;
    let expandable = 0;
    let open = 0;
    registryState.nodes.forEach((node) => {
      if (node.kind !== 'root' || !node.hasChildren) return;
      expandable += 1;
      if (isOpen(node.key, node.defaultOpen)) open += 1;
    });
    const previous = expandedRef.current;
    if (previous?.expandable === expandable && previous.open === open) return;
    expandedRef.current = { expandable, open };
    onExpandedCountChange({ expandable, open });
  }, [onExpandedCountChange, registryState, isOpen]);

  const isControlled = selected !== undefined;
  const [internalSelected, setInternalSelected] = React.useState<unknown[]>(
    () => defaultSelected ?? []
  );
  const currentSelected = selected ?? internalSelected;
  const selectedKeys = React.useMemo(
    () => new Set(currentSelected.map((item) => getItemValue(item))),
    [currentSelected, getItemValue]
  );
  const leavesByRoot = React.useMemo(
    () =>
      selectable
        ? collectLeaves(registryState.nodes)
        : new Map<TreeViewNodeKey, Leaf[]>(),
    [selectable, registryState]
  );

  const select = React.useCallback(
    (leaves: Leaf[], checked: boolean) => {
      let next: unknown[];
      if (checked) {
        const added = leaves
          .filter((leaf) => !selectedKeys.has(leaf.valueKey))
          .sort(byDocumentPosition);
        if (added.length === 0) return;
        next = [...currentSelected, ...added.map((leaf) => leaf.getValue())];
      } else {
        const removed = new Set(leaves.map((leaf) => leaf.valueKey));
        next = currentSelected.filter(
          (item) => !removed.has(getItemValue(item))
        );
        if (next.length === currentSelected.length) return;
      }
      if (!isControlled) setInternalSelected(next);
      onSelectedChange?.(next);
    },
    [
      selectedKeys,
      currentSelected,
      getItemValue,
      isControlled,
      onSelectedChange,
    ]
  );

  const isSelected = React.useCallback(
    (valueKey: TreeViewNodeKey) => selectedKeys.has(valueKey),
    [selectedKeys]
  );

  const getRootSelection = React.useCallback(
    (key: TreeViewNodeKey): RootSelection =>
      rootSelectionOf(leavesByRoot.get(key) ?? [], (valueKey) =>
        selectedKeys.has(valueKey)
      ),
    [leavesByRoot, selectedKeys]
  );

  const toggleItem = React.useCallback(
    (key: TreeViewNodeKey) => {
      const node = registryRef.current.get(key);
      if (node && hasValue(node)) {
        select([node], !selectedKeys.has(node.valueKey));
      }
    },
    [select, selectedKeys]
  );

  const setRootSelected = React.useCallback(
    (key: TreeViewNodeKey, checked: boolean) =>
      select(
        (leavesByRoot.get(key) ?? []).filter((leaf) => !leaf.disabled),
        checked
      ),
    [select, leavesByRoot]
  );

  const handleFocus = (event: React.FocusEvent<HTMLUListElement>) => {
    onFocus?.(event);
    const node = nodeOf(
      (event.target as HTMLElement).closest('[role="treeitem"]')
    );
    if (!node) return;
    focusKeyRef.current = node.key;
    activateRow(node.element);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
    onKeyDown?.(event);
    if (event.defaultPrevented) return;
    const row = event.target as HTMLElement;
    const node =
      row.getAttribute('role') === 'treeitem' ? nodeOf(row) : undefined;
    const tree = treeRef.current;
    if (!node || !tree) return;
    const rows = visibleRows(tree);
    const index = rows.indexOf(row);
    const open = node.hasChildren && isOpen(node.key, node.defaultOpen);
    const focusRow = (target: Element | null | undefined) => {
      if (target instanceof HTMLElement) target.focus();
    };
    switch (event.key) {
      case 'ArrowDown':
        focusRow(rows[index + 1]);
        break;
      case 'ArrowUp':
        focusRow(rows[index - 1]);
        break;
      case 'ArrowRight':
        if (!node.hasChildren) return;
        if (open) focusRow(rows[index + 1]);
        else setOpen(node.key, true);
        break;
      case 'ArrowLeft':
        if (open) setOpen(node.key, false);
        else if (node.parentKey !== null) {
          focusRow(registryRef.current.get(node.parentKey)?.element);
        } else return;
        break;
      case 'Home':
        focusRow(rows[0]);
        break;
      case 'End':
        focusRow(rows[rows.length - 1]);
        break;
      case 'Enter':
        if (!node.hasChildren) return;
        setOpen(node.key, !open);
        break;
      case ' ':
        if (!selectable || node.disabled) return;
        if (node.kind === 'item') toggleItem(node.key);
        else
          setRootSelected(node.key, getRootSelection(node.key).state !== 'all');
        break;
      default:
        return;
    }
    event.preventDefault();
  };

  const treeRef = React.useRef<HTMLUListElement>(null);
  const dragRef = React.useRef<DragSnapshot | null>(null);
  const dwellRef = React.useRef<{
    key: TreeViewNodeKey;
    timer: number;
  } | null>(null);
  const pointerRef = React.useRef<Pointer | null>(null);
  const settleTimerRef = React.useRef<number | null>(null);

  const clearDwell = () => {
    if (dwellRef.current) window.clearTimeout(dwellRef.current.timer);
    dwellRef.current = null;
  };

  const clearSettle = () => {
    if (settleTimerRef.current !== null) {
      window.clearTimeout(settleTimerRef.current);
      settleTimerRef.current = null;
    }
  };

  const pendingDropRef = React.useRef<(() => void) | null>(null);
  const settleFrameRef = React.useRef<number | null>(null);

  /** Runs the step still waiting for the previous drop, if any. */
  const flushPendingDrop = () => {
    if (settleFrameRef.current !== null) {
      window.cancelAnimationFrame(settleFrameRef.current);
      settleFrameRef.current = null;
    }
    const pending = pendingDropRef.current;
    pendingDropRef.current = null;
    pending?.();
  };

  /**
   * Runs `callback` once dnd-kit has played the drop animation and removed
   * its placeholder, so React can take the row over without anything of the
   * drag still on screen.
   */
  const afterDrop = (manager: DragDropManager, callback: () => void) => {
    flushPendingDrop();
    pendingDropRef.current = callback;
    const deadline = performance.now() + DROP_SETTLE_TIMEOUT_MS;
    const poll = () => {
      settleFrameRef.current = null;
      if (pendingDropRef.current !== callback) return;
      if (manager.dragOperation.status.idle || performance.now() > deadline) {
        pendingDropRef.current = null;
        callback();
      } else {
        settleFrameRef.current = window.requestAnimationFrame(poll);
      }
    };
    settleFrameRef.current = window.requestAnimationFrame(poll);
  };

  React.useEffect(
    () => () => {
      if (dwellRef.current) window.clearTimeout(dwellRef.current.timer);
      if (settleTimerRef.current !== null) {
        window.clearTimeout(settleTimerRef.current);
      }
      if (settleFrameRef.current !== null) {
        window.cancelAnimationFrame(settleFrameRef.current);
      }
      pendingDropRef.current = null;
    },
    []
  );

  const canDrop = React.useCallback(
    (sourceKey: TreeViewNodeKey, targetKey: TreeViewNodeKey) => {
      const nodes = registryRef.current;
      for (
        let node = nodes.get(targetKey);
        node;
        node = node.parentKey === null ? undefined : nodes.get(node.parentKey)
      ) {
        if (node.key === sourceKey) return false;
      }
      return true;
    },
    []
  );

  /** The Root owning a list, null for the tree itself, undefined for an unknown list. */
  const ownerOf = (list: Element): TreeNode | null | undefined =>
    list === treeRef.current ? null : nodeOf(list.parentElement);

  const placement = (
    owner: TreeNode | null,
    index: number
  ): TreeViewMovePlacement => ({
    parentKey: owner ? (owner.valueKey ?? owner.key) : null,
    parentValue: owner?.getValue(),
    index,
  });

  const handleBeforeDragStart = (
    event: BeforeDragStartEvent,
    manager: DragDropManager
  ) => {
    flushPendingDrop();
    const source = event.operation.source;
    const node = source ? registryRef.current.get(source.id) : undefined;
    const originList = node?.element.parentElement;
    if (!node || !originList) return;
    // Collapse a dragged Root before dnd-kit clones it for the placeholder, so
    // the gap it leaves is a single row.
    const reopen = node.element.getAttribute('aria-expanded') === 'true';
    if (reopen) flushSync(() => setOpen(node.key, false));
    dragRef.current = {
      node,
      originList,
      originIndex: rowsOf(originList).indexOf(node.element),
      reopen,
      nodeOf,
      keyboard: false,
    };
    pointerRef.current = null;
    clearSettle();
    syncIndexes(manager, registryRef.current);
  };

  const handleDragMove = (event: DragMoveEvent, manager: DragDropManager) => {
    const snapshot = dragRef.current;
    const tree = treeRef.current;
    if (!snapshot || !tree) return;
    if (event.by) {
      // The keyboard sensor moves by deltas: one press steps the gap one slot.
      snapshot.keyboard = true;
      if (event.by.y !== 0) {
        const direction = event.by.y > 0 ? 1 : -1;
        stepGap(manager, registryRef.current, snapshot, tree, direction);
      }
      return;
    }
    // The operation's position is applied after this event, so use the
    // coordinates the event carries.
    const { x, y } = event.to ?? manager.dragOperation.position.current;
    const pointer = { x, y };
    pointerRef.current = pointer;
    locateGap(manager, registryRef.current, snapshot, pointer);
    // Rows slide into place after the gap moves, so a decision taken while
    // they move can differ from the settled layout. Look again once they
    // have settled, with the last pointer position.
    clearSettle();
    settleTimerRef.current = window.setTimeout(() => {
      settleTimerRef.current = null;
      const current = dragRef.current;
      const last = pointerRef.current;
      if (current === snapshot && !current.keyboard && last) {
        locateGap(manager, registryRef.current, current, last);
      }
    }, GAP_SETTLE_MS);
  };

  const handleDragOver = (event: DragOverEvent, manager: DragDropManager) => {
    const { source, target } = event.operation;
    const snapshot = dragRef.current;
    if (!source || !target || !snapshot || snapshot.keyboard) {
      clearDwell();
      return;
    }
    // The operation's position can lag a step behind the pointer; prefer the
    // coordinates the last dragmove carried.
    locateGap(
      manager,
      registryRef.current,
      snapshot,
      pointerRef.current ?? manager.dragOperation.position.current
    );
    if (target.id === source.id || dwellRef.current?.key === target.id) return;
    clearDwell();
    // Open a collapsed group after hovering it for a moment.
    const timer = window.setTimeout(() => {
      dwellRef.current = null;
      const node = registryRef.current.get(target.id);
      if (node?.element.getAttribute('aria-expanded') === 'false') {
        setOpen(node.key, true);
      }
    }, DWELL_MS);
    dwellRef.current = { key: target.id, timer };
  };

  const handleDragEnd = (event: DragEndEvent, manager: DragDropManager) => {
    const snapshot = dragRef.current;
    dragRef.current = null;
    clearDwell();
    clearSettle();
    if (!snapshot) return;
    const { node, originList, originIndex, reopen } = snapshot;
    // A re-render during the drag may have removed the row or its list; React
    // owns whatever is left, so there is nothing to restore or report.
    if (!node.element.isConnected || !originList.isConnected) return;
    const list = node.element.parentElement;
    const toIndex = list ? rowsOf(list).indexOf(node.element) : -1;
    const from = ownerOf(originList);
    const to = list ? ownerOf(list) : undefined;
    const moved = list !== originList || toIndex !== originIndex;
    const reopenRoot = () => {
      if (reopen) setOpen(node.key, true);
    };
    if (
      event.canceled ||
      !onMove ||
      !moved ||
      from === undefined ||
      to === undefined
    ) {
      // Nothing changes: the row goes straight back so the drop animation
      // returns it to its place, and a dragged group reopens afterwards.
      restoreRow(snapshot);
      afterDrop(manager, reopenRoot);
      return;
    }
    const moveEvent: TreeViewMoveEvent = {
      key: node.valueKey ?? node.key,
      kind: node.kind,
      value: node.getValue(),
      from: placement(from, originIndex),
      to: placement(to, toIndex),
    };
    // The row keeps the spot dnd-kit animates it into until that is over.
    // Only then does it go back to where React left it, with the consumer's
    // update flushed in the same step, so React lays the rows out in the new
    // order without a frame in between and a dragged group reopens in place.
    // If `onMove` leaves the data as it is, the row snaps back.
    afterDrop(manager, () => {
      if (!node.element.isConnected || !originList.isConnected) return;
      restoreRow(snapshot);
      flushSync(() => {
        reopenRoot();
        onMove(moveEvent);
      });
    });
  };

  const dragHandleLabel = ariaLabels?.dragHandle ?? 'Drag to reorder';
  // Keyboard presses move the dragged row by one row height, in step with
  // the gap moving one slot.
  const rowHeight = size === 'lg' ? 48 : 40;
  const sensors = React.useMemo(
    () => [
      PointerSensor,
      KeyboardSensor.configure({ offset: { x: 0, y: rowHeight } }),
    ],
    [rowHeight]
  );
  const contextValue = React.useMemo<TreeViewContextValue>(
    () => ({
      selectable,
      sortable,
      size,
      ariaLabels: { dragHandle: dragHandleLabel },
      resolveKey: getItemValue,
      register,
      isOpen,
      setOpen,
      isSelected,
      getRootSelection,
      toggleItem,
      setRootSelected,
      canDrop,
    }),
    [
      selectable,
      sortable,
      size,
      dragHandleLabel,
      getItemValue,
      register,
      isOpen,
      setOpen,
      isSelected,
      getRootSelection,
      toggleItem,
      setRootSelected,
      canDrop,
    ]
  );

  const tree = (
    <TreeViewContext.Provider value={contextValue}>
      <ul
        ref={treeRef}
        role="tree"
        {...props}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        className={cn(
          `border-divider-default divide-divider-default bg-surface-primary
          rounded-sm divide-y overflow-hidden border`,
          sortable && placeholderClassName,
          className
        )}
        style={{ ...indentStyle(0), ...style }}
      >
        {children}
      </ul>
    </TreeViewContext.Provider>
  );

  if (!sortable) return tree;

  return (
    <DragDropProvider
      sensors={sensors}
      onBeforeDragStart={handleBeforeDragStart}
      onDragMove={handleDragMove}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      {tree}
    </DragDropProvider>
  );
}

const TreeViewContainer = React.forwardRef(TreeViewInner);
TreeViewContainer.displayName = 'TreeView';

/* -------------------------------------------------------------------------- */
/*                                   Overlay                                  */
/* -------------------------------------------------------------------------- */

export interface TreeViewRootOverlayProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Keep the overlay visible (e.g. while a dropdown opened from it is open). */
  forceVisible?: boolean;
  children: React.ReactNode;
}

/**
 * Right-aligned action area laid over a TreeView row. Shown on row hover or
 * when a control inside it has focus. Rendered automatically by
 * `renderRowOverlay`; return it explicitly from that callback to control
 * `forceVisible`.
 */
const TreeViewRootOverlay = React.forwardRef<
  HTMLDivElement,
  TreeViewRootOverlayProps
>(({ forceVisible = false, className, children, ...props }, ref) => (
  <div
    ref={ref}
    data-force-visible={forceVisible || undefined}
    {...props}
    className={cn(
      `right-0 top-0 bottom-0 pr-md pl-16 z-slight bg-row-overlay-fade
      pointer-events-none absolute flex w-max items-center`,
      forceVisible
        ? 'opacity-100'
        : `opacity-0 transition-opacity group-hover:opacity-100
          group-has-[:focus-visible]:opacity-100
          [li:focus-visible>div>&]:opacity-100`,
      className
    )}
  >
    <div className="gap-xs pointer-events-auto flex items-center">
      {children}
    </div>
  </div>
));
TreeViewRootOverlay.displayName = 'TreeView.RootOverlay';

const renderOverlay = <T,>(
  value: T | undefined,
  renderRowOverlay: ((value: T) => React.ReactNode) | undefined
): React.ReactNode => {
  if (value === undefined || !renderRowOverlay) return null;
  const content = renderRowOverlay(value);
  if (content == null || typeof content === 'boolean') return null;
  if (React.isValidElement(content) && content.type === TreeViewRootOverlay) {
    return content;
  }
  return <TreeViewRootOverlay>{content}</TreeViewRootOverlay>;
};

/* -------------------------------------------------------------------------- */
/*                                    Rows                                    */
/* -------------------------------------------------------------------------- */

const rowClassName = `group relative gap-xxs pr-md py-xxs text-md
  text-body-primary hover:bg-interactive-neutral-hover
  has-[:focus-visible]:bg-interactive-neutral-hover
  has-[[data-force-visible]]:bg-interactive-neutral-hover flex items-center
  transition-colors`;

const rowSizeClassName: Record<TreeViewSize, string> = {
  md: 'min-h-10',
  lg: 'min-h-12',
};

const sortableRowClassName = `data-[dragging]:border-interactive-default
  data-[dragging]:bg-surface-primary data-[dragging]:rounded-sm
  data-[dragging]:border`;

const toggleClassName = `text-shape-light rounded-xs
  hover:bg-interactive-neutral-active flex size-6 shrink-0 cursor-pointer
  items-center justify-center`;

/** The focus ring sits on the row and is inset so the tree's corners do not clip it. */
const treeItemClassName = `[&:focus-visible>div]:ring-interactive-focused
  [&:focus-visible>div]:bg-interactive-neutral-hover outline-none
  [&:focus-visible>div]:ring-4 [&:focus-visible>div]:ring-inset`;

const ariaChecked = (state: RootSelection['state']) =>
  state === 'some' ? 'mixed' : state === 'all';

const gripClassName = `text-shape-light rounded-xs
  focus-visible:ring-interactive-focused group-hover:opacity-100
  group-data-[dragging]:opacity-100 pointer-coarse:opacity-100 flex size-6
  shrink-0 cursor-grab touch-none items-center justify-center opacity-0
  transition-opacity focus-visible:opacity-100 focus-visible:ring-4
  focus-visible:outline-none active:cursor-grabbing`;

const toggleSpacerClassName = 'size-6 shrink-0';
const checkboxSpacerClassName = 'size-[1.125rem] shrink-0';

/** Row padding per depth. Override with `--tree-indent-base` and `--tree-indent-step`. */
const indent = (depth: number) =>
  `calc(var(--tree-indent-base, var(--token-spacing-sm)) + ${depth} * var(--tree-indent-step, var(--token-spacing-xl)))`;

/** Lets the drop placeholder, a clone of the dragged row, align with the list it sits in. */
const indentStyle = (depth: number) =>
  ({ '--tree-indent': indent(depth) }) as React.CSSProperties;

/**
 * dnd-kit hides the placeholder it leaves in the gap. Show the gap itself as
 * a dashed slot instead, keeping the cloned content hidden.
 */
const placeholderClassName = `[&_[data-dnd-placeholder]]:relative
  [&_[data-dnd-placeholder]]:!visible [&_[data-dnd-placeholder]>*]:invisible
  [&_[data-dnd-placeholder]]:after:inset-y-xxs
  [&_[data-dnd-placeholder]]:after:right-md
  [&_[data-dnd-placeholder]]:after:left-(--tree-indent)
  [&_[data-dnd-placeholder]]:after:rounded-sm
  [&_[data-dnd-placeholder]]:after:border-interactive-selected
  [&_[data-dnd-placeholder]]:after:bg-interactive-neutral-hover
  [&_[data-dnd-placeholder]]:after:absolute
  [&_[data-dnd-placeholder]]:after:border
  [&_[data-dnd-placeholder]]:after:border-dashed
  [&_[data-dnd-placeholder]]:after:content-['']`;

interface TreeViewRowProps {
  nodeKey: TreeViewNodeKey;
  elementRef: React.RefObject<HTMLLIElement | null>;
  depth: number;
  disabled: boolean;
  children: React.ReactNode;
}

const rowClass = (size: TreeViewSize, disabled: boolean, extra?: string) =>
  cn(
    rowClassName,
    rowSizeClassName[size],
    disabled && 'text-body-disabled',
    extra
  );

const TreeViewSortableRow = ({
  nodeKey,
  elementRef,
  depth,
  disabled,
  children,
}: TreeViewRowProps) => {
  const { size, ariaLabels, canDrop } = useTreeViewContext();
  const { targetRef, handleRef, isDragging } = useSortable({
    id: nodeKey,
    // Rows are numbered from the DOM while dragging; see `syncIndexes`.
    index: 0,
    accept: (source) => canDrop(source.id, nodeKey),
    // A disabled row cannot be dragged but stays a drop target, so the gap
    // can still be placed next to it.
    disabled: { draggable: disabled, droppable: false },
    element: elementRef,
    // The tree moves rows itself, so dnd-kit's optimistic and keyboard sorting stay off.
    plugins: [],
  });

  return (
    <div
      ref={targetRef}
      data-dragging={isDragging || undefined}
      className={rowClass(size, disabled, sortableRowClassName)}
      style={{ paddingLeft: indent(depth) }}
    >
      {disabled ? (
        <span aria-hidden className={toggleSpacerClassName} />
      ) : (
        <button
          type="button"
          ref={handleRef}
          aria-label={ariaLabels.dragHandle}
          className={gripClassName}
        >
          <IconGripVertical size={16} />
        </button>
      )}
      {children}
    </div>
  );
};

const TreeViewRow = (props: TreeViewRowProps) => {
  const { sortable, size } = useTreeViewContext();
  if (sortable) return <TreeViewSortableRow {...props} />;
  return (
    <div
      className={rowClass(size, props.disabled)}
      style={{ paddingLeft: indent(props.depth) }}
    >
      {props.children}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                                    Nodes                                   */
/* -------------------------------------------------------------------------- */

/** Children that render as nodes, looking through fragments. */
const countNodes = (children: React.ReactNode): number =>
  React.Children.toArray(children).reduce<number>(
    (count, child) =>
      count +
      (React.isValidElement<{ children?: React.ReactNode }>(child) &&
      child.type === React.Fragment
        ? countNodes(child.props.children)
        : 1),
    0
  );

interface TreeViewNodeInput<T> {
  kind: TreeViewNodeKind;
  value: T | undefined;
  disabled: boolean;
  hasChildren?: boolean;
  defaultOpen?: boolean | undefined;
}

const useTreeViewNode = <T,>(
  {
    kind,
    value,
    disabled,
    hasChildren = false,
    defaultOpen,
  }: TreeViewNodeInput<T>,
  forwardedRef: React.ForwardedRef<HTMLLIElement>
) => {
  const ctx = useTreeViewContext();
  const branch = React.useContext(BranchContext);
  const id = React.useId();
  const valueKey = value === undefined ? undefined : ctx.resolveKey(value);
  if (
    kind === 'item' &&
    value !== undefined &&
    typeof valueKey !== 'string' &&
    typeof valueKey !== 'number'
  ) {
    throw new Error(
      'TreeView.Item: `getItemValue` must return a string or number for every Item value.'
    );
  }
  const key =
    valueKey === undefined
      ? id
      : kind === 'root'
        ? `root:${String(valueKey)}`
        : valueKey;
  const isDisabled = disabled || branch.disabled;

  const valueRef = React.useRef(value);
  React.useLayoutEffect(() => {
    valueRef.current = value;
  });

  const elementRef = React.useRef<HTMLLIElement | null>(null);
  const setElement = React.useCallback(
    (element: HTMLLIElement | null) => {
      elementRef.current = element;
      if (typeof forwardedRef === 'function') forwardedRef(element);
      else if (forwardedRef) forwardedRef.current = element;
    },
    [forwardedRef]
  );

  const { register } = ctx;
  const { parentKey } = branch;
  React.useLayoutEffect(() => {
    const element = elementRef.current;
    return element
      ? register({
          key,
          valueKey,
          parentKey,
          kind,
          disabled: isDisabled,
          hasChildren,
          defaultOpen,
          element,
          getValue: () => valueRef.current,
        })
      : undefined;
  }, [
    register,
    key,
    valueKey,
    parentKey,
    kind,
    isDisabled,
    hasChildren,
    defaultOpen,
  ]);

  return {
    ctx,
    depth: branch.depth,
    key,
    valueKey,
    isDisabled,
    id,
    setElement,
    elementRef,
  };
};

export interface TreeViewRootProps<T>
  extends Omit<
    React.LiHTMLAttributes<HTMLLIElement>,
    'value' | 'children' | 'tabIndex'
  > {
  label: React.ReactNode;
  /** Identifies the node and is passed back to `renderRowOverlay`. */
  value?: T;
  renderRowOverlay?: (value: T) => React.ReactNode;
  /** Initial open state for this Root. Ignored once collapseAll/expandAll is called. */
  defaultOpen?: boolean;
  /** Disables selection and dragging for this Root and every nested node. Expanding still works. */
  disabled?: boolean;
  children?: React.ReactNode;
}

function TreeViewRootInner<T>(
  {
    label,
    value,
    renderRowOverlay,
    defaultOpen,
    disabled = false,
    className,
    children,
    ...props
  }: TreeViewRootProps<T>,
  ref: React.ForwardedRef<HTMLLIElement>
) {
  const hasChildren = countNodes(children) > 0;
  const { ctx, depth, key, isDisabled, id, setElement, elementRef } =
    useTreeViewNode(
      { kind: 'root', value, disabled, hasChildren, defaultOpen },
      ref
    );
  const hasOwnValue = value !== undefined;
  React.useEffect(() => {
    if (ctx.sortable && !hasOwnValue) {
      console.warn(
        'TreeView.Root: give every Root a `value` in a sortable tree, so `onMove` can name it as a parent.'
      );
    }
  }, [ctx.sortable, hasOwnValue]);
  const labelId = `${id}-label`;
  const groupId = `${id}-group`;
  const open = !hasChildren || ctx.isOpen(key, defaultOpen);
  const selection = ctx.selectable ? ctx.getRootSelection(key) : null;
  const toggle = () => ctx.setOpen(key, !open);

  return (
    <li
      ref={setElement}
      role="treeitem"
      aria-labelledby={labelId}
      aria-expanded={hasChildren ? open : undefined}
      aria-level={depth + 1}
      aria-disabled={isDisabled || undefined}
      aria-checked={
        selection?.selectable ? ariaChecked(selection.state) : undefined
      }
      data-state={hasChildren ? (open ? 'open' : 'closed') : undefined}
      {...props}
      tabIndex={-1}
      className={cn(treeItemClassName, className)}
    >
      <TreeViewRow
        nodeKey={key}
        elementRef={elementRef}
        depth={depth}
        disabled={isDisabled}
      >
        {hasChildren ? (
          <span aria-hidden onClick={toggle} className={toggleClassName}>
            <IconChevronRight
              size={14}
              className={cn(
                'transition-transform duration-200',
                open && 'rotate-90'
              )}
            />
          </span>
        ) : (
          <span aria-hidden className={toggleSpacerClassName} />
        )}
        {selection && (
          <Checkbox
            id={`${id}-checkbox`}
            aria-hidden
            tabIndex={-1}
            onFocus={focusRowOf}
            checked={selection.state === 'all'}
            indeterminate={selection.state === 'some'}
            disabled={isDisabled || !selection.selectable}
            onCheckedChange={(checked) =>
              ctx.setRootSelected(key, checked === true)
            }
            className="shrink-0"
          />
        )}
        <span
          id={labelId}
          onClick={hasChildren ? toggle : undefined}
          className={cn(
            'min-w-0 flex-1 truncate select-none',
            hasChildren && 'cursor-pointer'
          )}
        >
          {label}
        </span>
        {renderOverlay(value, renderRowOverlay)}
      </TreeViewRow>
      <BranchContext.Provider
        value={{ parentKey: key, depth: depth + 1, disabled: isDisabled }}
      >
        <ul
          role="group"
          id={groupId}
          hidden={!open}
          className="border-divider-default divide-divider-default divide-y
            border-t empty:hidden"
          style={indentStyle(depth + 1)}
        >
          {children}
        </ul>
      </BranchContext.Provider>
    </li>
  );
}

type TreeViewRootComponent = <T>(
  props: TreeViewRootProps<T> & { ref?: React.ForwardedRef<HTMLLIElement> }
) => React.ReactElement;

const TreeViewRoot = React.forwardRef(
  TreeViewRootInner
) as TreeViewRootComponent & { displayName?: string };
TreeViewRoot.displayName = 'TreeView.Root';

export interface TreeViewItemProps<T>
  extends Omit<
    React.LiHTMLAttributes<HTMLLIElement>,
    'value' | 'children' | 'tabIndex'
  > {
  /** Identifies the node for selection and is passed back to `renderRowOverlay`. */
  value?: T;
  renderRowOverlay?: (value: T) => React.ReactNode;
  disabled?: boolean;
  children: React.ReactNode;
}

function TreeViewItemInner<T>(
  {
    value,
    renderRowOverlay,
    disabled = false,
    className,
    children,
    ...props
  }: TreeViewItemProps<T>,
  ref: React.ForwardedRef<HTMLLIElement>
) {
  const { ctx, depth, key, valueKey, isDisabled, id, setElement, elementRef } =
    useTreeViewNode({ kind: 'item', value, disabled }, ref);
  const labelId = `${id}-label`;
  const checkboxId = `${id}-checkbox`;
  const showCheckbox = ctx.selectable && valueKey !== undefined;
  const isSelected = valueKey !== undefined && ctx.isSelected(valueKey);

  return (
    <li
      ref={setElement}
      role="treeitem"
      aria-labelledby={labelId}
      aria-level={depth + 1}
      aria-disabled={isDisabled || undefined}
      aria-checked={showCheckbox ? isSelected : undefined}
      {...props}
      tabIndex={-1}
      className={cn(treeItemClassName, className)}
    >
      <TreeViewRow
        nodeKey={key}
        elementRef={elementRef}
        depth={depth}
        disabled={isDisabled}
      >
        <span aria-hidden className={toggleSpacerClassName} />
        {ctx.selectable &&
          (showCheckbox ? (
            <Checkbox
              id={checkboxId}
              aria-hidden
              tabIndex={-1}
              onFocus={focusRowOf}
              checked={isSelected}
              disabled={isDisabled}
              onCheckedChange={() => ctx.toggleItem(key)}
              className="shrink-0"
            />
          ) : (
            <span aria-hidden className={checkboxSpacerClassName} />
          ))}
        {showCheckbox ? (
          <label
            id={labelId}
            htmlFor={checkboxId}
            className={cn(
              'min-w-0 flex-1 select-none',
              isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'
            )}
          >
            {children}
          </label>
        ) : (
          <span id={labelId} className="min-w-0 flex-1">
            {children}
          </span>
        )}
        {renderOverlay(value, renderRowOverlay)}
      </TreeViewRow>
    </li>
  );
}

type TreeViewItemComponent = <T>(
  props: TreeViewItemProps<T> & { ref?: React.ForwardedRef<HTMLLIElement> }
) => React.ReactElement;

const TreeViewItem = React.forwardRef(
  TreeViewItemInner
) as TreeViewItemComponent & { displayName?: string };
TreeViewItem.displayName = 'TreeView.Item';

export const TreeView = Object.assign(TreeViewContainer, {
  Root: TreeViewRoot,
  Item: TreeViewItem,
  RootOverlay: TreeViewRootOverlay,
});
