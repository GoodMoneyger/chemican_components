import React from 'react';

import { Button } from '../Button';
import type { ButtonProps } from '../Button';
import { TextLink } from '../TextLink';
import { TreeView, resolveTreeViewItemValue } from './TreeView';
import type {
  TreeViewExpandedCount,
  TreeViewHandle,
  TreeViewMoveEvent,
  TreeViewNodeKey,
  TreeViewProps,
} from './TreeView';
import { cn } from '../../lib/utils';

import { applyTreeListMove } from './applyTreeListMove';
import type { TreeListMoveAccessors } from './applyTreeListMove';
import { groupFlatTreeItems } from './groupFlatTreeItems';

export interface TreeListAction<T> {
  /** Unique among the actions of one row. */
  key: string;
  /** Button text. It is also the accessible name when it is a string. */
  label: React.ReactNode;
  /** Accessible name, required when `label` is not a plain string. */
  ariaLabel?: string;
  /** Defaults to `secondary`. */
  intent?: ButtonProps['intent'];
  danger?: boolean;
  disabled?: boolean;
  onAction: (item: T) => void;
}

export interface TreeListActionContext {
  /** Whether `isItemDisabled` marks any ancestor of the item. */
  ancestorDisabled: boolean;
}

export interface TreeListLabels {
  expandAll: React.ReactNode;
  collapseAll: React.ReactNode;
}

interface TreeListBaseProps<T>
  extends Omit<
    TreeViewProps,
    | 'children'
    | 'size'
    | 'onExpandedCountChange'
    | 'selected'
    | 'defaultSelected'
    | 'onSelectedChange'
    | 'getItemValue'
    | 'onMove'
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
  /**
   * Row actions, shown as buttons in the order returned. Called for every
   * row; return an empty array to show none.
   */
  actions?: (item: T, context: TreeListActionContext) => TreeListAction<T>[];
  /**
   * Marks items that look disabled and cannot be dragged or selected. Their
   * actions still come from `actions`.
   */
  isItemDisabled?: (item: T) => boolean;
  labels: TreeListLabels;
  selected?: T[];
  defaultSelected?: T[];
  onSelectedChange?: (items: T[]) => void;
  /** Derives a unique key from an item. Defaults to the item itself for strings and numbers, or its `id`. */
  getItemValue?: (item: T) => TreeViewNodeKey;
  onMove?: (event: TreeViewMoveEvent<T, T>) => void;
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
    isItemDisabled,
    labels,
    onItemsChange,
    withPlacement,
    onMove,
    onSelectedChange,
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

  const childrenByParent = React.useMemo(
    () =>
      groupFlatTreeItems(items, {
        getItemValue,
        getParentKey,
        ...(getOrder && { getOrder }),
      }),
    [items, getItemValue, getParentKey, getOrder]
  );

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

  const underDisabled = React.useMemo(() => {
    const keys = new Set<TreeViewNodeKey>();
    if (!isItemDisabled) return keys;
    const mark = (parent: TreeViewNodeKey | null, inherited: boolean) =>
      (childrenByParent.get(parent) ?? []).forEach((item) => {
        const key = getItemValue(item);
        if (inherited) keys.add(key);
        mark(key, inherited || isItemDisabled(item));
      });
    mark(null, false);
    return keys;
  }, [childrenByParent, getItemValue, isItemDisabled]);

  const renderRowOverlay = actions
    ? (item: T) => {
        const rowActions = actions(item, {
          ancestorDisabled: underDisabled.has(getItemValue(item)),
        });
        if (rowActions.length === 0) return null;
        return (
          <>
            {rowActions.map((action) => (
              <Button
                key={action.key}
                type="button"
                intent={action.intent ?? 'secondary'}
                size="xs"
                danger={action.danger ?? false}
                aria-label={
                  action.ariaLabel ??
                  (typeof action.label === 'string' ? action.label : action.key)
                }
                disabled={action.disabled ?? false}
                onClick={() => action.onAction(item)}
              >
                {action.label}
              </Button>
            ))}
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
          disabled={isItemDisabled?.(item) ?? false}
          {...(renderRowOverlay && { renderRowOverlay })}
        >
          {renderLevel(key)}
        </TreeView.Root>
      );
    });

  const handleMove = onItemsChange
    ? (event: TreeViewMoveEvent<T, T>) => {
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
          getItemValue={getItemValue as (value: unknown) => TreeViewNodeKey}
          {...(onSelectedChange && {
            onSelectedChange: onSelectedChange as (values: unknown[]) => void,
          })}
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
