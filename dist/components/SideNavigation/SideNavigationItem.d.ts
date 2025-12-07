import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';
declare const sideNavigationItemVariants: (props?: ({
    variant?: "default" | "disabled" | "selected" | null | undefined;
    size?: "sm" | "md" | null | undefined;
    collapsed?: boolean | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export interface SideNavigationItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof sideNavigationItemVariants> {
    asChild?: boolean;
    component?: React.ElementType;
    label?: React.ReactNode;
}
export declare const SideNavigationItem: React.ForwardRefExoticComponent<SideNavigationItemProps & React.RefAttributes<HTMLButtonElement>>;
export {};
