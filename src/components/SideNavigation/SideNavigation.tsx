import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '../../lib/utils';

import {
  SideNavigationProvider,
  useSideNavigation,
} from './SideNavigationContext';
import { SideNavigationCollapseButton } from './SideNavigationCollapseButton';

const sideNavigationVariants = cva(
  `bg-surface-primary shadow-overlay top-0 fixed z-50 flex h-full flex-col
  overflow-visible`,
  {
    variants: {
      width: {
        expanded: 'w-50',
        collapsed: 'gap-sm w-13',
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
      ...props
    },
    ref
  ) => {
    const { isCollapsed } = useSideNavigation();

    // Set global CSS variable for sidebar width
    React.useEffect(() => {
      const widthValue = isCollapsed ? '3.25rem' : '12.5rem';
      document.documentElement.style.setProperty(
        // Using a chemican component prefix to avoid conflicts in consuming projects
        '--cc-side-navigation-width',
        widthValue
      );

      return () => {
        document.documentElement.style.removeProperty(
          '--cc-side-navigation-width'
        );
      };
    }, [isCollapsed]);

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
        data-collapsed={isCollapsed}
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

        {footer && <div className="px-xs py-md">{footer}</div>}

        {showCollapseButton && <SideNavigationCollapseButton />}
      </nav>
    );
  }
);

SideNavigationContent.displayName = 'SideNavigationContent';
