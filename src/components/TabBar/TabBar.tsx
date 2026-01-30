import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { Tabs as RadixTabs } from 'radix-ui';

import { cn } from '../../lib/utils';

// TabBar Context for size propagation
interface TabBarContextValue {
  size?: 'normal' | 'small';
}

const TabBarContext = React.createContext<TabBarContextValue>({
  size: 'normal',
});

const useTabBarContext = () => React.useContext(TabBarContext);

// TabBar container variants
const tabBarVariants = cva('inline-flex', {
  variants: {
    size: {
      normal: 'h-12',
      small: 'h-10',
    },
  },
  defaultVariants: {
    size: 'normal',
  },
});

// Individual Tab variants
const tabVariants = cva(
  `text-body-primary border-divider-default data-[state=active]:font-bold
  disabled:text-interactive-disabled after:left-0 after:h-0
  disabled:hover:after:h-0 relative inline-flex cursor-pointer items-center
  justify-center border-b leading-[100%] tracking-[0] transition-colors
  after:absolute after:bottom-[-1px] after:w-full after:transition-all
  after:content-[''] hover:after:h-[2px]
  hover:after:bg-[var(--chemican-green-800)] disabled:cursor-not-allowed
  data-[state=active]:text-[var(--chemican-green-800)]
  data-[state=active]:after:h-[2px]
  data-[state=active]:after:bg-[var(--chemican-green-800)]`,
  {
    variants: {
      size: {
        normal: 'p-md h-12 text-lg',
        small: 'p-sm h-9.5 text-md',
      },
    },
    defaultVariants: {
      size: 'normal',
    },
  }
);

// TabBar Root Component
export interface TabBarProps
  extends React.ComponentPropsWithoutRef<typeof RadixTabs.Root>,
    VariantProps<typeof tabBarVariants> {}

export const TabBar = React.forwardRef<
  React.ElementRef<typeof RadixTabs.Root>,
  TabBarProps
>(({ className, size, children, ...props }, ref) => {
  const contextValue: TabBarContextValue = size ? { size } : {};

  return (
    <TabBarContext.Provider value={contextValue}>
      <RadixTabs.Root ref={ref} className={cn('w-full', className)} {...props}>
        <RadixTabs.List className={cn(tabBarVariants({ size }))} role="tablist">
          {children}
        </RadixTabs.List>
      </RadixTabs.Root>
    </TabBarContext.Provider>
  );
});

TabBar.displayName = 'TabBar';

// Tab Component
export interface TabProps
  extends React.ComponentPropsWithoutRef<typeof RadixTabs.Trigger>,
    VariantProps<typeof tabVariants> {
  label: React.ReactNode;
}

export const Tab = React.forwardRef<
  React.ElementRef<typeof RadixTabs.Trigger>,
  TabProps
>(({ className, size, label, disabled, ...props }, ref) => {
  const { size: contextSize } = useTabBarContext();
  const effectiveSize = size ?? contextSize;

  return (
    <RadixTabs.Trigger
      ref={ref}
      className={cn(tabVariants({ size: effectiveSize }), className)}
      disabled={disabled}
      {...props}
    >
      {label}
    </RadixTabs.Trigger>
  );
});

Tab.displayName = 'Tab';
