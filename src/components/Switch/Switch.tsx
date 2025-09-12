import * as React from 'react';
import { Switch as SwitchPrimitive } from 'radix-ui';

import { cn } from '../../utils';

export type SwitchProps = React.ComponentProps<typeof SwitchPrimitive.Root>;

function Switch({ className, ...props }: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        `peer focus-visible:ring-shape-interactive-primary-default/50
        data-[state=checked]:enabled:bg-status-success
        data-[state=unchecked]:enabled:bg-shape-accent-gray-strong
        data-[state=checked]:disabled:bg-shape-accent-green-soft
        data-[state=unchecked]:disabled:bg-shape-accent-gray-soft h-6 w-10
        inline-flex shrink-0 items-center rounded-full transition-all
        outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed`,
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          `bg-shape-interactive-inverse size-4
          data-[state=checked]:translate-x-5
          data-[state=unchecked]:translate-x-1 pointer-events-none block
          rounded-full ring-0 transition-transform`
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
