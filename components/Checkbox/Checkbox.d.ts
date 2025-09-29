import { default as React } from '../../../node_modules/react';
import { Checkbox as CheckboxPrimitive } from 'radix-ui';
export interface CheckboxProps extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
    label?: string;
    id?: string;
    invalid?: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
    children?: React.ReactNode;
}
export interface CheckboxGroupProps {
    children: React.ReactNode;
    className?: string;
}
export declare const Checkbox: React.FC<CheckboxProps>;
export declare const CheckboxGroup: React.FC<CheckboxGroupProps>;
