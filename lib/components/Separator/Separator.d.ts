import { default as React } from '../../../../node_modules/react';
import { Separator as RadixSeparator } from 'radix-ui';
export interface SeparatorProps extends React.ComponentPropsWithoutRef<typeof RadixSeparator.Root> {
    className?: string;
    orientation?: 'horizontal' | 'vertical';
}
declare const Separator: React.ForwardRefExoticComponent<SeparatorProps & React.RefAttributes<HTMLDivElement>>;
export { Separator };
