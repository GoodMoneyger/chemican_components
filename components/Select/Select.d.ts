import { default as React } from '../../../node_modules/react';
import { Select as RadixSelect } from 'radix-ui';
import { TablerIcon } from '../../../@tabler/icons-react/dist/esm/icons/index.mjs';
import { VariantProps } from 'class-variance-authority';
declare const selectVariants: (props?: ({
    invalid?: boolean | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export interface SelectProps extends VariantProps<typeof selectVariants>, React.ComponentProps<typeof RadixSelect.Root> {
    options: {
        value: string;
        label: string;
        icon?: TablerIcon;
        type?: 'Option' | 'Group' | 'Separator';
    }[];
    placeholder?: string;
    className?: string;
    icon?: TablerIcon;
    invalid?: boolean;
}
export declare const Select: React.FC<SelectProps>;
export {};
