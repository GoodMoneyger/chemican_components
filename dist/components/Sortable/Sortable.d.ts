import { default as React } from 'react';
export type SortableItemId = string | number;
export interface SortableContainerProps<T> {
    value: T[];
    onValueChange: (value: T[]) => void;
    getItemValue?: (item: T) => SortableItemId;
    disabled?: boolean;
    className?: string;
    children: React.ReactNode;
}
interface SortableItemAriaLabels {
    moveUp?: string;
    moveDown?: string;
}
export interface SortableItemProps {
    value: SortableItemId;
    disabled?: boolean;
    showMoveButtons?: boolean;
    actions?: React.ReactNode;
    ariaLabels?: SortableItemAriaLabels;
    className?: string;
    children: React.ReactNode;
}
export declare const Sortable: {
    Container: <T>(props: SortableContainerProps<T> & {
        ref?: React.ForwardedRef<HTMLUListElement>;
    }) => React.ReactElement;
    Item: React.ForwardRefExoticComponent<SortableItemProps & React.RefAttributes<HTMLLIElement>>;
};
export {};
