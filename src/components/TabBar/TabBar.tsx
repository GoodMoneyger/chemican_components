import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { Tabs as RadixTabs } from 'radix-ui';

import { cn } from '../../lib/utils';

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
  relative inline-flex cursor-pointer items-center justify-center border-b
  leading-[100%] tracking-[0] transition-colors hover:border-b-2
  disabled:cursor-not-allowed disabled:hover:border-b
  data-[state=active]:border-b-2
  data-[state=active]:text-[var(--chemican-green-800)]`,
  {
    variants: {
      size: {
        normal: 'p-md min-h-12 text-lg',
        small: 'p-sm min-h-10 text-md',
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
>(({ className, size, children, ...props }, ref) => (
  <RadixTabs.Root ref={ref} className={cn('w-full', className)} {...props}>
    <RadixTabs.List className={cn(tabBarVariants({ size }))} role="tablist">
      {children}
    </RadixTabs.List>
  </RadixTabs.Root>
));

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
>(({ className, size, label, disabled, ...props }, ref) => (
  <RadixTabs.Trigger
    ref={ref}
    className={cn(tabVariants({ size }), className)}
    disabled={disabled}
    {...props}
  >
    {label}
  </RadixTabs.Trigger>
));

Tab.displayName = 'Tab';
