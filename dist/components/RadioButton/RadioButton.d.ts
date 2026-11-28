import { default as React } from 'react';
import { RadioGroup } from 'radix-ui';
export interface RadioButtonProps extends React.ComponentProps<typeof RadioGroup.Item> {
    value: string;
    label: React.ReactNode;
    children?: React.ReactNode;
    invalid?: boolean;
}
export interface RadioButtonGroupProps extends React.ComponentProps<typeof RadioGroup.Root> {
    children: React.ReactNode;
    className?: string;
}
export declare const RadioButton: React.FC<RadioButtonProps>;
export declare const RadioButtonGroup: React.FC<RadioButtonGroupProps>;
