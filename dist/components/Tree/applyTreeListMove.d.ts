import { TreeMoveEvent, TreeNodeKey } from './Tree';
/** Keys are compared with `===`: `getItemValue` and `getParentKey` must return the same primitive type. */
export interface TreeListMoveAccessors<T> {
    getItemValue: (item: T) => TreeNodeKey;
    getParentKey: (item: T) => TreeNodeKey | null | undefined;
    getOrder: (item: T) => number;
    /** Returns the item with its new parent and order. */
    withPlacement: (item: T, parentKey: TreeNodeKey | null, order: number) => T;
}
/**
 * Applies a `TreeMoveEvent` to a flat list: the moved item gets its new
 * parent, and the siblings of both the old and the new parent are numbered
 * again from zero. Untouched items keep their identity.
 */
export declare const applyTreeListMove: <T>(items: T[], event: TreeMoveEvent, accessors: TreeListMoveAccessors<T>) => T[];
