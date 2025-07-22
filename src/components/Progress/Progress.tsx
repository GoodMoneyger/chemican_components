import React from 'react';
import * as RadixProgress from '@radix-ui/react-progress';
import classNames from 'classnames';

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
      className={classNames(
        'bg-surface-disabled relative h-1 w-full overflow-hidden rounded',
        className
      )}
      value={value}
      max={max}
      {...props}
    >
      <RadixProgress.Indicator
        className={classNames(
          'bg-interactive-primary-default h-full transition-transform',
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
