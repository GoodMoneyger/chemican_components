import { default as React } from 'react';
import { IconProp } from '../../lib/utils';
type SegmentedValue = string | number;
export interface SegmentedControlGroupProps {
    name?: string;
    value?: SegmentedValue;
    defaultValue?: SegmentedValue;
    onValueChange?: (value: SegmentedValue) => void;
    invalid?: boolean;
    disabled?: boolean;
    id?: string;
    className?: string;
    children: React.ReactNode;
    'aria-label'?: string;
    'aria-labelledby'?: string;
}
export interface SegmentedControlOptionProps {
    value: SegmentedValue;
    disabled?: boolean;
    leadingIcon?: IconProp;
    id?: string;
    className?: string;
    children: React.ReactNode;
}
export declare const SegmentedControl: {
    Group: React.ForwardRefExoticComponent<SegmentedControlGroupProps & React.RefAttributes<HTMLDivElement>>;
    Option: React.FC<SegmentedControlOptionProps>;
};
export {};
