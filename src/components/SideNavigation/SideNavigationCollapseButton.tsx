import React from 'react';
import {
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarLeftExpand,
} from '@tabler/icons-react';

import { cn } from '../../lib/utils';
import { Tooltip } from '../Tooltip';

import { useSideNavigation } from './SideNavigationContext';

export interface SideNavigationCollapseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  collapseLabel?: React.ReactNode;
  expandLabel?: React.ReactNode;
}

export const SideNavigationCollapseButton = React.forwardRef<
  HTMLButtonElement,
  SideNavigationCollapseButtonProps
>(({ className, collapseLabel, expandLabel, ...props }, ref) => {
  const { isCollapsed, toggleCollapsed } = useSideNavigation();
  const tooltipContent = isCollapsed ? expandLabel : collapseLabel;

  const button = (
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
        <IconLayoutSidebarLeftExpand className="size-5" strokeWidth={2} />
      ) : (
        <IconLayoutSidebarLeftCollapse className="size-5" strokeWidth={2} />
      )}
    </button>
  );

  if (tooltipContent) {
    return (
      <Tooltip content={tooltipContent} side="right" delayDuration={0}>
        {button}
      </Tooltip>
    );
  }

  return button;
});

SideNavigationCollapseButton.displayName = 'SideNavigationCollapseButton';
