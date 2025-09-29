import { default as React } from '../../../node_modules/react';
import { Select as RadixSelect } from 'radix-ui';
import { TablerIcon } from '../../../@tabler/icons-react/dist/esm/icons/index.mjs';
import { VariantProps } from 'class-variance-authority';
declare const selectVariants: (props?: ({
    variant?: "default" | "compact" | null | undefined;
    intent?: "primary" | "secondary" | null | undefined;
    invalid?: boolean | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export interface SelectProps extends VariantProps<typeof selectVariants>, Omit<React.ComponentProps<typeof RadixSelect.Root>, 'value'> {
    options: {
        value: string;
        label: string | React.ReactNode;
        icon?: TablerIcon;
        type?: 'Option' | 'Group' | 'Separator';
    }[];
    placeholder?: string;
    className?: string;
    icon?: TablerIcon;
    invalid?: boolean;
    value?: string;
    intent?: 'primary' | 'secondary';
}
export declare const Select: React.FC<SelectProps>;
export {};
