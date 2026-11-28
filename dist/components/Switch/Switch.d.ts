import { Switch as SwitchPrimitive } from 'radix-ui';
import * as React from 'react';
export type SwitchProps = React.ComponentProps<typeof SwitchPrimitive.Root> & {
    label?: React.ReactNode;
    id?: string;
};
declare const Switch: React.ForwardRefExoticComponent<Omit<SwitchProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export { Switch };
