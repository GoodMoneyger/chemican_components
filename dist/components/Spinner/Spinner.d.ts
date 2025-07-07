import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';
declare const spinnerVariants: (props?: ({
    size?: "sm" | "md" | null | undefined;
    layout?: "row" | "column" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export interface SpinnerProps extends VariantProps<typeof spinnerVariants>, React.HTMLAttributes<HTMLDivElement> {
    size: 'sm' | 'md';
    children?: React.ReactNode;
    className?: string;
    layout: 'row' | 'column';
}
export declare const Spinner: React.FC<SpinnerProps>;
export {};
