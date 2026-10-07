export type TreeViewNodeKey = string | number;

export type TreeViewNodeKind = 'root' | 'item';

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
