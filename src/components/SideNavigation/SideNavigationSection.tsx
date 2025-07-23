import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '../../lib/utils';

import { useSideNavigation } from './SideNavigationContext';

const sideNavigationSectionVariants = cva('flex flex-col', {
  variants: {
    isCollapsed: {
      true: 'px-xs gap-sm',
      false: 'px-sm items-start',
    },
    isLast: { true: '' },
  },
  compoundVariants: [
    {
      isCollapsed: true,
      isLast: false,
      className:
        'after:border-divider-default items-center after:w-full after:border-b',
    },
  ],
  defaultVariants: {
    isCollapsed: false,
    isLast: false,
  },
});

export interface SideNavigationSectionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sideNavigationSectionVariants> {
  title?: string;
  isLast?: boolean;
}

export const SideNavigationSection = React.forwardRef<
  HTMLDivElement,
  SideNavigationSectionProps
>(({ className, title, children, isLast, ...props }, ref) => {
  const { isCollapsed } = useSideNavigation();

  return (
    <div
      ref={ref}
      className={cn(
        sideNavigationSectionVariants({ isCollapsed, isLast }),
        className
      )}
      {...props}
    >
      {title && !isCollapsed && (
        <div
          className="text-body-secondary px-xxs py-xxs mb-xxs text-sm
            leading-none font-medium"
        >
          {title}
        </div>
      )}
      <div className="space-y-xxxs w-full">{children}</div>
    </div>
  );
});

SideNavigationSection.displayName = 'SideNavigationSection';
