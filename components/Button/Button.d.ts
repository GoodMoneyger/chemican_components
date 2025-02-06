import { default as React } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { Primitive } from '@radix-ui/react-primitive';
declare const buttonStyles: (props?: ({
    intent?: "primary" | "secondary" | "outline" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export interface ButtonProps extends React.ComponentPropsWithoutRef<typeof Primitive.button>, VariantProps<typeof buttonStyles> {
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export {};
