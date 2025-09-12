import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { Slot } from 'radix-ui';

import { cn } from '../../lib/utils';

import { useSideNavigation } from './SideNavigationContext';

const sideNavigationItemVariants = cva(
  `gap-xs px-xs py-xs focus-visible:ring-interactive-focused
  aria-[current="page"]:bg-interactive-neutral-selected
  aria-[current="page"]:text-interactive-primary-active mb-0 rounded-sm
  box-border flex w-full items-center transition-colors focus:outline-none
  focus-visible:ring-2`,
  {
    variants: {
      variant: {
        default: `text-body-primary hover:bg-interactive-neutral-hover
        active:bg-interactive-neutral-active`,
        selected:
          'bg-interactive-neutral-selected text-interactive-primary-active',
        disabled: 'text-interactive-disabled cursor-not-allowed',
      },
      size: {
        sm: 'h-8 text-sm',
        md: 'text-md h-8',
      },
      collapsed: {
        true: 'px-xxs justify-center',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface SideNavigationItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof sideNavigationItemVariants> {
  asChild?: boolean;
  component?: React.ElementType;
  label?: React.ReactNode;
}

export const SideNavigationItem = React.forwardRef<
  HTMLButtonElement,
  SideNavigationItemProps
>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      label,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const { isCollapsed } = useSideNavigation();
    const Comp = asChild ? Slot.Root : 'button';
    const finalVariant = disabled ? 'disabled' : variant;

    return (
      <Comp
        ref={ref}
        className={cn(
          sideNavigationItemVariants({
            variant: finalVariant,
            size,
            collapsed: isCollapsed,
          }),
          className
        )}
        disabled={disabled}
        {...props}
      >
        {children || label}
      </Comp>
    );
  }
);

SideNavigationItem.displayName = 'SideNavigationItem';
