import React from 'react';
import { IconChevronLeftPipe, IconChevronRightPipe } from '@tabler/icons-react';

import { cn } from '../../lib/utils';

import { useSideNavigation } from './SideNavigationContext';

export type SideNavigationCollapseButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const SideNavigationCollapseButton = React.forwardRef<
  HTMLButtonElement,
  SideNavigationCollapseButtonProps
>(({ className, ...props }, ref) => {
  const { isCollapsed, toggleCollapsed } = useSideNavigation();

  return (
    <button
      ref={ref}
      className={cn(
        `p-xxs bg-surface-primary text-interactive-primary-default absolute
        top-2.5 right-0 z-10 cursor-pointer rounded shadow-lg transition-all
        duration-200 ease-in-out hover:shadow-xl`,
        className
      )}
      style={{
        transform: 'translateX(50%)',
      }}
      onClick={toggleCollapsed}
      {...props}
    >
      {isCollapsed ? (
        <IconChevronRightPipe className="size-5" strokeWidth={2} />
      ) : (
        <IconChevronLeftPipe className="size-5" strokeWidth={2} />
      )}
    </button>
  );
});

SideNavigationCollapseButton.displayName = 'SideNavigationCollapseButton';
