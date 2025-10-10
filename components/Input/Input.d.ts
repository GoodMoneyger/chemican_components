import { default as React } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { IconProp } from '../../lib/utils';
declare const inputWrapperVariants: (props?: ({
    invalid?: boolean | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'>, VariantProps<typeof inputWrapperVariants> {
    invalid?: boolean;
    prefixIcon?: IconProp;
    trailingIcon?: IconProp;
    onTrailingIconClick?: () => void;
    /**
     * Size of the trailing icon in pixels
     */
    trailingIconSize?: number;
    /**
     * Size of the prefix icon in pixels
     */
    prefixIconSize?: number;
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export {};
