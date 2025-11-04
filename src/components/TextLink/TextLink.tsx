import React from 'react';
import { Slot } from 'radix-ui';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import type { IconProp } from '../../lib/utils';
import { cn, renderIcon } from '../../lib/utils';

const textLinkVariants = cva(
  `font-normal inline-flex items-center justify-center border border-transparent
  decoration-solid decoration-from-font underline-offset-[3px] transition-colors
  duration-75 [:not(:hover):not(:active)]:underline`,
  {
    variants: {
      intent: {
        primary: `text-interactive-primary-default
        hover:text-interactive-primary-hover
        active:text-interactive-primary-active`,
        secondary: `text-body-primary hover:text-interactive-primary-hover
        active:text-interactive-primary-active`,
      },
      size: {
        lg: 'gap-xxs text-lg',
        md: 'gap-xxxs text-md',
        sm: 'gap-xxxs text-sm',
        xs: 'gap-xxxs text-xs',
        inherit: '',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'md',
    },
  }
);

const iconSizeMap = {
  lg: 16,
  md: 14,
  sm: 12,
  xs: 10,
} as const;

export interface TextLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'color'>,
    VariantProps<typeof textLinkVariants> {
  /**
   * The link content
   */
  children: React.ReactNode;
  /**
   * Whether to render as a child element (useful for Next.js Link)
   */
  asChild?: boolean;
  /**
   * Icon to display before the text
   */
  leadingIcon?: IconProp;
  /**
   * Icon to display after the text
   */
  trailingIcon?: IconProp;
  /**
   * Link intent
   */
  intent?: 'primary' | 'secondary';
  /**
   * Link size
   */
  size?: 'lg' | 'md' | 'sm' | 'xs' | 'inherit';
}

export const TextLink = React.forwardRef<HTMLAnchorElement, TextLinkProps>(
  (
    {
      className,
      intent = 'primary',
      size = 'inherit',
      asChild = false,
      leadingIcon,
      trailingIcon,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot.Slot : 'a';
    const sz = size === 'inherit' ? 'md' : size;
    const iconSize = iconSizeMap[sz];

    // When using asChild, pass children directly to Slot without icons
    if (asChild) {
      return (
        <Comp
          ref={ref}
          className={cn(textLinkVariants({ intent, size }), className)}
          {...props}
        >
          {children}
        </Comp>
      );
    }

    return (
      <Comp
        ref={ref}
        className={cn(textLinkVariants({ intent, size }), className)}
        {...props}
      >
        {leadingIcon && (
          <span className="flex-shrink-0">
            {renderIcon(leadingIcon, { size: iconSize })}
          </span>
        )}
        {children}
        {trailingIcon && (
          <span className="flex-shrink-0">
            {renderIcon(trailingIcon, { size: iconSize })}
          </span>
        )}
      </Comp>
    );
  }
);

TextLink.displayName = 'TextLink';
