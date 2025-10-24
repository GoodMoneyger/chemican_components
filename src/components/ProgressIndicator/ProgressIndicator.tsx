import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { Progress as RadixProgress } from 'radix-ui';

import { cn } from '../../utils';

// Linear Progress Component
const linearVariants = cva(
  'bg-surface-disabled rounded relative w-full overflow-hidden',
  {
    variants: {
      size: {
        sm: 'h-1',
        md: 'h-2',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  }
);

export interface LinearProgressProps
  extends React.ComponentProps<typeof RadixProgress.Root>,
    VariantProps<typeof linearVariants> {
  value?: number;
  max?: number;
  indeterminate?: boolean;
  size?: 'sm' | 'md';
  className?: string;
}

const Linear = React.forwardRef<HTMLDivElement, LinearProgressProps>(
  (
    {
      value,
      max = 100,
      indeterminate = false,
      size = 'sm',
      className,
      ...props
    },
    ref
  ) => {
    return (
      <RadixProgress.Root
        ref={ref}
        className={cn(linearVariants({ size }), className)}
        value={value}
        max={max}
        {...props}
      >
        <RadixProgress.Indicator
          className={cn(
            'bg-shape-accent-green-strong h-full transition-transform',
            {
              'animate-indeterminate': indeterminate,
            }
          )}
          style={
            indeterminate
              ? undefined
              : { transform: `translateX(-${100 - (value! / max) * 100}%)` }
          }
        />
      </RadixProgress.Root>
    );
  }
);

Linear.displayName = 'ProgressIndicator.Linear';

// Circular Progress Component
const circularContainerVariants = cva('flex items-center', {
  variants: {
    size: {
      sm: 'gap-x-xs',
      md: 'gap-x-md gap-y-md',
    },
    layout: {
      row: 'flex-row',
      column: 'flex-col',
    },
  },
  defaultVariants: {
    size: 'md',
    layout: 'row',
  },
});

export interface CircularProgressProps
  extends VariantProps<typeof circularContainerVariants>,
    React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md';
  layout?: 'row' | 'column';
  children?: React.ReactNode;
  className?: string;
}

const sizeClasses = {
  sm: 'h-5 w-5',
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

const Circular = React.forwardRef<HTMLDivElement, CircularProgressProps>(
  ({ layout = 'row', size = 'md', children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="status"
        className={cn(circularContainerVariants({ size, layout }), className)}
        {...props}
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className={cn(sizeClasses[size], 'animate-spin text-transparent')}
        >
          <circle
            cx="50"
            cy="50"
            r={radii[size]}
            stroke="var(--token-color-shape-accent-gray-pale)"
            strokeWidth={strokeWidths[size]}
          />
          <circle
            cx="50"
            cy="50"
            r={radii[size]}
            stroke="var(--token-color-shape-accent-green-strong)"
            strokeWidth={strokeWidths[size]}
            strokeLinecap="round"
            strokeDasharray="141.37 282.74"
            strokeDashoffset="0"
          />
        </svg>
        {children}
      </div>
    );
  }
);

Circular.displayName = 'ProgressIndicator.Circular';

// Main ProgressIndicator component with subcomponents
export const ProgressIndicator = {
  Linear,
  Circular,
};
