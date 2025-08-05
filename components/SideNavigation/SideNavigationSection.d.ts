import { default as React } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
declare const sideNavigationSectionVariants: (props?: ({
    isCollapsed?: boolean | null | undefined;
    isLast?: boolean | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export interface SideNavigationSectionProps extends VariantProps<typeof sideNavigationSectionVariants> {
    title?: React.ReactNode;
    isLast?: boolean;
    children: React.ReactNode;
    className?: string;
}
export declare const SideNavigationSection: React.ForwardRefExoticComponent<SideNavigationSectionProps & React.RefAttributes<HTMLDivElement>>;
export {};
