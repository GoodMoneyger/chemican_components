export type TreeViewNodeKey = string | number;

export type TreeViewNodeKind = 'root' | 'item';

export interface TreeViewMovePlacement<TRoot = unknown> {
  /** Key of the parent Root as resolved by `getItemValue`, or null at the top level. */
  parentKey: TreeViewNodeKey | null;
  /** The parent Root's value. Undefined at the top level or when the Root has no value. */
  parentValue: TRoot | undefined;
  /** Position among the siblings of that parent. */
  index: number;
}

interface TreeViewMoveEventBase<TRoot> {
  /** Key of the moved node as resolved by `getItemValue`. */
  key: TreeViewNodeKey;
  from: TreeViewMovePlacement<TRoot>;
  /** Destination, with `index` counted after the node left its previous place. */
  to: TreeViewMovePlacement<TRoot>;
}

/**
 * `TItem` and `TRoot` are the value types the consumer gives to
 * `TreeView.Item` and `TreeView.Root`. TreeView cannot check them, so they
 * default to `unknown`.
 */
export type TreeViewMoveEvent<TItem = unknown, TRoot = unknown> =
  | (TreeViewMoveEventBase<TRoot> & { kind: 'item'; value: TItem | undefined })
  | (TreeViewMoveEventBase<TRoot> & { kind: 'root'; value: TRoot | undefined });
