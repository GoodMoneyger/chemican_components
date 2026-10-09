import { default as React } from 'react';
import { ButtonProps } from '../Button';
import { TreeHandle, TreeMoveEvent, TreeNodeKey, TreeProps } from './Tree';
import { TreeListMoveAccessors } from './applyTreeListMove';
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
interface TreeListBaseProps<T> extends Omit<TreeProps, 'children' | 'size' | 'onExpandedCountChange' | 'selected' | 'defaultSelected' | 'onSelectedChange' | 'getItemValue' | 'onMove'> {
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
    getParentKey: (item: T) => TreeNodeKey | null | undefined;
    getLabel: (item: T) => React.ReactNode;
    /** Sort key among siblings. Items keep their array order when omitted. */
    getOrder?: (item: T) => number;
    /** Title shown in the header bar above the rows. */
    header: React.ReactNode;
    /**
     * Row actions, shown as buttons in the order returned. Called for every
     * row; return an empty array to show none. Like `getLabel` and
     * `isItemDisabled`, pass a stable function so rows are not rebuilt on
     * every render.
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
    getItemValue?: (item: T) => TreeNodeKey;
    onMove?: (event: TreeMoveEvent<T, T>) => void;
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
export type TreeListProps<T> = TreeListBaseProps<T> & (TreeListUncontrolledMoveProps | TreeListControlledMoveProps<T>);
type TreeListComponent = <T>(props: TreeListProps<T> & {
    ref?: React.Ref<TreeHandle>;
}) => React.ReactElement;
export declare const TreeList: TreeListComponent & {
    displayName?: string;
};
export { applyTreeListMove } from './applyTreeListMove';
export type { TreeListMoveAccessors } from './applyTreeListMove';
