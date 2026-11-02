import { default as React } from 'react';
import { Checkbox as CheckboxPrimitive } from 'radix-ui';
export interface CheckboxProps extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
    label?: React.ReactNode;
    id?: string;
    invalid?: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
    children?: React.ReactNode;
    className?: string;
}
export interface CheckboxGroupProps {
    children: React.ReactNode;
    className?: string;
}
export declare const Checkbox: React.FC<CheckboxProps>;
export declare const CheckboxGroup: React.FC<CheckboxGroupProps>;
