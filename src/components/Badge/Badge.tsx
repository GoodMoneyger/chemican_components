import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { Slot } from 'radix-ui';

import { IconAlertCircle } from '../../tabler-icons';
import type { IconProp } from '../../lib/utils';
import { cn, renderIcon } from '../../lib/utils';

const badgeVariants = cva(
  `px-xxs text-xs font-bold h-4.5 relative inline-flex flex-shrink-0
  items-center justify-center leading-none`,
  {
    variants: {
      intent: {
        default: `rounded-sm bg-shape-accent-lime-pale
        text-shape-interactive-primary-selected`,
        new: 'rounded-sm text-accent-purple-soft bg-shape-accent-purple-pale',
        danger: `rounded-sm border-interactive-alert-default text-body-alert
        pl-4.5 border border-dashed`,
      },
    },
    defaultVariants: {
      intent: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  /**
   * The intent of the badge
   * @default 'default'
   */
  intent?: 'default' | 'new' | 'danger';
  /**
   * Icon to display (only for danger intent in regular mode)
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
   * <Badge intent="new">New Item</Badge>
   *
   * // AsChild with button
   * <Badge asChild intent="new">
   *   <button onClick={handleClick}>Clickable Badge</button>
   * </Badge>
   *
   * // AsChild with link
   * <Badge asChild intent="default">
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
      intent = 'default',
      icon,
      className,
      children,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const defaultIcon = intent === 'danger' ? IconAlertCircle : undefined;
    const displayIcon = icon || defaultIcon;

    if (asChild) {
      return (
        <Slot.Slot
          className={cn(badgeVariants({ intent }), className)}
          ref={ref}
          {...props}
        >
          {children}
        </Slot.Slot>
      );
    }

    return (
      <span
        className={cn(badgeVariants({ intent }), className)}
        ref={ref}
        {...props}
      >
        {intent === 'danger' &&
          displayIcon &&
          renderIcon(displayIcon, {
            className:
              'w-3 h-3 absolute left-1 top-1/2 transform -translate-y-1/2',
          })}
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
