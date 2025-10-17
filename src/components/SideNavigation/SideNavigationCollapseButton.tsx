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
        `p-xxs bg-surface-primary text-interactive-primary-default top-2.5
        right-0 rounded ease-in-out z-slight absolute cursor-pointer
        transition-all duration-200`,
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
