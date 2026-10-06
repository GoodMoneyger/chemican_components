import { default as React } from 'react';
export interface SideNavigationCollapseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    collapseLabel?: React.ReactNode;
    expandLabel?: React.ReactNode;
}
export declare const SideNavigationCollapseButton: React.ForwardRefExoticComponent<SideNavigationCollapseButtonProps & React.RefAttributes<HTMLButtonElement>>;
