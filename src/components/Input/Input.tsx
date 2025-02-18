import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

const inputVariants = cva(
  'h-12 w-full rounded border border-input-default bg-surface-primary px-md py-sm hover:bg-surface-secondary focus:border-input-focused focus:border-transparent focus:ring-3 focus:ring-input-focused focus:outline-0 disabled:border-input-disabled disabled:bg-surface-disabled disabled:text-body-disabled',
  {
    variants: {
      invalid: {
        false: 'text-body-primary focus:ring-input-focused',
        true: 'border-input-alert focus:ring-input-alert',
      },
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  invalid?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ invalid, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={twMerge(classNames(inputVariants({ invalid }), className))}
        {...props}
      />
    );
  }
);
