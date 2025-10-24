import { default as React } from '../../../node_modules/react';
import { Progress as RadixProgress } from 'radix-ui';
export interface ProgressIndicatorProps extends React.ComponentProps<typeof RadixProgress.Root> {
    value?: number;
    max?: number;
    indeterminate?: boolean;
    className?: string;
}
export declare const ProgressIndicator: React.FC<ProgressIndicatorProps>;
