import React from 'react';
import { Slot } from 'radix-ui';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import type { IconProp } from '../../lib/utils';
import { cn, renderIcon } from '../../lib/utils';

const textLinkVariants = cva(
  `font-normal inline-flex items-baseline justify-center border
  border-transparent decoration-solid decoration-from-font
  underline-offset-[0.1875rem] transition-colors duration-75`,
  {
    variants: {
      intent: {
        primary: `text-interactive-primary-default
        hover:text-interactive-primary-hover
        active:text-interactive-primary-active
        [:not(:hover):not(:active)]:underline`,
        secondary: 'text-body-primary [:not(:hover):not(:active)]:underline',
        tertiary: `text-body-secondary [&_svg]:text-shape-primary
        hover:underline active:underline`,
        inverse: `text-shape-interactive-inverse
        [&_svg]:text-shape-interactive-inverse not-[:hover]:underline`,
      },
      size: {
        lg: 'gap-xxs text-lg',
        md: 'gap-xxxs text-md',
        sm: 'gap-xxxs text-sm',
        xs: 'gap-xxxs text-xs',
        inherit: 'gap-xxxs',
      },
      disabled: {
        true: `text-body-disabled [&_svg]:text-shape-interactive-disabled
        pointer-events-none`,
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'inherit',
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
  intent?: 'primary' | 'secondary' | 'tertiary' | 'inverse';
  /**
   * Link size
   */
  size?: 'lg' | 'md' | 'sm' | 'xs' | 'inherit';
  /**
   * Disabled state of the link
   */
  disabled?: boolean;
}

export const TextLink = React.forwardRef<HTMLAnchorElement, TextLinkProps>(
  (
    {
      className,
      intent = 'primary',
      size = 'inherit',
      asChild = false,
      disabled,
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
          className={cn(
            textLinkVariants({ intent, size, disabled }),
            className
          )}
          {...props}
        >
          {children}
        </Comp>
      );
    }

    return (
      <Comp
        ref={ref}
        className={cn(textLinkVariants({ intent, size, disabled }), className)}
        {...props}
      >
        {leadingIcon && (
          <span className="flex flex-shrink-0 items-center self-center">
            {renderIcon(leadingIcon, { size: iconSize })}
          </span>
        )}
        {children}
        {trailingIcon && (
          <span className="flex flex-shrink-0 items-center self-center">
            {renderIcon(trailingIcon, { size: iconSize })}
          </span>
        )}
      </Comp>
    );
  }
);

TextLink.displayName = 'TextLink';
