import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '../../lib/utils';

import {
  SideNavigationProvider,
  FooterProvider,
  useSideNavigation,
} from './SideNavigationContext';
import { SideNavigationCollapseButton } from './SideNavigationCollapseButton';

const sideNavigationVariants = cva(
  `bg-surface-primary shadow-overlay top-0 z-navigation fixed flex h-full
  flex-col overflow-visible`,
  {
    variants: {
      width: {
        expanded: 'w-(--cc-side-navigation-width-expanded)',
        collapsed: 'gap-sm w-(--cc-side-navigation-width-collapsed)',
      },
    },
    defaultVariants: {
      width: 'expanded',
    },
  }
);

export interface SideNavigationProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sideNavigationVariants> {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  showCollapseButton?: boolean;
  collapseLabel?: React.ReactNode;
  expandLabel?: React.ReactNode;
  defaultCollapsed?: boolean;
}

export const SideNavigation = React.forwardRef<
  HTMLElement,
  SideNavigationProps
>(({ defaultCollapsed = false, ...restProps }, ref) => {
  return (
    <SideNavigationProvider defaultCollapsed={defaultCollapsed}>
      <SideNavigationContent ref={ref} {...restProps} />
    </SideNavigationProvider>
  );
});

SideNavigation.displayName = 'SideNavigation';

// Internal component that has access to context
const SideNavigationContent = React.forwardRef<
  HTMLElement,
  Omit<SideNavigationProps, 'defaultCollapsed'>
>(
  (
    {
      className,
      width,
      header,
      footer,
      children,
      showCollapseButton = false,
      collapseLabel,
      expandLabel,
      ...props
    },
    ref
  ) => {
    const { isCollapsed } = useSideNavigation();

    // Determine width based on collapsed state (legacy support)
    const effectiveWidth = width || (isCollapsed ? 'collapsed' : 'expanded');

    return (
      <nav
        ref={ref}
        className={cn(
          sideNavigationVariants({ width: effectiveWidth }),
          'group',
          className
        )}
        data-cc-side-navigation=""
        data-collapsed={effectiveWidth === 'collapsed'}
        {...props}
      >
        {header && (
          <div
            className={cn(
              'p-sm',
              isCollapsed ? 'pr-sm flex justify-center' : 'pr-md'
            )}
          >
            {header}
          </div>
        )}

        <div className="gap-sm flex flex-1 flex-col overflow-y-auto">
          {children}
        </div>

        {footer && (
          <div className="px-xs py-md">
            <FooterProvider>{footer}</FooterProvider>
          </div>
        )}

        {showCollapseButton && (
          <SideNavigationCollapseButton
            collapseLabel={collapseLabel}
            expandLabel={expandLabel}
          />
        )}
      </nav>
    );
  }
);

SideNavigationContent.displayName = 'SideNavigationContent';
