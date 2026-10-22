import { TreeNodeKey, TreeNodeKind } from './types';
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
export type Leaf = TreeNode & {
    valueKey: TreeNodeKey;
};
export interface GroupSelection {
    state: 'all' | 'some' | 'none';
    /** Whether the Group's checkbox can change anything. */
    selectable: boolean;
}
export declare const hasValue: (node: TreeNode) => node is Leaf;
export declare const byDocumentPosition: (a: TreeNode, b: TreeNode) => 1 | -1;
/**
 * Selectable leaves under every Group: the Items with a value nested anywhere
 * inside it, or the Group itself when it has a value and nothing selectable
 * inside.
 */
export declare const collectLeaves: (registry: Registry) => Map<TreeNodeKey, Leaf[]>;
/**
 * Checkbox state of a Group from its leaves. Disabled leaves count towards
 * `all` only when every enabled leaf is selected, so a Group whose enabled
 * leaves are all checked reads as fully selected.
 */
export declare const groupSelectionOf: (leaves: Leaf[], isSelected: (valueKey: TreeNodeKey) => boolean) => GroupSelection;
