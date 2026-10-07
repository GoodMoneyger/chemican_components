import React from 'react';
import {
  IconFolderSymlink,
  IconPencil,
  IconPlus,
  IconRestore,
  IconTrash,
} from '@tabler/icons-react';

import { Button } from '../Button';
import { TextLink } from '../TextLink';
import { Tooltip } from '../Tooltip';
import { TreeView, resolveTreeViewItemValue } from '../TreeView';
import type {
  TreeViewExpandedState,
  TreeViewHandle,
  TreeViewMoveEvent,
  TreeViewNodeKey,
  TreeViewProps,
} from '../TreeView';
import type { IconProp } from '../../lib/utils';
import { cn } from '../../lib/utils';

export interface TreeListAction<T> {
  onAction: (item: T) => void;
  /** Tooltip content. It is also the accessible name when it is a string. */
  label: React.ReactNode;
  /** Accessible name, required when `label` is not a plain string. */
  ariaLabel?: string;
  icon?: IconProp;
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
  expandAll?: React.ReactNode;
  collapseAll?: React.ReactNode;
}

export interface TreeListProps<T>
  extends Omit<TreeViewProps<T>, 'children' | 'size' | 'onExpandedChange'> {
  /** Flat list of nodes. Nesting comes from `getParentKey`. */
  items: T[];
  /** Key of the parent node, or null for a top-level node. */
  getParentKey: (item: T) => TreeViewNodeKey | null | undefined;
  getLabel: (item: T) => React.ReactNode;
  /** Sort key among siblings. Items keep their array order when omitted. */
  getOrder?: (item: T) => number;
  /** Title shown in the header bar above the rows. */
  header: React.ReactNode;
  /** Row actions, each shown as an icon button with a tooltip when present. */
  actions?: TreeListActions<T>;
  /**
   * Marks items pending deletion. They look disabled, cannot be dragged or
   * selected, and their action bar shows only `actions.restore`.
   */
  isDeleted?: (item: T) => boolean;
  labels?: TreeListLabels;
}

type ActionName = keyof TreeListActions<unknown>;

const actionOrder: ActionName[] = ['add', 'edit', 'move', 'delete', 'restore'];

const defaultIcons: Record<ActionName, IconProp> = {
  add: IconPlus,
  edit: IconPencil,
  move: IconFolderSymlink,
  delete: IconTrash,
  restore: IconRestore,
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
  React.useImperativeHandle(ref, () => ({
    collapseAll: () => treeRef.current?.collapseAll(),
    expandAll: () => treeRef.current?.expandAll(),
  }));

  const [expanded, setExpanded] = React.useState<TreeViewExpandedState>({
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

  const present = actionOrder.filter((name) => actions?.[name]);
  const actionsFor = (item: T) =>
    present.filter((name) =>
      isDeleted?.(item) ? name === 'restore' : name !== 'restore'
    );

  const renderRowOverlay =
    present.length > 0
      ? (item: T) => (
          <>
            {actionsFor(item).map((name) => {
              const action = actions?.[name];
              if (!action) return null;
              const ariaLabel =
                action.ariaLabel ??
                (typeof action.label === 'string' ? action.label : name);
              return (
                <Tooltip key={name} content={action.label}>
                  <Button
                    type="button"
                    intent="tertiary"
                    size="xs"
                    icon={action.icon ?? defaultIcons[name]}
                    danger={name === 'delete'}
                    aria-label={ariaLabel}
                    disabled={action.disabled?.(item) ?? false}
                    onClick={() => action.onAction(item)}
                  />
                </Tooltip>
              );
            })}
          </>
        )
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
            {labels?.expandAll ?? 'Expand all'}
          </button>
        </TextLink>
        <span aria-hidden>|</span>
        <TextLink asChild intent="tertiary" disabled={!canCollapse}>
          <button
            type="button"
            disabled={!canCollapse}
            onClick={() => treeRef.current?.collapseAll()}
          >
            {labels?.collapseAll ?? 'Collapse all'}
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
          onExpandedChange={setExpanded}
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

/* -------------------------------------------------------------------------- */
/*                                Move helper                                 */
/* -------------------------------------------------------------------------- */

export interface TreeListMoveAccessors<T> {
  getItemValue: (item: T) => TreeViewNodeKey;
  getParentKey: (item: T) => TreeViewNodeKey | null | undefined;
  getOrder: (item: T) => number;
  /** Returns the item with its new parent and order. */
  withPlacement: (
    item: T,
    parentKey: TreeViewNodeKey | null,
    order: number
  ) => T;
}

/**
 * Applies a `TreeViewMoveEvent` to a flat list: the moved item gets its new
 * parent, and the siblings of both the old and the new parent are numbered
 * again from zero. Untouched items keep their identity.
 */
export const applyTreeListMove = <T,>(
  items: T[],
  event: TreeViewMoveEvent,
  accessors: TreeListMoveAccessors<T>
): T[] => {
  const { getItemValue, getParentKey, getOrder, withPlacement } = accessors;
  const moved = items.find((item) => getItemValue(item) === event.key);
  if (!moved) return items;
  const siblingsOf = (parent: TreeViewNodeKey | null) =>
    items
      .filter(
        (item) =>
          (getParentKey(item) ?? null) === parent &&
          getItemValue(item) !== event.key
      )
      .sort((a, b) => getOrder(a) - getOrder(b));
  const placements = new Map<
    TreeViewNodeKey,
    [TreeViewNodeKey | null, number]
  >();
  const target = siblingsOf(event.to.parentKey);
  target.splice(event.to.index, 0, moved);
  target.forEach((item, index) =>
    placements.set(getItemValue(item), [event.to.parentKey, index])
  );
  if (event.from.parentKey !== event.to.parentKey) {
    siblingsOf(event.from.parentKey).forEach((item, index) =>
      placements.set(getItemValue(item), [event.from.parentKey, index])
    );
  }
  return items.map((item) => {
    const placement = placements.get(getItemValue(item));
    return placement ? withPlacement(item, placement[0], placement[1]) : item;
  });
};
