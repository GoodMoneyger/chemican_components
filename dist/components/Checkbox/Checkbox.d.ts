import { default as React } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
export interface CheckboxProps extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
    label: string;
    id?: string;
    invalid?: boolean;
    disabled?: boolean;
    children?: React.ReactNode;
}
export interface CheckboxGroupProps {
    children: React.ReactNode;
    className?: string;
}
export declare const Checkbox: React.FC<CheckboxProps>;
export declare const CheckboxGroup: React.FC<CheckboxGroupProps>;
