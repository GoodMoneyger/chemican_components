import { default as React } from 'react';
import { Select as RadixSelect } from 'radix-ui';
import { VariantProps } from 'class-variance-authority';
import { IconProp } from '../../lib/utils';
declare const selectVariants: (props?: ({
    variant?: "default" | "compact" | null | undefined;
    intent?: "primary" | "secondary" | null | undefined;
    invalid?: boolean | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
type SelectOption<T extends number | string = string> = {
    value: T;
    label: React.ReactNode;
    icon?: IconProp;
    type?: 'Option';
    disabled?: boolean;
} | {
    label: React.ReactNode;
    type: 'Group';
} | {
    type: 'Separator';
};
export interface SelectProps<T extends number | string = string> extends VariantProps<typeof selectVariants>, Omit<React.ComponentProps<typeof RadixSelect.Root>, 'value' | 'onValueChange'> {
    options: SelectOption<T>[];
    placeholder?: React.ReactNode;
    className?: string;
    icon?: IconProp;
    invalid?: boolean;
    value?: T;
    onValueChange?: (value: T) => void;
    intent?: 'primary' | 'secondary';
    hideChevron?: boolean;
    searchPlaceholder?: string;
    searchThreshold?: number;
    /**
     * Custom content for the trigger. When set, it replaces the selected
     * option's label in the trigger (options keep their own labels).
     */
    renderValue?: React.ReactNode;
}
export declare const Select: {
    <T extends number | string = string>({ options, placeholder, className, icon: Icon, invalid, variant, intent, value, hideChevron, onValueChange, searchPlaceholder, searchThreshold, renderValue, ...props }: SelectProps<T>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};
