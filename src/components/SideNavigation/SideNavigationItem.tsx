import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { TablerIcon } from '@tabler/icons-react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '../../lib/utils';

import { useSideNavigation } from './SideNavigationContext';

const sideNavigationItemVariants = cva(
  `gap-xs px-xs py-xs focus-visible:ring-interactive-light mb-0 box-border flex
  w-full items-center rounded-sm font-medium transition-colors
  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`,
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

const iconVariants = cva('flex-shrink-0', {
  variants: {
    size: {
      sm: 'size-4',
      md: 'size-5',
    },
    collapsed: {
      true: '',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface SideNavigationItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof sideNavigationItemVariants> {
  asChild?: boolean;
  icon?: TablerIcon | React.ComponentType<{ className: string }>;
  label?: string;
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
      icon,
      label,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const { isCollapsed } = useSideNavigation();
    const Comp = asChild ? Slot : 'button';
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
        {icon &&
          (() => {
            const Icon = icon;
            return (
              <Icon
                strokeWidth={2}
                className={cn(iconVariants({ size, collapsed: isCollapsed }))}
              />
            );
          })()}
        {!isCollapsed && (children || label)}
      </Comp>
    );
  }
);

SideNavigationItem.displayName = 'SideNavigationItem';
