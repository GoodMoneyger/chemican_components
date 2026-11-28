import { default as React } from 'react';
export interface SideNavigationProviderProps {
    defaultCollapsed?: boolean;
    children: React.ReactNode;
}
export declare const SideNavigationProvider: React.FC<SideNavigationProviderProps>;
export declare const FooterProvider: React.FC<{
    children: React.ReactNode;
}>;
export declare const useSideNavigation: () => {
    isInFooter: boolean;
    isCollapsed: boolean;
    setIsCollapsed: (collapsed: boolean) => void;
    toggleCollapsed: () => void;
};
