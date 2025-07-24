import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { TablerIcon } from '@tabler/icons-react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '../../lib/utils';
import { Spinner } from '../Spinner';

// Define button styles with CVA
const buttonVariants = cva(
  `gap-xxs box-border inline-flex cursor-pointer items-center justify-center
  rounded-sm border border-transparent font-medium decoration-1
  focus-visible:ring-4 focus-visible:outline-none disabled:cursor-not-allowed
  disabled:no-underline`,
  {
    variants: {
      intent: {
        primary: `bg-interactive-primary-default text-interactive-inverse
        hover:bg-interactive-primary-hover active:bg-interactive-primary-active
        disabled:text-interactive-disabled disabled:bg-interactive-disabled`,
        secondary: `bg-interactive-neutral-default
        text-interactive-primary-default hover:bg-interactive-neutral-hover
        active:bg-interactive-neutral-active disabled:bg-interactive-disabled
        disabled:text-interactive-disabled border
        enabled:border-[var(--chemican-green-800)]`,
        tertiary: `bg-interactive-neutral-default text-interactive-heavy
        hover:bg-interactive-neutral-hover active:bg-interactive-neutral-active
        enabled:border-interactive-default disabled:bg-interactive-disabled
        disabled:text-interactive-disabled border`,
        ghost: `text-interactive-primary-default
        hover:text-interactive-primary-hover hover:bg-interactive-neutral-hover
        active:bg-interactive-neutral-active
        active:text-interactive-primary-active
        disabled:text-interactive-disabled underline`,
      },
      danger: {
        true: 'focus-visible:ring-interactive-alert-focused',
        false: 'focus-visible:ring-interactive-focused',
      },
      size: {
        xs: 'px-xs h-8 min-w-15 text-sm',
        sm: 'px-lg h-10 min-w-20',
        md: 'h-[2.875rem] min-w-24',
        lg: 'h-14 min-w-34 text-lg',
      },
      iconOnly: {
        true: 'aspect-square h-auto min-w-0 p-0!',
      },
      textOnly: {
        true: '',
      },
    },
    compoundVariants: [
      {
        iconOnly: true,
        intent: 'ghost',
        class: 'text-shape-interactive-primary-default',
      },
      { textOnly: true, size: 'md', class: 'px-xl' },
      { textOnly: true, size: 'lg', class: 'px-md' },
      { iconOnly: false, size: 'md', class: 'px-xl' },
      { iconOnly: false, size: 'lg', class: 'px-md' },
      { iconOnly: true, size: 'xs', class: 'px-xxs' },
      { iconOnly: true, size: 'sm', class: 'px-xs' },
      { iconOnly: true, size: 'md', class: 'px-sm' },
      { iconOnly: true, size: 'lg', class: 'px-md' },
      {
        intent: 'primary',
        danger: true,
        class: `bg-interactive-danger-default hover:bg-interactive-danger-hover
        active:bg-interactive-danger-active`,
      },
      {
        intent: 'secondary',
        danger: true,
        class: `bg-interactive-neutral-default text-interactive-danger-default
        hover:bg-interactive-neutral-danger-active
        active:bg-interactive-neutral-danger-active
        enabled:border-interactive-alert-default`,
      },
      {
        intent: 'tertiary',
        danger: true,
        class: `text-interactive-danger-default
        hover:bg-interactive-neutral-danger-hover
        active:bg-interactive-neutral-danger-active border-none`,
      },
      {
        intent: 'ghost',
        danger: true,
        class: `text-interactive-danger-default
        hover:text-interactive-danger-hover
        hover:bg-interactive-neutral-danger-hover
        active:bg-interactive-neutral-danger-active
        active:text-interactive-danger-active`,
      },
    ],
    defaultVariants: {
      intent: 'primary',
      size: 'md',
    },
  }
);

const iconStyles = cva('', {
  variants: {
    ghost: {
      true: '',
    },
    iconOnly: {
      true: '',
    },
    size: {
      xs: 'size-4',
      sm: 'size-5',
      md: 'size-5',
      lg: 'size-6',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: TablerIcon | React.ComponentType<{ className: string }>;
  loading?: boolean;
  danger?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      intent,
      size,
      className,
      icon,
      asChild = false,
      loading = false,
      danger = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    const iconOnly = Boolean(icon && !children);
    const textOnly = Boolean(children && !icon);
    const isDisabled = loading || props.disabled;

    if (loading) {
      return (
        <Comp
          ref={ref}
          className={cn(
            buttonVariants({ intent, size, iconOnly, textOnly, danger }),
            'relative',
            className
          )}
          {...props}
          disabled={isDisabled}
        >
          <span className="gap-xxs invisible flex items-center">
            {icon &&
              (() => {
                const Icon = icon;
                return (
                  <Icon
                    className={cn(
                      iconStyles({ size, iconOnly, ghost: intent === 'ghost' })
                    )}
                  />
                );
              })()}
            {children}
          </span>
          <span className="absolute inset-0 flex items-center justify-center">
            <Spinner size="sm" layout="row" />
          </span>
        </Comp>
      );
    }

    if (icon) {
      const Icon = icon;
      return (
        <Comp
          ref={ref}
          className={cn(
            buttonVariants({ intent, size, iconOnly, textOnly, danger }),
            className
          )}
          {...props}
          disabled={isDisabled}
        >
          <Icon
            className={cn(
              iconStyles({ size, iconOnly, ghost: intent === 'ghost' })
            )}
          />
          {children}
        </Comp>
      );
    }
    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({ intent, size, textOnly, danger }),
          className
        )}
        children={children}
        {...props}
        disabled={isDisabled}
      />
    );
  }
);

Button.displayName = 'Button';
