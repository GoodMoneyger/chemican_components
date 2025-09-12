import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import type { IconProp } from '../../lib/utils';
import { cn, renderIcon } from '../../lib/utils';

const inputWrapperVariants = cva(
  `border-interactive-default bg-surface-primary hover:border-interactive-hover
  has-[:disabled]:border-interactive-disabled
  has-[:disabled]:bg-surface-disabled has-[:focus]:ring-interactive-focused h-12
  rounded relative flex w-full items-center border
  has-[:focus]:border-[var(--chemican-green-800)] has-[:focus]:ring-4
  has-[:focus]:outline-0`,
  {
    variants: {
      invalid: {
        false: '',
        true: `border-interactive-alert-default!
        has-[:focus]:ring-interactive-alert-focused`,
      },
    },
  }
);

const inputVariants = cva(
  `px-md py-sm text-body-primary placeholder:text-body-secondary
  disabled:text-body-disabled w-full flex-1 bg-transparent [text-align:inherit]
  outline-none`,
  {
    variants: {
      hasPrefix: {
        true: 'pl-0',
        false: '',
      },
      hasTrailing: {
        true: 'pr-0',
        false: '',
      },
    },
  }
);

const iconVariants = cva(
  'text-body-secondary flex items-center justify-center',
  {
    variants: {
      position: {
        prefix: 'pl-md pr-xs',
        trailing: 'px-md h-full',
      },
      interactive: {
        true: 'hover:text-body-primary cursor-pointer transition-colors',
        false: '',
      },
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'>,
    VariantProps<typeof inputWrapperVariants> {
  invalid?: boolean;
  prefixIcon?: IconProp;
  trailingIcon?: IconProp;
  onTrailingIconClick?: () => void;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      invalid,
      prefixIcon,
      trailingIcon,
      onTrailingIconClick,
      className,
      ...props
    },
    ref
  ) => {
    const hasPrefix = !!prefixIcon;
    const hasTrailing = !!trailingIcon;
    const isTrailingInteractive = !!onTrailingIconClick;

    return (
      <div className={cn(inputWrapperVariants({ invalid }), className)}>
        {prefixIcon && (
          <div
            className={iconVariants({ position: 'prefix', interactive: false })}
          >
            {renderIcon(prefixIcon)}
          </div>
        )}
        <input
          ref={ref}
          className={inputVariants({ hasPrefix, hasTrailing })}
          {...props}
        />
        {trailingIcon && (
          <>
            {isTrailingInteractive ? (
              <button
                type="button"
                className={iconVariants({
                  position: 'trailing',
                  interactive: true,
                })}
                onClick={onTrailingIconClick}
              >
                {renderIcon(trailingIcon)}
              </button>
            ) : (
              <div
                className={iconVariants({
                  position: 'trailing',
                  interactive: false,
                })}
              >
                {renderIcon(trailingIcon)}
              </div>
            )}
          </>
        )}
      </div>
    );
  }
);
