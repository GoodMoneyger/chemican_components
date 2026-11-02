import { default as React } from 'react';
import { TreeMoveEvent, TreeNodeKey } from './types';
export type { TreeMoveEvent, TreeMovePlacement, TreeNodeKey, TreeNodeKind, } from './types';
export { applyTreeMove } from './applyTreeMove';
export type { TreeMoveAccessors } from './applyTreeMove';
export { groupFlatTreeItems } from './groupFlatTreeItems';
export type { FlatTreeAccessors } from './groupFlatTreeItems';
export type TreeSize = 'md' | 'lg';
export type TreeSpacing = 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
export interface TreeHandle {
    collapseAll: () => void;
    expandAll: () => void;
}
export interface TreeAriaLabels {
    dragHandle?: string;
}
/** How many Groups with children exist and how many of them are open. */
export interface TreeExpandedCount {
    expandableCount: number;
    openCount: number;
}
export declare const resolveTreeValue: (value: unknown) => TreeNodeKey;
export interface TreeProps<TSelected = unknown> extends Omit<React.HTMLAttributes<HTMLUListElement>, 'children'> {
    /**
     * Collapses every Group that has no `defaultOpen` and has not been toggled.
     * The ref handle takes over once called.
     */
    defaultCollapsed?: boolean;
    /**
     * Renders a checkbox on Items with a value, and a cascading one on Groups.
     * A Group with nothing selectable inside selects itself instead.
     */
    selectable?: boolean;
    /**
     * Values of the selected Items. A Group with no selectable Item inside is
     * selectable itself, so its value can appear here as well.
     */
    selected?: TSelected[];
    defaultSelected?: TSelected[];
    onSelectedChange?: (values: TSelected[]) => void;
    /**
     * Derives a unique key from a Group or Item value. Defaults to the value
     * itself for strings and numbers, or its `id` for objects.
     */
    getItemValue?: (value: unknown) => TreeNodeKey;
    /**
     * Adds a drag handle at the start of every row, shown on hover. Siblings
     * shift to open a gap where the node will land, in this list or between the
     * children of another Group. Hovering a collapsed Group opens it; hovering a
     * Group without children opens an empty slot beneath it to nest into. Groups
     * taking part in moves should have a `value` so `onMove` can identify them.
     */
    sortable?: boolean;
    /**
     * Called once per drop. Apply it to your data, e.g. with `applyTreeMove`.
     * Annotate the event as `TreeMoveEvent<Item, Group>` to type its values;
     * method syntax keeps that annotation assignable.
     */
    onMove?(event: TreeMoveEvent): void;
    /** Row height: `md` is 40px, `lg` is 48px. */
    size?: TreeSize;
    /** Padding before top-level rows. Defaults to `sm`. */
    indentBase?: TreeSpacing;
    /** Extra padding per nesting level. Defaults to `xl`. */
    indentStep?: TreeSpacing;
    /** Reports how many Groups with children exist and how many are open. */
    onExpandedCountChange?: (state: TreeExpandedCount) => void;
    ariaLabels?: TreeAriaLabels;
    children: React.ReactNode;
}
type TreeComponent = <TSelected = unknown>(props: TreeProps<TSelected> & {
    ref?: React.ForwardedRef<TreeHandle>;
}) => React.ReactElement;
export interface TreeRowOverlayProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
    /** Keep the overlay visible (e.g. while a dropdown opened from it is open). */
    forceVisible?: boolean;
    children: React.ReactNode;
}
export interface TreeGroupProps<T> extends Omit<React.LiHTMLAttributes<HTMLLIElement>, 'value' | 'children' | 'tabIndex'> {
    label: React.ReactNode;
    /** Identifies the node and is passed back to `renderRowOverlay`. */
    value?: T;
    renderRowOverlay?: (value: T) => React.ReactNode;
    /** Initial open state for this Group. Ignored once collapseAll/expandAll is called. */
    defaultOpen?: boolean;
    /** Disables selection and dragging for this Group and every nested node. Expanding still works. */
    disabled?: boolean;
    children?: React.ReactNode;
}
type TreeGroupComponent = <T>(props: TreeGroupProps<T> & {
    ref?: React.ForwardedRef<HTMLLIElement>;
}) => React.ReactElement;
export interface TreeItemProps<T> extends Omit<React.LiHTMLAttributes<HTMLLIElement>, 'value' | 'children' | 'tabIndex'> {
    /** Identifies the node for selection and is passed back to `renderRowOverlay`. */
    value?: T;
    renderRowOverlay?: (value: T) => React.ReactNode;
    disabled?: boolean;
    children: React.ReactNode;
}
type TreeItemComponent = <T>(props: TreeItemProps<T> & {
    ref?: React.ForwardedRef<HTMLLIElement>;
}) => React.ReactElement;
export declare const Tree: TreeComponent & {
    displayName?: string;
} & {
    Group: TreeGroupComponent & {
        displayName?: string;
    };
    Item: TreeItemComponent & {
        displayName?: string;
    };
    RowOverlay: React.ForwardRefExoticComponent<TreeRowOverlayProps & React.RefAttributes<HTMLDivElement>>;
};
