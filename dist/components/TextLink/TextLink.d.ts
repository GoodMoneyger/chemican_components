import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';
import { IconProp } from '../../lib/utils';
declare const textLinkVariants: (props?: ({
    intent?: "primary" | "secondary" | null | undefined;
    size?: "xs" | "sm" | "md" | "lg" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export interface TextLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'color'>, VariantProps<typeof textLinkVariants> {
    /**
     * The link content
     */
    children: React.ReactNode;
    /**
     * Whether to render as a child element (useful for Next.js Link)
     */
    asChild?: boolean;
    /**
     * Icon to display before the text
     */
    leadingIcon?: IconProp;
    /**
     * Icon to display after the text
     */
    trailingIcon?: IconProp;
    /**
     * Link intent
     */
    intent?: 'primary' | 'secondary';
    /**
     * Link size
     */
    size?: 'lg' | 'md' | 'sm' | 'xs';
}
export declare const TextLink: React.ForwardRefExoticComponent<TextLinkProps & React.RefAttributes<HTMLAnchorElement>>;
export {};
