import { default as React } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { IconProp } from '../../lib/utils';
export declare const inputWrapperVariants: (props?: ({
    invalid?: boolean | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export declare const inputVariants: (props?: ({
    hasPrefix?: boolean | null | undefined;
    hasTrailing?: boolean | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export declare const iconVariants: (props?: ({
    position?: "prefix" | "trailing" | null | undefined;
    interactive?: boolean | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'>, VariantProps<typeof inputWrapperVariants> {
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
export declare const TextField: React.ForwardRefExoticComponent<TextFieldProps & React.RefAttributes<HTMLInputElement>>;
