import { default as React } from '../../../node_modules/react';
import * as RadioGroup from '@radix-ui/react-radio-group';
export interface RadioButtonProps extends React.ComponentProps<typeof RadioGroup.Item> {
    value: string;
    label: string;
    children?: React.ReactNode;
    invalid?: boolean;
}
export interface RadioButtonGroupProps extends React.ComponentProps<typeof RadioGroup.Root> {
    children: React.ReactNode;
    className?: string;
}
export declare const RadioButton: React.FC<RadioButtonProps>;
export declare const RadioButtonGroup: React.FC<RadioButtonGroupProps>;
