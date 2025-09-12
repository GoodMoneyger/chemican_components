import React from 'react';
import { Progress as RadixProgress } from 'radix-ui';

import { cn } from '../../utils';

export interface ProgressProps
  extends React.ComponentProps<typeof RadixProgress.Root> {
  value?: number;
  max?: number;
  indeterminate?: boolean;
  className?: string;
}

export const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  indeterminate = false,
  className,
  ...props
}) => {
  return (
    <RadixProgress.Root
      className={cn(
        'bg-surface-disabled relative h-1 w-full overflow-hidden rounded',
        className
      )}
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
};

Progress.displayName = 'Progress';
