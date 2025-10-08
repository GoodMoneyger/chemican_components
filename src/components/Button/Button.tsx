import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { Slot } from 'radix-ui';

import { Spinner } from '../Spinner';
import type { IconProp } from '../../lib/utils';
import { cn, renderIcon } from '../../lib/utils';

// Define button styles with CVA
const buttonVariants = cva(
  `gap-xxs rounded font-medium box-border inline-flex cursor-pointer
  items-center justify-center border border-transparent decoration-1
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
        disabled:text-interactive-disabled
        enabled:border-interactive-primary-default border`,
        tertiary: `bg-interactive-neutral-default text-interactive-heavy
        hover:bg-interactive-neutral-hover active:bg-interactive-neutral-active
        enabled:border-interactive-default disabled:bg-interactive-disabled
        disabled:text-interactive-disabled border`,
        ghost: `text-interactive-primary-default
        hover:text-interactive-primary-hover hover:bg-interactive-neutral-hover
        active:bg-interactive-neutral-active
        active:text-interactive-primary-active
        disabled:text-interactive-disabled disabled:bg-transparent`,
      },
      danger: {
        true: 'focus-visible:ring-interactive-alert-focused',
        false: 'focus-visible:ring-interactive-focused',
      },
      size: {
        xs: 'px-sm h-8 min-w-15 text-sm',
        sm: 'px-md h-10 min-w-20',
        md: 'min-w-24 h-[2.875rem]',
        lg: 'h-14 min-w-34 text-lg',
        xl: 'h-17 min-w-43 text-xl',
      },
      iconOnly: {
        true: 'min-w-0 aspect-square h-auto',
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
      { textOnly: true, size: 'md', class: 'px-lg' },
      { textOnly: true, size: 'lg', class: 'px-xl' },
      { iconOnly: false, size: 'md', class: 'px-lg' },
      { iconOnly: false, size: 'lg', class: 'px-xl' },
      { iconOnly: true, size: 'xs', class: 'p-0' },
      { iconOnly: true, size: 'sm', class: 'size-6 p-0!' },
      { iconOnly: true, size: 'md', class: 'size-10' },
      { iconOnly: true, size: 'lg', class: 'size-12' },
      {
        intent: 'primary',
        danger: true,
        class: `bg-interactive-alert-default hover:bg-interactive-alert-hover
        active:bg-interactive-alert-active`,
      },
      {
        intent: 'secondary',
        danger: true,
        class: `bg-interactive-neutral-default text-interactive-alert-default
        hover:bg-interactive-neutral-alert-active
        active:bg-interactive-neutral-alert-active
        enabled:border-interactive-alert-default`,
      },
      {
        intent: 'tertiary',
        danger: true,
        class: `text-interactive-alert-default
        hover:bg-interactive-neutral-alert-hover
        active:bg-interactive-neutral-alert-active border-none`,
      },
      {
        intent: 'ghost',
        danger: true,
        class: `text-interactive-alert-default
        hover:text-interactive-alert-hover
        hover:bg-interactive-neutral-alert-hover
        active:bg-interactive-neutral-alert-active
        active:text-interactive-alert-active`,
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
      xl: 'size-7',
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
  icon?: IconProp;
  trailingIcon?: IconProp;
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
      trailingIcon,
      asChild = false,
      loading = false,
      danger = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot.Slot : 'button';
    const iconOnly = Boolean(
      (icon || trailingIcon) && !children && !(icon && trailingIcon)
    );
    const textOnly = Boolean(children && !icon && !trailingIcon);
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
            {renderIcon(icon, {
              className: cn(
                iconStyles({ size, iconOnly, ghost: intent === 'ghost' })
              ),
            })}
            {children}
            {renderIcon(trailingIcon, {
              className: cn(
                iconStyles({ size, iconOnly, ghost: intent === 'ghost' })
              ),
            })}
          </span>
          <span className="inset-0 absolute flex items-center justify-center">
            <Spinner size="sm" layout="row" />
          </span>
        </Comp>
      );
    }

    if (icon || trailingIcon) {
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
          {renderIcon(icon, {
            className: cn(
              iconStyles({ size, iconOnly, ghost: intent === 'ghost' })
            ),
          })}
          {children}
          {renderIcon(trailingIcon, {
            className: cn(
              iconStyles({ size, iconOnly, ghost: intent === 'ghost' })
            ),
          })}
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
