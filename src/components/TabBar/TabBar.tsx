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
  `text-body-primary border-divider-default hover:border-interactive-hover
  data-[state=active]:border-interactive-selected data-[state=active]:font-bold
  disabled:text-interactive-disabled disabled:hover:border-divider-default
  relative inline-flex cursor-pointer items-center justify-center border-b pb-px
  leading-[100%] tracking-[0] transition-colors hover:border-b-2
  disabled:cursor-default disabled:hover:border-b data-[state=active]:border-b-2
  data-[state=active]:text-[var(--chemican-green-800)]`,
  {
    variants: {
      size: {
        normal: `p-md h-12 text-lg hover:pb-[calc(1rem-1px)]
        disabled:hover:pb-px data-[state=active]:pb-[calc(1rem-1px)]`,
        small: `p-sm h-9.5 text-md hover:pb-[calc(0.75rem-1px)]
        disabled:hover:pb-px data-[state=active]:pb-[calc(0.75rem-1px)]`,
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
