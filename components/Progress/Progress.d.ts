import { default as React } from '../../../node_modules/react';
import * as RadixProgress from '@radix-ui/react-progress';
export interface ProgressProps extends React.ComponentProps<typeof RadixProgress.Root> {
    value?: number;
    max?: number;
    indeterminate?: boolean;
    className?: string;
}
export declare const Progress: React.FC<ProgressProps>;
