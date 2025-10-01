import { default as React } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { IconProp } from '../../lib/utils';
declare const buttonVariants: (props?: ({
    intent?: "primary" | "secondary" | "tertiary" | "ghost" | null | undefined;
    danger?: boolean | null | undefined;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
    iconOnly?: boolean | null | undefined;
    textOnly?: boolean | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    icon?: IconProp;
    loading?: boolean;
    danger?: boolean;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export {};
