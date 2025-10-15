import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import type { IconProp } from '../../lib/utils';
import { cn, renderIcon } from '../../lib/utils';

const textLinkVariants = cva(
  `font-normal inline-flex items-center justify-center border border-transparent
  underline decoration-solid decoration-from-font transition-colors`,
  {
    variants: {
      variant: {
        primary: `text-interactive-primary-default
        hover:text-interactive-primary-hover
        active:text-interactive-primary-active`,
        secondary: `text-body-primary hover:text-interactive-primary-hover
        active:text-interactive-primary-active`,
      },
      size: {
        large: 'gap-1 text-lg min-h-[24px] min-w-[94px]',
        medium: 'gap-0.5 text-md min-h-[21px] min-w-[80px]',
        small: 'gap-0.5 text-sm min-h-[18px] min-w-[69px]',
        xsmall: 'gap-0.5 text-xs min-h-[15px] min-w-[58px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

const iconSizeMap = {
  large: 16,
  medium: 14,
  small: 12,
  xsmall: 10,
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
   * Link variant
   */
  variant?: 'primary' | 'secondary';
  /**
   * Link size
   */
  size?: 'large' | 'medium' | 'small' | 'xsmall';
}

export const TextLink = React.forwardRef<HTMLAnchorElement, TextLinkProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'medium',
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
        className={cn(textLinkVariants({ variant, size }), className)}
        onClick={onClick}
        {...props}
      >
        {content}
      </Comp>
    );
  }
);

TextLink.displayName = 'TextLink';
