import React, { createContext, useContext } from 'react';

interface SideNavigationContextValue {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  toggleCollapsed: () => void;
  isInFooter: boolean;
}

const SideNavigationContext = createContext<
  SideNavigationContextValue | undefined
>(undefined);

export interface SideNavigationProviderProps {
  defaultCollapsed?: boolean;
  isInFooter?: boolean;
  children: React.ReactNode;
}

export const SideNavigationProvider: React.FC<SideNavigationProviderProps> = ({
  defaultCollapsed = false,
  isInFooter = false,
  children,
}) => {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);

  const toggleCollapsed = React.useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  const value = React.useMemo(
    () => ({
      isCollapsed,
      setIsCollapsed,
      toggleCollapsed,
      isInFooter,
    }),
    [isCollapsed, setIsCollapsed, toggleCollapsed, isInFooter]
  );

  return (
    <SideNavigationContext.Provider value={value}>
      {children}
    </SideNavigationContext.Provider>
  );
};

export const useSideNavigation = (): SideNavigationContextValue => {
  const context = useContext(SideNavigationContext);
  if (context === undefined) {
    throw new Error(
      'useSideNavigation must be used within a SideNavigationProvider'
    );
  }
  return context;
};
