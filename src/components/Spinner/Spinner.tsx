import React from 'react';
import classNames from 'classnames';
import { VariantProps, cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const spinnerVariants = cva('flex items-center', {
  variants: {
    size: {
      sm: 'gap-x-xs',
      md: 'gap-x-md gap-y-lg',
    },
    layout: {
      row: 'flex-row',
      column: 'flex-col',
    },
  },
});

export interface SpinnerProps
  extends VariantProps<typeof spinnerVariants>,
    React.HTMLAttributes<HTMLDivElement> {
  size: 'sm' | 'md';
  children?: React.ReactNode;
  className?: string;
  layout: 'row' | 'column';
}

const sizeClasses = {
  sm: 'h-[1.25rem] w-[1.25rem]',
  md: 'h-9 w-9',
};

const strokeWidths = {
  sm: 12,
  md: 10,
};

const radii = {
  sm: (50 - strokeWidths.sm / 2).toString(),
  md: (50 - strokeWidths.md / 2).toString(),
};

export const Spinner: React.FC<SpinnerProps> = ({
  layout,
  size,
  children,
  className,
  ...props
}) => {
  return (
    <div
      role="status"
      className={twMerge(
        classNames(spinnerVariants({ size, layout }), className)
      )}
      {...props}
    >
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={classNames(
          sizeClasses[size],
          'animate-spin text-transparent'
        )}
      >
        <circle
          cx="50"
          cy="50"
          r={radii[size]}
          stroke="var(--token-color-shape-accent-gray-pale)"
          stroke-width={strokeWidths[size]}
        />
        <circle
          cx="50"
          cy="50"
          r={radii[size]}
          stroke="var(--token-color-shape-accent-green-strong)"
          stroke-width={strokeWidths[size]}
          strokeLinecap="round"
          strokeDasharray="141.37 282.74"
          strokeDashoffset="0"
        />
      </svg>
      {children}
    </div>
  );
};

Spinner.displayName = 'Spinner';
