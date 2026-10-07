import React from 'react';
import { flushSync } from 'react-dom';
import { DragDropProvider } from '@dnd-kit/react';
import type {
  BeforeDragStartEvent,
  DragDropManager,
  DragEndEvent,
  DragMoveEvent,
  DragOverEvent,
} from '@dnd-kit/react';
import { isSortable, useSortable } from '@dnd-kit/react/sortable';
import { IconChevronRight, IconGripVertical } from '@tabler/icons-react';

import { Checkbox } from '../Checkbox';
import { cn } from '../../lib/utils';

export type TreeViewNodeKey = string | number;

export type TreeViewNodeKind = 'root' | 'item';

export type TreeViewSize = 'md' | 'lg';

export interface TreeViewHandle {
  collapseAll: () => void;
  expandAll: () => void;
}

export interface TreeViewAriaLabels {
  dragHandle?: string;
}

/** How many Roots with children exist and how many of them are open. */
export interface TreeViewExpandedState {
  expandable: number;
  open: number;
}

export interface TreeViewMovePlacement {
  /** Key of the parent Root as resolved by `getItemValue`, or null at the top level. */
  parentKey: TreeViewNodeKey | null;
  /** The parent Root's value. Undefined at the top level or when the Root has no value. */
  parentValue: unknown;
  /** Position among the siblings of that parent. */
  index: number;
}

export interface TreeViewMoveEvent {
  /** Key of the moved node as resolved by `getItemValue`. */
  key: TreeViewNodeKey;
  kind: TreeViewNodeKind;
  value: unknown;
  from: TreeViewMovePlacement;
  /** Destination, with `index` counted after the node left its previous place. */
  to: TreeViewMovePlacement;
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

/** A mounted Root or Item. */
interface TreeNode {
  /** Unique within the tree. Roots with a value are prefixed so they never collide with Items. */
  key: TreeViewNodeKey;
  /** Key of `value` as resolved by `getItemValue`. Undefined for nodes without a value. */
  valueKey: TreeViewNodeKey | undefined;
  parentKey: TreeViewNodeKey | null;
  kind: TreeViewNodeKind;
  disabled: boolean;
  hasChildren: boolean;
  defaultOpen: boolean | undefined;
  element: HTMLLIElement;
  getValue: () => unknown;
}

type Registry = Map<TreeViewNodeKey, TreeNode>;

type Leaf = TreeNode & { valueKey: TreeViewNodeKey };

const hasValue = (node: TreeNode): node is Leaf => node.valueKey !== undefined;

interface RootSelection {
  state: 'all' | 'some' | 'none';
  /** Whether the Root's checkbox can change anything. */
  selectable: boolean;
}

interface TreeViewContextValue {
  selectable: boolean;
  sortable: boolean;
  size: TreeViewSize;
  ariaLabels: Required<TreeViewAriaLabels>;
  /** Key of the row that holds the tree's single tab stop. */
  activeKey: TreeViewNodeKey | null;
  resolveKey: (value: unknown) => TreeViewNodeKey | null | undefined;
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

const byDocumentPosition = (a: TreeNode, b: TreeNode) =>
  a.element.compareDocumentPosition(b.element) &
  Node.DOCUMENT_POSITION_FOLLOWING
    ? -1
    : 1;

/**
 * Selectable leaves under every Root: the Items with a value nested anywhere
 * inside it, or the Root itself when it has a value and nothing selectable
 * inside.
 */
const collectLeaves = (registry: Registry) => {
  const children = new Map<TreeViewNodeKey | null, TreeNode[]>();
  registry.forEach((node) => {
    const siblings = children.get(node.parentKey);
    if (siblings) siblings.push(node);
    else children.set(node.parentKey, [node]);
  });

  const leavesByRoot = new Map<TreeViewNodeKey, Leaf[]>();
  const collect = (root: TreeNode): Leaf[] => {
    const leaves: Leaf[] = [];
    (children.get(root.key) ?? []).forEach((child) => {
      if (child.kind === 'root') leaves.push(...collect(child));
      else if (hasValue(child)) leaves.push(child);
    });
    const own = leaves.length === 0 && hasValue(root) ? [root] : leaves;
    leavesByRoot.set(root.key, own);
    return own;
  };
  (children.get(null) ?? []).forEach((node) => {
    if (node.kind === 'root') collect(node);
  });
  return leavesByRoot;
};

/* -------------------------------------------------------------------------- */
/*                                Drag and drop                               */
/* -------------------------------------------------------------------------- */

const DWELL_MS = 600;
const PLACEHOLDER_ATTRIBUTE = 'data-dnd-placeholder';

interface DragSnapshot {
  node: TreeNode;
  originList: Element;
  originIndex: number;
  /** The dragged Root was open and is collapsed for the duration of the drag. */
  reopen: boolean;
}

/** Rows of a list in DOM order, without dnd-kit's placeholder that marks the gap. */
const rowsOf = (list: Element, except?: Element) =>
  Array.from(list.children).filter(
    (child) => child !== except && !child.hasAttribute(PLACEHOLDER_ATTRIBUTE)
  );

const nextRowAfter = (row: Element, except: Element) => {
  let next = row.nextElementSibling;
  while (
    next &&
    (next === except || next.hasAttribute(PLACEHOLDER_ATTRIBUTE))
  ) {
    next = next.nextElementSibling;
  }
  return next;
};

/**
 * Numbers every row's sortable instance from the DOM so dnd-kit animates the
 * siblings into place whenever the gap moves. The dragged row is left alone.
 * Parents go first: a row measures itself after its parent has started
 * moving, so it compensates and stays put while the parent animates.
 */
const syncIndexes = (
  manager: DragDropManager,
  registry: Registry,
  dragged?: TreeNode
) => {
  const nodes = Array.from(registry.values()).sort(byDocumentPosition);
  nodes.forEach((node) => {
    const list = node.element.parentElement;
    const droppable = manager.registry.droppables.get(node.key);
    if (node !== dragged && list && droppable && isSortable(droppable)) {
      droppable.sortable.index = rowsOf(list).indexOf(node.element);
    }
  });
};

/** Moves the dragged row, and with it the gap, in front of `before` in `list`. */
const placeGap = (
  manager: DragDropManager,
  registry: Registry,
  snapshot: DragSnapshot,
  list: Element,
  before: Element | null
) => {
  const { element } = snapshot.node;
  if (before === element) return;
  if (
    element.parentElement === list &&
    nextRowAfter(element, element) === before
  ) {
    return;
  }
  list.insertBefore(element, before);
  syncIndexes(manager, registry, snapshot.node);
  // dnd-kit only refreshes a row's cached rectangle when that row's own index
  // changes, so refresh them all once the placeholder has followed the element.
  window.requestAnimationFrame(() => {
    registry.forEach((node) => {
      manager.registry.droppables.get(node.key)?.refreshShape();
    });
  });
};

/**
 * Tree rules for where the gap goes relative to the hovered row: the top half
 * places before it; the bottom half of an open group makes it the first child;
 * the middle of a childless group nests inside it; otherwise after it.
 */
const locateGap = (
  manager: DragDropManager,
  registry: Registry,
  snapshot: DragSnapshot,
  pointerY: number
) => {
  const { source, target } = manager.dragOperation;
  const node =
    source && target && target.id !== source.id
      ? registry.get(target.id)
      : undefined;
  const list = node?.element.parentElement;
  const rect = node?.element.firstElementChild?.getBoundingClientRect();
  if (!node || !list || !rect || rect.height === 0) return;

  const rel = (pointerY - rect.top) / rect.height;
  const group =
    node.kind === 'root' ? node.element.querySelector(':scope > ul') : null;
  const expanded = node.element.getAttribute('aria-expanded');
  const dragged = snapshot.node.element;
  const place = (into: Element, before: Element | null) =>
    placeGap(manager, registry, snapshot, into, before);

  if (group && expanded === 'true') {
    if (rel < 0.5) place(list, node.element);
    else place(group, rowsOf(group, dragged)[0] ?? null);
  } else if (group && expanded === null && rel >= 0.25 && rel <= 0.75) {
    place(group, null);
  } else if (rel < 0.5) {
    place(list, node.element);
  } else {
    place(list, nextRowAfter(node.element, dragged));
  }
};

const restoreRow = ({ node, originList, originIndex }: DragSnapshot) => {
  const before = rowsOf(originList, node.element)[originIndex] ?? null;
  originList.insertBefore(node.element, before);
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

export interface TreeViewProps<T>
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
   * Selected Items. A Root with no selectable Item inside is selectable
   * itself, so it can appear here as well.
   */
  selected?: T[];
  defaultSelected?: T[];
  onSelectedChange?: (items: T[]) => void;
  /**
   * Derives a unique key from a node value. Applied to Root values as well as
   * Item values. Defaults to the value itself for strings and numbers, or its
   * `id` for objects.
   */
  getItemValue?: (item: T) => TreeViewNodeKey;
  /**
   * Adds a drag handle at the start of every row, shown on hover. Siblings
   * shift to open a gap where the node will land, in this list or between the
   * children of another Root. Hovering a collapsed Root opens it; hovering a
   * Root without children opens an empty slot beneath it to nest into. Roots
   * taking part in moves should have a `value` so `onMove` can identify them.
   */
  sortable?: boolean;
  /** Called once per drop. Apply it to your data, e.g. with `applyTreeViewMove`. */
  onMove?: (event: TreeViewMoveEvent) => void;
  /** Row height: `md` is 40px, `lg` is 48px. */
  size?: TreeViewSize;
  /** Reports how many Roots with children exist and how many are open. */
  onExpandedChange?: (state: TreeViewExpandedState) => void;
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
 * drag handle or overlay actions, keep their own tab stops.
 */
function TreeViewInner<T>(
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
    onExpandedChange,
    ariaLabels,
    className,
    style,
    children,
    ...props
  }: TreeViewProps<T>,
  ref: React.ForwardedRef<TreeViewHandle>
) {
  const registryRef = React.useRef<Registry>(new Map());
  const [, bumpVersion] = React.useReducer((v: number) => v + 1, 0);

  const register = React.useCallback((node: TreeNode) => {
    const registry = registryRef.current;
    if (process.env.NODE_ENV === 'development' && registry.has(node.key)) {
      console.warn(
        `TreeView: duplicate node key "${String(node.key)}". Item values must resolve to unique keys across the whole tree.`
      );
    }
    registry.set(node.key, node);
    bumpVersion();
    return () => {
      if (registry.get(node.key) === node) registry.delete(node.key);
      bumpVersion();
    };
  }, []);

  const [openState, setOpenState] = React.useState<OpenState>(() => ({
    overrides: new Map(),
  }));

  const isOpen = (key: TreeViewNodeKey, defaultOpen?: boolean) =>
    openState.overrides.get(key) ??
    openState.all ??
    defaultOpen ??
    !allCollapsed;

  const setOpen = (key: TreeViewNodeKey, open: boolean) => {
    setOpenState((state) => ({
      ...state,
      overrides: new Map(state.overrides).set(key, open),
    }));
  };

  React.useImperativeHandle(
    ref,
    () => ({
      collapseAll: () => setOpenState({ all: false, overrides: new Map() }),
      expandAll: () => setOpenState({ all: true, overrides: new Map() }),
    }),
    []
  );

  const [focusKey, setFocusKey] = React.useState<TreeViewNodeKey | null>(null);

  const nodeOf = (element: Element | null | undefined) =>
    Array.from(registryRef.current.values()).find(
      (node) => node.element === element
    );

  /** Whether every group above the node is open. */
  const isShown = (node: TreeNode) => {
    const registry = registryRef.current;
    for (
      let parent =
        node.parentKey === null ? undefined : registry.get(node.parentKey);
      parent;
      parent =
        parent.parentKey === null ? undefined : registry.get(parent.parentKey)
    ) {
      if (!isOpen(parent.key, parent.defaultOpen)) return false;
    }
    return true;
  };

  // The tree has one tab stop: the row focused last, or the first row while
  // that one is gone or hidden.
  const focused =
    focusKey === null ? undefined : registryRef.current.get(focusKey);
  const activeKey =
    focused && isShown(focused)
      ? focused.key
      : (Array.from(registryRef.current.values())
          .filter((node) => node.parentKey === null)
          .sort(byDocumentPosition)[0]?.key ?? null);

  const expandedRef = React.useRef<TreeViewExpandedState | null>(null);
  React.useEffect(() => {
    if (!onExpandedChange) return;
    let expandable = 0;
    let open = 0;
    registryRef.current.forEach((node) => {
      if (node.kind !== 'root' || !node.hasChildren) return;
      expandable += 1;
      if (isOpen(node.key, node.defaultOpen)) open += 1;
    });
    const previous = expandedRef.current;
    if (previous?.expandable === expandable && previous.open === open) return;
    expandedRef.current = { expandable, open };
    onExpandedChange({ expandable, open });
  });

  const isControlled = selected !== undefined;
  const [internalSelected, setInternalSelected] = React.useState<T[]>(
    () => defaultSelected ?? []
  );
  const currentSelected = selected ?? internalSelected;
  const selectedKeys = new Set(
    currentSelected.map((item) => getItemValue(item))
  );
  const leavesByRoot = selectable
    ? collectLeaves(registryRef.current)
    : new Map<TreeViewNodeKey, Leaf[]>();

  const select = (leaves: Leaf[], checked: boolean) => {
    let next: T[];
    if (checked) {
      const added = leaves
        .filter((leaf) => !selectedKeys.has(leaf.valueKey))
        .sort(byDocumentPosition);
      if (added.length === 0) return;
      next = [...currentSelected, ...added.map((leaf) => leaf.getValue() as T)];
    } else {
      const removed = new Set(leaves.map((leaf) => leaf.valueKey));
      next = currentSelected.filter((item) => !removed.has(getItemValue(item)));
      if (next.length === currentSelected.length) return;
    }
    if (!isControlled) setInternalSelected(next);
    onSelectedChange?.(next);
  };

  const getRootSelection = (key: TreeViewNodeKey): RootSelection => {
    const leaves = leavesByRoot.get(key) ?? [];
    const enabled = leaves.filter((leaf) => !leaf.disabled);
    const countSelected = (list: Leaf[]) =>
      list.filter((leaf) => selectedKeys.has(leaf.valueKey)).length;
    const selectedCount = countSelected(leaves);
    const state =
      selectedCount === 0
        ? 'none'
        : selectedCount === leaves.length ||
            (enabled.length > 0 && countSelected(enabled) === enabled.length)
          ? 'all'
          : 'some';
    return { state, selectable: enabled.length > 0 };
  };

  const toggleItem = (key: TreeViewNodeKey) => {
    const node = registryRef.current.get(key);
    if (node && hasValue(node)) {
      select([node], !selectedKeys.has(node.valueKey));
    }
  };

  const setRootSelected = (key: TreeViewNodeKey, checked: boolean) =>
    select(
      (leavesByRoot.get(key) ?? []).filter((leaf) => !leaf.disabled),
      checked
    );

  const handleFocus = (event: React.FocusEvent<HTMLUListElement>) => {
    const node = nodeOf(
      (event.target as HTMLElement).closest('[role="treeitem"]')
    );
    if (node) setFocusKey(node.key);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
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
  const pointerYRef = React.useRef<number | null>(null);

  const clearDwell = () => {
    if (dwellRef.current) window.clearTimeout(dwellRef.current.timer);
    dwellRef.current = null;
  };

  const canDrop = (sourceKey: TreeViewNodeKey, targetKey: TreeViewNodeKey) => {
    const registry = registryRef.current;
    for (
      let node = registry.get(targetKey);
      node;
      node = node.parentKey === null ? undefined : registry.get(node.parentKey)
    ) {
      if (node.key === sourceKey) return false;
    }
    return true;
  };

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
    };
    pointerYRef.current = null;
    syncIndexes(manager, registryRef.current);
  };

  const handleDragMove = (event: DragMoveEvent, manager: DragDropManager) => {
    const snapshot = dragRef.current;
    if (!snapshot) return;
    // The operation's position is applied after this event, so use the
    // coordinates the event carries.
    const { y } = manager.dragOperation.position.current;
    const pointerY = event.to ? event.to.y : event.by ? y + event.by.y : y;
    pointerYRef.current = pointerY;
    locateGap(manager, registryRef.current, snapshot, pointerY);
  };

  const handleDragOver = (event: DragOverEvent, manager: DragDropManager) => {
    const { source, target } = event.operation;
    const snapshot = dragRef.current;
    if (!source || !target || !snapshot) {
      clearDwell();
      return;
    }
    // The operation's position can lag a step behind the pointer; prefer the
    // coordinates the last dragmove carried.
    locateGap(
      manager,
      registryRef.current,
      snapshot,
      pointerYRef.current ?? manager.dragOperation.position.current.y
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

  const handleDragEnd = (event: DragEndEvent) => {
    const snapshot = dragRef.current;
    dragRef.current = null;
    clearDwell();
    if (!snapshot) return;
    const { node, originList, originIndex, reopen } = snapshot;
    if (reopen) setOpen(node.key, true);
    const list = node.element.parentElement;
    const toIndex = list ? rowsOf(list).indexOf(node.element) : -1;
    const from = ownerOf(originList);
    const to = list ? ownerOf(list) : undefined;
    const moved = list !== originList || toIndex !== originIndex;
    if (
      event.canceled ||
      !onMove ||
      !moved ||
      from === undefined ||
      to === undefined
    ) {
      // Nothing will re-render, so put the row back ourselves.
      restoreRow(snapshot);
      return;
    }
    // React re-parents the node itself; it must find it where it left it.
    if (list !== originList) restoreRow(snapshot);
    onMove({
      key: node.valueKey ?? node.key,
      kind: node.kind,
      value: node.getValue(),
      from: placement(from, originIndex),
      to: placement(to, toIndex),
    });
  };

  const contextValue: TreeViewContextValue = {
    selectable,
    sortable,
    size,
    ariaLabels: { dragHandle: ariaLabels?.dragHandle ?? 'Drag to reorder' },
    activeKey,
    resolveKey: (value) => getItemValue(value as T),
    register,
    isOpen,
    setOpen,
    isSelected: (valueKey) => selectedKeys.has(valueKey),
    getRootSelection,
    toggleItem,
    setRootSelected,
    canDrop,
  };

  const tree = (
    <TreeViewContext.Provider value={contextValue}>
      <ul
        ref={treeRef}
        role="tree"
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        {...props}
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
      onBeforeDragStart={handleBeforeDragStart}
      onDragMove={handleDragMove}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      {tree}
    </DragDropProvider>
  );
}

type TreeViewComponent = <T>(
  props: TreeViewProps<T> & { ref?: React.Ref<TreeViewHandle> }
) => React.ReactElement;

const TreeViewContainer = React.forwardRef(
  TreeViewInner
) as TreeViewComponent & { displayName?: string };
TreeViewContainer.displayName = 'TreeView';

/* -------------------------------------------------------------------------- */
/*                                Move helper                                 */
/* -------------------------------------------------------------------------- */

export interface TreeViewMoveAccessors<N> {
  getKey: (node: N) => TreeViewNodeKey;
  /** Return undefined for leaf nodes so Roots and Items sharing a key stay apart. */
  getChildren: (node: N) => N[] | undefined;
  withChildren: (node: N, children: N[]) => N;
}

/**
 * Applies a `TreeViewMoveEvent` to nested data and returns the new nodes.
 * Untouched branches keep their identity.
 */
export const applyTreeViewMove = <N,>(
  nodes: N[],
  event: TreeViewMoveEvent,
  accessors: TreeViewMoveAccessors<N>
): N[] => {
  const { getKey, getChildren, withChildren } = accessors;
  const isRoot = event.kind === 'root';
  let moved: N | undefined;

  const replaceAt = (list: N[], index: number, node: N) =>
    list.map((current, i) => (i === index ? node : current));

  const remove = (list: N[]): N[] => {
    for (let i = 0; i < list.length; i += 1) {
      const node = list[i] as N;
      const children = getChildren(node);
      if (getKey(node) === event.key && (children !== undefined) === isRoot) {
        moved = node;
        return list.filter((_, j) => j !== i);
      }
      if (children) {
        const nextChildren = remove(children);
        if (nextChildren !== children) {
          return replaceAt(list, i, withChildren(node, nextChildren));
        }
      }
    }
    return list;
  };

  const insert = (list: N[], node: N): N[] => {
    const { parentKey, index } = event.to;
    if (parentKey === null) {
      return [...list.slice(0, index), node, ...list.slice(index)];
    }
    for (let i = 0; i < list.length; i += 1) {
      const candidate = list[i] as N;
      const children = getChildren(candidate);
      if (children === undefined) continue;
      const nextChildren =
        getKey(candidate) === parentKey
          ? [...children.slice(0, index), node, ...children.slice(index)]
          : insert(children, node);
      if (nextChildren !== children) {
        return replaceAt(list, i, withChildren(candidate, nextChildren));
      }
    }
    return list;
  };

  const withoutNode = remove(nodes);
  return moved === undefined ? nodes : insert(withoutNode, moved);
};

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
>(({ forceVisible = false, className, style, children, ...props }, ref) => (
  <div
    ref={ref}
    data-force-visible={forceVisible || undefined}
    {...props}
    className={cn(
      `right-0 top-0 bottom-0 pr-md pl-16 z-slight pointer-events-none absolute
      flex w-max items-center`,
      forceVisible
        ? 'opacity-100'
        : `opacity-0 transition-opacity group-hover:opacity-100
          group-has-[:focus-visible]:opacity-100
          [li:focus-visible>div>&]:opacity-100`,
      className
    )}
    style={{
      background:
        'linear-gradient(to right, transparent 0rem, var(--token-color-background-interactive-neutral-hover) 3rem, var(--token-color-background-interactive-neutral-hover) 100%)',
      ...style,
    }}
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
    disabled,
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
  const valueKey =
    value === undefined ? undefined : (ctx.resolveKey(value) ?? undefined);
  if (kind === 'item' && value !== undefined && valueKey === undefined) {
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
  extends Omit<React.LiHTMLAttributes<HTMLLIElement>, 'value' | 'children'> {
  label: React.ReactNode;
  /** Identifies the node and is passed back to `renderRowOverlay`. */
  value?: T;
  renderRowOverlay?: (value: T) => React.ReactNode;
  /** Initial open state for this Root. Ignored once collapseAll/expandAll is called. */
  defaultOpen?: boolean;
  /** Disables selection and dragging for this Root and every nested node. Expanding still works. */
  disabled?: boolean;
  className?: string;
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
  const hasChildren = React.Children.toArray(children).length > 0;
  const { ctx, depth, key, isDisabled, id, setElement, elementRef } =
    useTreeViewNode(
      { kind: 'root', value, disabled, hasChildren, defaultOpen },
      ref
    );
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
      tabIndex={ctx.activeKey === key ? 0 : -1}
      data-state={hasChildren ? (open ? 'open' : 'closed') : undefined}
      {...props}
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
  extends Omit<React.LiHTMLAttributes<HTMLLIElement>, 'value' | 'children'> {
  /** Identifies the node for selection and is passed back to `renderRowOverlay`. */
  value?: T;
  renderRowOverlay?: (value: T) => React.ReactNode;
  disabled?: boolean;
  className?: string;
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
      tabIndex={ctx.activeKey === key ? 0 : -1}
      {...props}
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
