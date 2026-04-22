import { default as React } from '../../../node_modules/react';
export interface SideNavigationCollapseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    collapseLabel?: React.ReactNode;
    expandLabel?: React.ReactNode;
}
export declare const SideNavigationCollapseButton: React.ForwardRefExoticComponent<SideNavigationCollapseButtonProps & React.RefAttributes<HTMLButtonElement>>;
