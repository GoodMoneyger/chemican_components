import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { cn } from '../../lib/utils';

// Define tooltip content styles with CVA
const tooltipVariants = cva(
  `px-sm py-xs rounded-sm text-sm font-normal min-w-32 max-w-sm md:max-w-md
  lg:max-w-lg z-tooltip leading-[1.5] tracking-[0] break-all`,
  {
    variants: {
      intent: {
        normal: 'text-body-inverse bg-surface-tooltip-neutral shadow-high',
        accent: 'text-body-inverse bg-surface-tooltip-primary shadow-high',
      },
    },
    defaultVariants: {
      intent: 'normal',
    },
  }
);

export interface TooltipProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>,
      'content'
    >,
    VariantProps<typeof tooltipVariants> {
  children: React.ReactNode;
  content: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
  delayDuration?: number;
  disableHoverableContent?: boolean;
}

export const TooltipProvider = TooltipPrimitive.Provider;

export const Tooltip = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipProps
>(
  (
    {
      children,
      content,
      intent,
      side = 'top',
      sideOffset = 4,
      align = 'center',
      alignOffset,
      delayDuration = 700,
      disableHoverableContent,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <TooltipPrimitive.Root
        delayDuration={delayDuration}
        {...(disableHoverableContent !== undefined && {
          disableHoverableContent,
        })}
      >
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            ref={ref}
            side={side}
            sideOffset={sideOffset}
            align={align}
            {...(alignOffset !== undefined && { alignOffset })}
            className={cn(tooltipVariants({ intent }), className)}
            {...props}
          >
            {content}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    );
  }
);

Tooltip.displayName = 'Tooltip';
