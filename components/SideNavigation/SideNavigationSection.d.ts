import { default as React } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
declare const sideNavigationSectionVariants: (props?: ({
    isCollapsed?: boolean | null | undefined;
    isLast?: boolean | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export interface SideNavigationSectionProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof sideNavigationSectionVariants> {
    title?: string;
    isLast?: boolean;
}
export declare const SideNavigationSection: React.ForwardRefExoticComponent<SideNavigationSectionProps & React.RefAttributes<HTMLDivElement>>;
export {};
