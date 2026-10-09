import React from 'react';

import { Button } from '../Button';
import type { ButtonProps } from '../Button';
import { TextLink } from '../TextLink';
import { TreeView, resolveTreeViewItemValue } from '../TreeView';
import type {
  TreeViewExpandedCount,
  TreeViewHandle,
  TreeViewMoveEvent,
  TreeViewNodeKey,
  TreeViewProps,
} from '../TreeView';
import { cn } from '../../lib/utils';

import { applyTreeListMove } from './applyTreeListMove';
import type { TreeListMoveAccessors } from './applyTreeListMove';

export interface TreeListAction<T> {
  onAction: (item: T) => void;
  /** Button text. It is also the accessible name when it is a string. */
  label: React.ReactNode;
  /** Accessible name, required when `label` is not a plain string. */
  ariaLabel?: string;
  disabled?: (item: T) => boolean;
}

export interface TreeListActions<T> {
  add?: TreeListAction<T>;
  edit?: TreeListAction<T>;
  move?: TreeListAction<T>;
  delete?: TreeListAction<T>;
  /** The only action shown on items that `isDeleted` marks. */
  restore?: TreeListAction<T>;
}

export interface TreeListLabels {
  expandAll: React.ReactNode;
  collapseAll: React.ReactNode;
}

interface TreeListBaseProps<T>
  extends Omit<
    TreeViewProps<T>,
    'children' | 'size' | 'onExpandedCountChange'
  > {
  /**
   * Flat list of nodes. Nesting comes from `getParentKey`. The list is
   * grouped again whenever it or one of the accessors changes identity, so
   * pass stable accessors for long lists.
   */
  items: T[];
  /**
   * Key of the parent node, or null for a top-level node. Keys are compared
   * with `===`, so return the same primitive type as `getItemValue`.
   */
  getParentKey: (item: T) => TreeViewNodeKey | null | undefined;
  getLabel: (item: T) => React.ReactNode;
  /** Sort key among siblings. Items keep their array order when omitted. */
  getOrder?: (item: T) => number;
  /** Title shown in the header bar above the rows. */
  header: React.ReactNode;
  /** Row actions, each shown as a text button with its label. */
  actions?: TreeListActions<T>;
  /**
   * Marks items pending deletion. They look disabled, cannot be dragged or
   * selected, and their action bar shows only `actions.restore`. The items
   * under them show no actions at all.
   */
  isDeleted?: (item: T) => boolean;
  labels: TreeListLabels;
}

interface TreeListUncontrolledMoveProps {
  onItemsChange?: never;
  withPlacement?: never;
}

interface TreeListControlledMoveProps<T> {
  /**
   * Called once per drop with `items` after the move, where the moved item
   * has its new parent and the siblings it left and joined are numbered again
   * from zero. `onMove` still fires after it.
   */
  onItemsChange: (items: T[]) => void;
  getOrder: (item: T) => number;
  /** Returns the item with its new parent and order. */
  withPlacement: TreeListMoveAccessors<T>['withPlacement'];
}

export type TreeListProps<T> = TreeListBaseProps<T> &
  (TreeListUncontrolledMoveProps | TreeListControlledMoveProps<T>);

type ActionName = keyof TreeListActions<unknown>;

const actionOrder: ActionName[] = ['add', 'edit', 'move', 'delete', 'restore'];

const actionIntents: Record<ActionName, ButtonProps['intent']> = {
  add: 'primary',
  edit: 'secondary',
  move: 'secondary',
  delete: 'primary',
  restore: 'secondary',
};

const indentVariables = {
  '--tree-indent-base': 'var(--token-spacing-xl)',
  '--tree-indent-step': 'var(--token-spacing-lg)',
} as React.CSSProperties;

/**
 * A titled, flat-list driven tree: a header bar, expand all / collapse all
 * controls, and optional per-row actions, on top of `TreeView`. Every other
 * `TreeView` prop, such as `selectable` or `sortable`, passes through.
 */
function TreeListInner<T>(
  {
    items,
    getParentKey,
    getLabel,
    getOrder,
    header,
    actions,
    isDeleted,
    labels,
    onItemsChange,
    withPlacement,
    onMove,
    getItemValue = resolveTreeViewItemValue,
    className,
    style,
    ...treeProps
  }: TreeListProps<T>,
  ref: React.ForwardedRef<TreeViewHandle>
) {
  const treeRef = React.useRef<TreeViewHandle>(null);
  const headerId = React.useId();
  const labelled =
    treeProps['aria-label'] !== undefined ||
    treeProps['aria-labelledby'] !== undefined;
  React.useImperativeHandle(
    ref,
    () => ({
      collapseAll: () => treeRef.current?.collapseAll(),
      expandAll: () => treeRef.current?.expandAll(),
    }),
    []
  );

  const [expanded, setExpanded] = React.useState<TreeViewExpandedCount>({
    expandable: 0,
    open: 0,
  });

  const childrenByParent = React.useMemo(() => {
    const keys = new Set<TreeViewNodeKey>();
    items.forEach((item) => keys.add(getItemValue(item)));

    const groups = new Map<TreeViewNodeKey | null, T[]>();
    items.forEach((item) => {
      const parent = getParentKey(item) ?? null;
      // Nodes whose parent is missing surface at the top level.
      const group = parent !== null && keys.has(parent) ? parent : null;
      const siblings = groups.get(group);
      if (siblings) siblings.push(item);
      else groups.set(group, [item]);
    });

    if (getOrder) {
      groups.forEach((siblings) =>
        siblings.sort((a, b) => getOrder(a) - getOrder(b))
      );
    }

    return groups;
  }, [items, getItemValue, getParentKey, getOrder]);

  const warnedItemsRef = React.useRef<T[] | null>(null);
  React.useEffect(() => {
    if (warnedItemsRef.current === items) return;
    let reachable = 0;
    const visit = (parent: TreeViewNodeKey | null) =>
      (childrenByParent.get(parent) ?? []).forEach((item) => {
        reachable += 1;
        visit(getItemValue(item));
      });
    visit(null);
    if (reachable < items.length) {
      warnedItemsRef.current = items;
      console.warn(
        `TreeList: ${items.length - reachable} item(s) cannot be reached from the top level. Check \`getParentKey\` for cycles.`
      );
    }
  }, [items, childrenByParent, getItemValue]);

  /** Keys of the items under a deleted one, which offer no actions. */
  const underDeleted = React.useMemo(() => {
    const keys = new Set<TreeViewNodeKey>();
    if (!isDeleted) return keys;
    const mark = (parent: TreeViewNodeKey | null, inherited: boolean) =>
      (childrenByParent.get(parent) ?? []).forEach((item) => {
        const key = getItemValue(item);
        if (inherited) keys.add(key);
        mark(key, inherited || isDeleted(item));
      });
    mark(null, false);
    return keys;
  }, [childrenByParent, getItemValue, isDeleted]);

  const present = actionOrder.filter((name) => actions?.[name]);
  const actionsFor = (item: T) => {
    if (isDeleted?.(item)) return present.filter((name) => name === 'restore');
    if (underDeleted.has(getItemValue(item))) return [];
    return present.filter((name) => name !== 'restore');
  };

  const renderRowOverlay =
    present.length > 0
      ? (item: T) => {
          const names = actionsFor(item);
          if (names.length === 0) return null;
          return (
            <>
              {names.map((name) => {
                const action = actions?.[name];
                if (!action) return null;
                const ariaLabel =
                  action.ariaLabel ??
                  (typeof action.label === 'string' ? action.label : name);
                return (
                  <Button
                    key={name}
                    type="button"
                    intent={actionIntents[name]}
                    size="xs"
                    danger={name === 'delete'}
                    aria-label={ariaLabel}
                    disabled={action.disabled?.(item) ?? false}
                    onClick={() => action.onAction(item)}
                  >
                    {action.label}
                  </Button>
                );
              })}
            </>
          );
        }
      : undefined;

  const renderLevel = (parentKey: TreeViewNodeKey | null): React.ReactNode =>
    (childrenByParent.get(parentKey) ?? []).map((item) => {
      const key = getItemValue(item);
      return (
        <TreeView.Root
          key={key}
          value={item}
          label={getLabel(item)}
          disabled={isDeleted?.(item) ?? false}
          {...(renderRowOverlay && { renderRowOverlay })}
        >
          {renderLevel(key)}
        </TreeView.Root>
      );
    });

  const handleMove = onItemsChange
    ? (event: TreeViewMoveEvent) => {
        onItemsChange(
          applyTreeListMove(items, event, {
            getItemValue,
            getParentKey,
            getOrder,
            withPlacement,
          })
        );
        onMove?.(event);
      }
    : onMove;

  const canExpand =
    expanded.expandable > 0 && expanded.open < expanded.expandable;
  const canCollapse = expanded.open > 0;

  return (
    <div className={cn('flex w-full flex-col', className)} style={style}>
      <div
        className="gap-xs pb-sm text-sm text-body-secondary flex items-center
          justify-end"
      >
        <TextLink asChild intent="tertiary" disabled={!canExpand}>
          <button
            type="button"
            disabled={!canExpand}
            onClick={() => treeRef.current?.expandAll()}
          >
            {labels.expandAll}
          </button>
        </TextLink>
        <span aria-hidden>|</span>
        <TextLink asChild intent="tertiary" disabled={!canCollapse}>
          <button
            type="button"
            disabled={!canCollapse}
            onClick={() => treeRef.current?.collapseAll()}
          >
            {labels.collapseAll}
          </button>
        </TextLink>
      </div>
      <div className="border-surface-default bg-surface-primary border-y">
        <div className="bg-surface-tertiary pl-xs h-10 flex items-center">
          <div
            id={headerId}
            className="px-md text-sm text-body-secondary truncate"
          >
            {header}
          </div>
        </div>
        <TreeView
          ref={treeRef}
          size="lg"
          aria-labelledby={labelled ? undefined : headerId}
          getItemValue={getItemValue}
          onExpandedCountChange={setExpanded}
          {...(handleMove && { onMove: handleMove })}
          className="border-surface-default divide-surface-default rounded-none
            border-x-0 border-t border-b-0"
          style={indentVariables}
          {...treeProps}
        >
          {renderLevel(null)}
        </TreeView>
      </div>
    </div>
  );
}

type TreeListComponent = <T>(
  props: TreeListProps<T> & { ref?: React.Ref<TreeViewHandle> }
) => React.ReactElement;

export const TreeList = React.forwardRef(TreeListInner) as TreeListComponent & {
  displayName?: string;
};
TreeList.displayName = 'TreeList';

export { applyTreeListMove } from './applyTreeListMove';
export type { TreeListMoveAccessors } from './applyTreeListMove';
