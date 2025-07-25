import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import classNames from 'classnames';

export type SwitchProps = React.ComponentProps<typeof SwitchPrimitive.Root>;

function Switch({ className, ...props }: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={classNames(
        `peer focus-visible:border-interactive-light
        focus-visible:ring-shape-interactive-primary-default/50
        data-[state=checked]:enabled:bg-status-success
        data-[state=unchecked]:enabled:bg-shape-accent-gray-strong
        data-[state=checked]:disabled:bg-shape-accent-green-soft
        data-[state=unchecked]:disabled:bg-shape-accent-gray-soft inline-flex
        h-6 w-10 shrink-0 items-center rounded-full transition-all outline-none
        focus-visible:ring-[3px] disabled:cursor-not-allowed`,
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={classNames(
          `bg-shape-interactive-inverse pointer-events-none block size-4
          rounded-full ring-0 transition-transform
          data-[state=checked]:translate-x-5
          data-[state=unchecked]:translate-x-1`
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
