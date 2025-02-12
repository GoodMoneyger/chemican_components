import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames';
import { TablerIcon } from '@tabler/icons-react';
import { Slot } from '@radix-ui/react-slot';

// Define button styles with CVA
const buttonVariants = cva(
  'inline-flex cursor-pointer items-center justify-center gap-xxs rounded-sm font-bold decoration-1 hover:underline focus-visible:ring-2 focus-visible:ring-interactive-light focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed',
  {
    variants: {
      intent: {
        primary:
          'bg-interactive-primary-default text-interactive-primary-default hover:bg-interactive-primary-hover active:bg-interactive-primary-active disabled:bg-interactive-primary-disabled disabled:text-interactive-primary-disabled',
        secondary:
          'border border-interactive-light bg-interactive-secondary-default text-interactive-secondary-default hover:bg-interactive-secondary-hover active:bg-interactive-secondary-active disabled:bg-interactive-secondary-disabled disabled:text-interactive-secondary-disabled',
        tertiary:
          'border border-interactive-muted bg-interactive-tertiary-default font-medium text-interactive-tertiary-default hover:bg-interactive-tertiary-hover active:bg-interactive-tertiary-active disabled:bg-interactive-tertiary-disabled',
        ghost:
          'text-interactive-default underline hover:bg-interactive-plain-hover hover:text-interactive-hover active:bg-interactive-plain-active active:text-interactive-active disabled:text-interactive-disabled',
      },
      size: {
        xs: 'h-[1.75rem] min-w-[3.75rem] px-xs text-size-sm',
        sm: 'h-[2.25rem] min-w-[5rem] px-xs',
        md: 'h-[3rem] min-w-[6rem] px-md',
        lg: 'h-[3.5rem] min-w-[8.5rem] px-md',
      },
      iconOnly: {
        true: 'min-w-auto',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'md',
    },
  }
);

const iconStyles = cva('', {
  variants: {
    size: {
      xs: 'h-md w-md',
      sm: 'h-md w-md',
      md: 'h-lg w-lg',
      lg: 'h-lg w-lg',
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
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { intent, size, className, icon, asChild = false, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    const iconOnly = Boolean(icon && !children);
    if (icon) {
      const Icon = icon;
      return (
        <Comp
          ref={ref}
          className={classNames(
            buttonVariants({ intent, size, iconOnly }),
            className
          )}
          {...props}
        >
          <Icon className={iconStyles({ size })} />
          {children}
        </Comp>
      );
    }
    return (
      <Comp
        ref={ref}
        className={classNames(buttonVariants({ intent, size }), className)}
        children={children}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
