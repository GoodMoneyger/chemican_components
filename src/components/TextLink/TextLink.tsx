import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import type { IconProp } from '../../lib/utils';
import { cn, renderIcon } from '../../lib/utils';

const textLinkVariants = cva(
  `font-normal inline-flex items-center justify-center border border-transparent
  underline decoration-solid decoration-from-font underline-offset-[3px]
  transition-colors`,
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
  size?: 'lg' | 'md' | 'sm' | 'xs';
}

export const TextLink = React.forwardRef<HTMLAnchorElement, TextLinkProps>(
  (
    {
      className,
      intent = 'primary',
      size = 'md',
      asChild = false,
      leadingIcon,
      trailingIcon,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'a';
    const iconSize = iconSizeMap[size];

    const content = (
      <>
        {leadingIcon && (
          <span className="flex-shrink-0">
            {renderIcon(leadingIcon, { size: iconSize })}
          </span>
        )}
        <span className="flex-1">{children}</span>
        {trailingIcon && (
          <span className="flex-shrink-0">
            {renderIcon(trailingIcon, { size: iconSize })}
          </span>
        )}
      </>
    );

    return (
      <Comp
        ref={ref}
        className={cn(textLinkVariants({ intent, size }), className)}
        onClick={onClick}
        {...props}
      >
        {content}
      </Comp>
    );
  }
);

TextLink.displayName = 'TextLink';
