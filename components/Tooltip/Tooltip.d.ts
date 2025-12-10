import { default as React } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { TooltipProps as TTProps } from '@radix-ui/react-tooltip';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
declare const tooltipVariants: (props?: ({
    intent?: "accent" | "normal" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export interface TooltipProps extends TTProps, VariantProps<typeof tooltipVariants> {
    className?: string;
    children: React.ReactNode;
    content: React.ReactNode;
    side?: 'top' | 'right' | 'bottom' | 'left';
    sideOffset?: number;
    align?: 'start' | 'center' | 'end';
    alignOffset?: number;
}
export declare const TooltipProvider: React.FC<TooltipPrimitive.TooltipProviderProps>;
export declare const Tooltip: React.ForwardRefExoticComponent<TooltipProps & React.RefAttributes<HTMLDivElement>>;
export {};
