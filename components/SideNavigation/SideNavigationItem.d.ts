import { default as React } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { TablerIcon } from '../../../@tabler/icons-react/dist/esm/icons/index.mjs';
declare const sideNavigationItemVariants: (props?: ({
    variant?: "default" | "disabled" | "selected" | null | undefined;
    size?: "sm" | "md" | null | undefined;
    collapsed?: boolean | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export interface SideNavigationItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof sideNavigationItemVariants> {
    asChild?: boolean;
    component?: React.ElementType;
    icon?: TablerIcon | React.ComponentType<{
        className: string;
    }>;
    label?: React.ReactNode;
}
export declare const SideNavigationItem: React.ForwardRefExoticComponent<SideNavigationItemProps & React.RefAttributes<HTMLButtonElement>>;
export {};
