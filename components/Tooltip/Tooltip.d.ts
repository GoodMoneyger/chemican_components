import { default as React } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
declare const tooltipVariants: (props?: ({
    intent?: "accent" | "normal" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export interface TooltipProps extends Omit<React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>, 'content'>, VariantProps<typeof tooltipVariants> {
    children: React.ReactNode;
    content: React.ReactNode;
    side?: 'top' | 'right' | 'bottom' | 'left';
    sideOffset?: number;
    align?: 'start' | 'center' | 'end';
    alignOffset?: number;
    delayDuration?: number;
    disableHoverableContent?: boolean;
}
export declare const TooltipProvider: React.FC<TooltipPrimitive.TooltipProviderProps>;
export declare const Tooltip: React.ForwardRefExoticComponent<TooltipProps & React.RefAttributes<HTMLDivElement>>;
export {};
