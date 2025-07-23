import React, { createContext, useContext } from 'react';

interface SideNavigationContextValue {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  toggleCollapsed: () => void;
}

const SideNavigationContext = createContext<
  SideNavigationContextValue | undefined
>(undefined);

export interface SideNavigationProviderProps {
  defaultCollapsed?: boolean;
  children: React.ReactNode;
}

export const SideNavigationProvider: React.FC<SideNavigationProviderProps> = ({
  defaultCollapsed = false,
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
    }),
    [isCollapsed, setIsCollapsed, toggleCollapsed]
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
