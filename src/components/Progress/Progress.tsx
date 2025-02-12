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
        'relative h-0.25 w-full overflow-hidden rounded bg-surface-disabled',
        className
      )}
      value={value}
      max={max}
      {...props}
    >
      <RadixProgress.Indicator
        className={classNames(
          'h-full bg-interactive-primary-default transition-transform',
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
