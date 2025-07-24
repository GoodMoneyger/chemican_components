import { default as React } from '../../../node_modules/react';
interface SideNavigationContextValue {
    isCollapsed: boolean;
    setIsCollapsed: (collapsed: boolean) => void;
    toggleCollapsed: () => void;
}
export interface SideNavigationProviderProps {
    defaultCollapsed?: boolean;
    children: React.ReactNode;
}
export declare const SideNavigationProvider: React.FC<SideNavigationProviderProps>;
export declare const useSideNavigation: () => SideNavigationContextValue;
export {};
