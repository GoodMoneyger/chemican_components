import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames';
import { TablerIcon } from '@tabler/icons-react';
import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';

// Define button styles with CVA
const buttonVariants = cva(
  `inline-flex cursor-pointer items-center justify-center gap-xxs rounded-sm
  border border-transparent font-medium decoration-1 focus-visible:ring-2
  focus-visible:ring-interactive-light focus-visible:ring-offset-2
  focus-visible:outline-none disabled:cursor-not-allowed disabled:no-underline`,
  {
    variants: {
      intent: {
        primary: `bg-interactive-primary-default text-interactive-inverse
        hover:bg-interactive-primary-hover active:bg-interactive-primary-active
        disabled:bg-interactive-disabled disabled:text-interactive-disabled`,
        secondary: `border bg-interactive-neutral-default
        text-interactive-primary-default hover:bg-interactive-neutral-hover
        active:bg-interactive-neutral-active enabled:border-interactive-light
        disabled:bg-interactive-disabled disabled:text-interactive-disabled`,
        tertiary: `border border-interactive-muted
        bg-interactive-neutral-default text-interactive-heavy
        hover:bg-interactive-neutral-hover active:bg-interactive-neutral-active
        enabled:border-interactive-light disabled:bg-interactive-disabled`,
        ghost: `text-interactive-primary-default underline
        hover:text-interactive-primary-hover
        active:bg-interactive-neutral-active
        active:text-interactive-primary-active
        disabled:text-interactive-disabled`,
      },
      size: {
        xs: 'h-8 min-w-15 px-xs text-sm',
        sm: 'h-10 min-w-20 px-lg',
        md: 'h-[2.875rem] min-w-1.5',
        lg: 'h-14 min-w-36 text-lg',
      },
      iconOnly: {
        true: 'aspect-square h-auto min-w-auto',
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
      xs: 'size-[0.875rem]',
      sm: 'size-[0.875rem]',
      md: 'size-[0.875rem]',
      lg: 'size-4',
    },
  },
  compoundVariants: [
    { iconOnly: true, size: 'xs', ghost: true, class: 'size-4' },
    { iconOnly: true, size: 'sm', ghost: true, class: 'size-4' },
    { iconOnly: true, size: 'md', ghost: true, class: 'size-4' },
    { iconOnly: true, size: 'lg', ghost: true, class: 'size-6' },
  ],
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
    const textOnly = Boolean(children && !icon);
    if (icon) {
      const Icon = icon;
      return (
        <Comp
          ref={ref}
          className={twMerge(
            classNames(
              buttonVariants({ intent, size, iconOnly, textOnly }),
              className
            )
          )}
          {...props}
        >
          <Icon
            className={twMerge(
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
        className={twMerge(
          classNames(buttonVariants({ intent, size, textOnly }), className)
        )}
        children={children}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
