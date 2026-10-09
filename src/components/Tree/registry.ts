import type { TreeNodeKey, TreeNodeKind } from './types';

/** A mounted Group or Item. */
export interface TreeNode {
  /** Unique within the tree. Groups with a value are prefixed so they never collide with Items. */
  key: TreeNodeKey;
  /** Key of `value` as resolved by `getItemValue`. Undefined for nodes without a value. */
  valueKey: TreeNodeKey | undefined;
  parentKey: TreeNodeKey | null;
  kind: TreeNodeKind;
  disabled: boolean;
  hasChildren: boolean;
  defaultOpen: boolean | undefined;
  element: HTMLLIElement;
  getValue: () => unknown;
}

export type Registry = Map<TreeNodeKey, TreeNode>;

export type Leaf = TreeNode & { valueKey: TreeNodeKey };

export interface GroupSelection {
  state: 'all' | 'some' | 'none';
  /** Whether the Group's checkbox can change anything. */
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
 * Selectable leaves under every Group: the Items with a value nested anywhere
 * inside it, or the Group itself when it has a value and nothing selectable
 * inside.
 */
export const collectLeaves = (registry: Registry) => {
  const children = new Map<TreeNodeKey | null, TreeNode[]>();
  registry.forEach((node) => {
    const siblings = children.get(node.parentKey);
    if (siblings) siblings.push(node);
    else children.set(node.parentKey, [node]);
  });

  const leavesByGroup = new Map<TreeNodeKey, Leaf[]>();
  const collect = (group: TreeNode): Leaf[] => {
    const leaves: Leaf[] = [];
    (children.get(group.key) ?? []).forEach((child) => {
      if (child.kind === 'group') leaves.push(...collect(child));
      else if (hasValue(child)) leaves.push(child);
    });
    const own = leaves.length === 0 && hasValue(group) ? [group] : leaves;
    leavesByGroup.set(group.key, own);
    return own;
  };
  (children.get(null) ?? []).forEach((node) => {
    if (node.kind === 'group') collect(node);
  });
  return leavesByGroup;
};

/**
 * Checkbox state of a Group from its leaves. Disabled leaves count towards
 * `all` only when every enabled leaf is selected, so a Group whose enabled
 * leaves are all checked reads as fully selected.
 */
export const groupSelectionOf = (
  leaves: Leaf[],
  isSelected: (valueKey: TreeNodeKey) => boolean
): GroupSelection => {
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
