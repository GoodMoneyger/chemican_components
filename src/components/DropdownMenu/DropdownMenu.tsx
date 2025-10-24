import React from 'react';
import { DropdownMenu as RadixDropdownMenu } from 'radix-ui';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import type { IconProp } from '../../lib/utils';
import { renderIcon, cn } from '../../lib/utils';

const dropdownContentVariants = cva(
  `bg-surface-primary border-divider-default shadow-overlay text-body-primary
  py-xxs rounded-md z-dropdown min-w-32 overflow-hidden`,
  {
    variants: {
      size: {
        sm: 'min-w-32',
        md: 'min-w-48',
        lg: 'min-w-64',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const dropdownItemVariants = cva(
  `focus:bg-interactive-neutral-hover px-md h-10 py-1.5 relative flex
  cursor-pointer items-center transition-colors outline-none select-none
  data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,
  {
    variants: {
      intent: {
        default: 'text-body-primary hover:bg-interactive-neutral-hover',
        danger: `text-interactive-alert-default
        hover:bg-interactive-neutral-alert-hover`,
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
        {renderIcon(icon, { size: 16, className: 'mr-xs' })}
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
    className={cn(
      'border-divider-default -mx-xxs my-0 h-px border-b',
      className
    )}
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
      'text-body-secondary px-xs py-1.5 text-sm font-semibold',
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
      className={cn(dropdownContentVariants({ size }), className)}
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

export const Dropdown = ({
  children,
  open,
  onOpenChange,
  modal = true,
  ...props
}: DropdownProps) => {
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
};

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
