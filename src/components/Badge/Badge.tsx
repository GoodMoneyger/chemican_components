import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { Slot } from 'radix-ui';

import { IconAlertCircle } from '../../tabler-icons';
import type { IconProp } from '../../lib/utils';
import { cn, renderIcon } from '../../lib/utils';

const badgeVariants = cva(
  `px-xxs text-xs font-bold inline-flex min-h-[18px] flex-shrink-0 items-center
  justify-center leading-none`,
  {
    variants: {
      variant: {
        default: 'rounded-sm bg-[#d0f5a2] text-[#197A70]',
        new: 'rounded-sm text-accent-purple-soft bg-[#ECDDFF]',
        danger: `rounded-sm border-interactive-alert-default gap-xxxs
        text-body-alert border border-dashed`,
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  /**
   * The variant of the badge
   * @default 'default'
   */
  variant?: 'default' | 'new' | 'danger';
  /**
   * Icon to display (only for danger variant in regular mode)
   * Note: Icons are not rendered when using asChild mode
   */
  icon?: IconProp;
  /**
   * The content of the badge
   */
  children: React.ReactNode;
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   *
   * When true, the Badge will not render its own element. Instead, it will pass its styling
   * to the child element using Radix UI's Slot pattern.
   *
   * @example
   * // Regular badge
   * <Badge variant="new">New Item</Badge>
   *
   * // AsChild with button
   * <Badge asChild variant="new">
   *   <button onClick={handleClick}>Clickable Badge</button>
   * </Badge>
   *
   * // AsChild with link
   * <Badge asChild variant="default">
   *   <a href="/path">Link Badge</a>
   * </Badge>
   *
   * @default false
   */
  asChild?: boolean;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'default',
      icon,
      className,
      children,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const defaultIcon = variant === 'danger' ? IconAlertCircle : undefined;
    const displayIcon = icon || defaultIcon;

    if (asChild) {
      return (
        <Slot.Slot
          className={cn(badgeVariants({ variant }), className)}
          ref={ref}
          {...props}
        >
          {children}
        </Slot.Slot>
      );
    }

    return (
      <span
        className={cn(badgeVariants({ variant }), className)}
        ref={ref}
        {...props}
      >
        {variant === 'danger' &&
          displayIcon &&
          renderIcon(displayIcon, {
            className: 'w-3 h-3',
          })}
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
