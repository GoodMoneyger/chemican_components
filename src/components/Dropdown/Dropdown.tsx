import React from 'react';
import { DropdownMenu as RadixDropdownMenu } from 'radix-ui';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

import type { IconProp } from '../../lib/utils';
import { renderIcon, cn } from '../../lib/utils';

const dropdownContentVariants = cva(
  `bg-surface-primary border-divider-default shadow-overlay text-body-primary
  py-xxs z-50 min-w-[8rem] overflow-hidden rounded`,
  {
    variants: {
      size: {
        sm: 'min-w-[8rem]',
        md: 'min-w-[12rem]',
        lg: 'min-w-[16rem]',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const dropdownItemVariants = cva(
  `focus:bg-interactive-neutral-hover px-md relative flex h-10 cursor-pointer
  items-center py-1.5 transition-colors outline-none select-none
  data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,
  {
    variants: {
      intent: {
        default: 'text-body-primary hover:bg-interactive-neutral-hover',
        danger: `text-interactive-danger-default
        hover:bg-interactive-neutral-danger-hover`,
      },
    },
    defaultVariants: {
      intent: 'default',
    },
  }
);

export interface DropdownItemProps {
  children: React.ReactNode;
  onSelect?: (event: Event) => void;
  disabled?: boolean;
  intent?: 'default' | 'danger';
  icon?: IconProp;
  className?: string;
}

export const DropdownItem = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.Item>,
  DropdownItemProps
>(
  (
    {
      children,
      onSelect,
      disabled,
      intent = 'default',
      icon,
      className,
      ...props
    },
    ref
  ) => {
    const itemProps: React.ComponentPropsWithRef<
      typeof RadixDropdownMenu.Item
    > = {
      ref,
      className: cn(dropdownItemVariants({ intent }), className),
      ...props,
    };

    if (onSelect !== undefined) {
      itemProps.onSelect = onSelect;
    }

    if (disabled !== undefined) {
      itemProps.disabled = disabled;
    }

    return (
      <RadixDropdownMenu.Item {...itemProps}>
        {renderIcon(icon, { size: 16, className: 'mr-2' })}
        {children}
      </RadixDropdownMenu.Item>
    );
  }
);

DropdownItem.displayName = 'DropdownItem';

export interface DropdownSeparatorProps {
  className?: string;
}

export const DropdownSeparator = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.Separator>,
  DropdownSeparatorProps
>(({ className, ...props }, ref) => (
  <RadixDropdownMenu.Separator
    ref={ref}
    className={cn('border-divider-default -mx-1 my-0 h-px border-b', className)}
    {...props}
  />
));

DropdownSeparator.displayName = 'DropdownSeparator';

export interface DropdownLabelProps {
  children: React.ReactNode;
  className?: string;
}

export const DropdownLabel = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.Label>,
  DropdownLabelProps
>(({ children, className, ...props }, ref) => (
  <RadixDropdownMenu.Label
    ref={ref}
    className={cn(
      'text-body-secondary px-2 py-1.5 text-sm font-semibold',
      className
    )}
    {...props}
  >
    {children}
  </RadixDropdownMenu.Label>
));

DropdownLabel.displayName = 'DropdownLabel';

export interface DropdownContentProps
  extends React.ComponentPropsWithoutRef<typeof RadixDropdownMenu.Content>,
    VariantProps<typeof dropdownContentVariants> {
  className?: string;
}

export const DropdownContent = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.Content>,
  DropdownContentProps
>(({ className, size, sideOffset = 4, ...props }, ref) => (
  <RadixDropdownMenu.Portal>
    <RadixDropdownMenu.Content
      ref={ref}
      className={twMerge(dropdownContentVariants({ size }), className)}
      sideOffset={sideOffset}
      {...props}
    />
  </RadixDropdownMenu.Portal>
));

DropdownContent.displayName = 'DropdownContent';

export interface DropdownProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;
}

export const Dropdown = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.Root>,
  DropdownProps
>(({ children, open, onOpenChange, modal = true, ...props }) => {
  const rootProps: React.ComponentPropsWithoutRef<
    typeof RadixDropdownMenu.Root
  > = {
    modal,
    ...props,
  };

  if (open !== undefined) {
    rootProps.open = open;
  }

  if (onOpenChange !== undefined) {
    rootProps.onOpenChange = onOpenChange;
  }

  return (
    <RadixDropdownMenu.Root {...rootProps}>{children}</RadixDropdownMenu.Root>
  );
});

Dropdown.displayName = 'Dropdown';

export interface DropdownTriggerProps
  extends React.ComponentPropsWithoutRef<typeof RadixDropdownMenu.Trigger> {
  asChild?: boolean;
  className?: string;
}

export const DropdownTrigger = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.Trigger>,
  DropdownTriggerProps
>(({ className, asChild = false, ...props }, ref) => (
  <RadixDropdownMenu.Trigger
    ref={ref}
    asChild={asChild}
    className={className}
    {...props}
  />
));

DropdownTrigger.displayName = 'DropdownTrigger';
