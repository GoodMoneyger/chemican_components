import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';
declare const sideNavigationVariants: (props?: ({
    width?: "expanded" | "collapsed" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export interface SideNavigationProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof sideNavigationVariants> {
    header?: React.ReactNode;
    footer?: React.ReactNode;
    showCollapseButton?: boolean;
    collapseLabel?: React.ReactNode;
    expandLabel?: React.ReactNode;
    defaultCollapsed?: boolean;
    /**
     * Hides the navigation below the md breakpoint, where `MobileNavigation`
     * takes over, and sets `--cc-side-navigation-width` to 0 there.
     */
    responsive?: boolean;
}
export declare const SideNavigation: React.ForwardRefExoticComponent<SideNavigationProps & React.RefAttributes<HTMLElement>>;
export {};
