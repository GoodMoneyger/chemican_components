import { default as React } from '../../../node_modules/react';
import { Select as RadixSelect } from 'radix-ui';
import { VariantProps } from 'class-variance-authority';
import { IconProp } from '../../lib/utils';
declare const selectVariants: (props?: ({
    variant?: "default" | "compact" | null | undefined;
    intent?: "primary" | "secondary" | null | undefined;
    invalid?: boolean | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export interface SelectProps extends VariantProps<typeof selectVariants>, Omit<React.ComponentProps<typeof RadixSelect.Root>, 'value'> {
    options: {
        value: string;
        label: React.ReactNode;
        icon?: IconProp;
        type?: 'Option' | 'Group' | 'Separator';
        disabled?: boolean;
    }[];
    placeholder?: React.ReactNode;
    className?: string;
    icon?: IconProp;
    invalid?: boolean;
    value?: string;
    intent?: 'primary' | 'secondary';
}
export declare const Select: React.FC<SelectProps>;
export {};
