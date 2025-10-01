import { default as React } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { IconProp } from '../../lib/utils';
declare const calloutVariants: (props?: ({
    intent?: "alert" | "info" | "success" | "warning" | null | undefined;
    size?: "default" | "large" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof calloutVariants> {
    title?: string;
    description?: string;
    children?: React.ReactNode;
    action?: {
        label: string;
        onClick?: () => void;
    };
    icon?: IconProp;
}
export declare const Callout: React.ForwardRefExoticComponent<CalloutProps & React.RefAttributes<HTMLDivElement>>;
export {};
