import { default as React } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
declare const sideNavigationVariants: (props?: ({
    width?: "expanded" | "collapsed" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export interface SideNavigationProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof sideNavigationVariants> {
    header?: React.ReactNode;
    footer?: React.ReactNode;
    showCollapseButton?: boolean;
    defaultCollapsed?: boolean;
}
export declare const SideNavigation: React.ForwardRefExoticComponent<SideNavigationProps & React.RefAttributes<HTMLElement>>;
export {};
