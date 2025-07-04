import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import classNames from 'classnames';

export type SwitchProps = React.ComponentProps<typeof SwitchPrimitive.Root>;

function Switch({ className, ...props }: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={classNames(
        `peer inline-flex h-6 w-10 shrink-0 items-center rounded-full
        transition-all outline-none focus-visible:border-interactive-light
        focus-visible:ring-[3px]
        focus-visible:ring-shape-interactive-primary-default/50
        disabled:cursor-not-allowed disabled:opacity-50
        data-[state=checked]:bg-status-success
        data-[state=unchecked]:bg-shape-accent-gray-soft`,
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={classNames(
          `pointer-events-none block size-4 rounded-full
          bg-shape-interactive-inverse ring-0 transition-transform
          data-[state=checked]:translate-x-5
          data-[state=unchecked]:translate-x-1`
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
