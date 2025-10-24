import { default as React } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { Progress as RadixProgress } from 'radix-ui';
declare const linearVariants: (props?: ({
    size?: "sm" | "md" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export interface LinearProgressProps extends React.ComponentProps<typeof RadixProgress.Root>, VariantProps<typeof linearVariants> {
    value?: number;
    max?: number;
    indeterminate?: boolean;
    size?: 'sm' | 'md';
    className?: string;
}
declare const circularContainerVariants: (props?: ({
    size?: "sm" | "md" | null | undefined;
    layout?: "row" | "column" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export interface CircularProgressProps extends VariantProps<typeof circularContainerVariants>, React.HTMLAttributes<HTMLDivElement> {
    size?: 'sm' | 'md';
    layout?: 'row' | 'column';
    children?: React.ReactNode;
    className?: string;
}
export declare const ProgressIndicator: {
    Linear: React.ForwardRefExoticComponent<Omit<LinearProgressProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Circular: React.ForwardRefExoticComponent<CircularProgressProps & React.RefAttributes<HTMLDivElement>>;
};
export {};
