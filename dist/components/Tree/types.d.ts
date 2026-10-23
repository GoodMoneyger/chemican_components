export type TreeNodeKey = string | number;
export type TreeNodeKind = 'group' | 'item';
export interface TreeMovePlacement<TGroup = unknown> {
    /** Key of the parent Group as resolved by `getItemValue`, or null at the top level. */
    parentKey: TreeNodeKey | null;
    /** The parent Group's value. Undefined at the top level or when the Group has no value. */
    parentValue: TGroup | undefined;
    /** Position among the siblings of that parent. */
    index: number;
}
interface TreeMoveEventBase<TGroup> {
    /** Key of the moved node as resolved by `getItemValue`. */
    key: TreeNodeKey;
    from: TreeMovePlacement<TGroup>;
    /** Destination, with `index` counted after the node left its previous place. */
    to: TreeMovePlacement<TGroup>;
}
/**
 * `TItem` and `TGroup` are the value types the consumer gives to
 * `Tree.Item` and `Tree.Group`. Tree cannot check them, so they
 * default to `unknown`.
 */
export type TreeMoveEvent<TItem = unknown, TGroup = unknown> = (TreeMoveEventBase<TGroup> & {
    kind: 'item';
    value: TItem | undefined;
}) | (TreeMoveEventBase<TGroup> & {
    kind: 'group';
    value: TGroup | undefined;
});
export {};
