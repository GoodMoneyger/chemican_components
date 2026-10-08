import type { TreeViewNodeKey, TreeViewNodeKind } from './types';

/** A mounted Root or Item. */
export interface TreeNode {
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

export type Registry = Map<TreeViewNodeKey, TreeNode>;

export type Leaf = TreeNode & { valueKey: TreeViewNodeKey };

export interface RootSelection {
  state: 'all' | 'some' | 'none';
  /** Whether the Root's checkbox can change anything. */
  selectable: boolean;
}

export const hasValue = (node: TreeNode): node is Leaf =>
  node.valueKey !== undefined;

export const byDocumentPosition = (a: TreeNode, b: TreeNode) =>
  a.element.compareDocumentPosition(b.element) &
  Node.DOCUMENT_POSITION_FOLLOWING
    ? -1
    : 1;

/**
 * Selectable leaves under every Root: the Items with a value nested anywhere
 * inside it, or the Root itself when it has a value and nothing selectable
 * inside.
 */
export const collectLeaves = (registry: Registry) => {
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

/**
 * Checkbox state of a Root from its leaves. Disabled leaves count towards
 * `all` only when every enabled leaf is selected, so a Root whose enabled
 * leaves are all checked reads as fully selected.
 */
export const rootSelectionOf = (
  leaves: Leaf[],
  isSelected: (valueKey: TreeViewNodeKey) => boolean
): RootSelection => {
  const enabled = leaves.filter((leaf) => !leaf.disabled);
  const countSelected = (list: Leaf[]) =>
    list.filter((leaf) => isSelected(leaf.valueKey)).length;
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
