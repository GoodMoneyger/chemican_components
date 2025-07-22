import { default as React } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { TablerIcon } from '@tabler/icons-react';
declare const buttonVariants: (props?: ({
    intent?: "primary" | "secondary" | "tertiary" | "ghost" | null | undefined;
    size?: "xs" | "sm" | "md" | "lg" | null | undefined;
    iconOnly?: boolean | null | undefined;
    textOnly?: boolean | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    icon?: TablerIcon | React.ComponentType<{
        className: string;
    }>;
    loading?: boolean;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export {};
