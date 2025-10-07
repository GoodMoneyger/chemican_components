import React from 'react';
import { Separator as RadixSeparator } from 'radix-ui';

import { cn } from '../../utils';

export interface SeparatorProps
  extends React.ComponentPropsWithoutRef<typeof RadixSeparator.Root> {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

const Separator = React.forwardRef<
  React.ElementRef<typeof RadixSeparator.Root>,
  SeparatorProps
>(
  (
    { className, orientation = 'horizontal', decorative = true, ...props },
    ref
  ) => (
    <RadixSeparator.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 bg-[var(--token-color-border-divider-default)]',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        className
      )}
      {...props}
    />
  )
);
Separator.displayName = RadixSeparator.Root.displayName;

export { Separator };
