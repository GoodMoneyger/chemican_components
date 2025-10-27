import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';
import { IconProp } from '../../lib/utils';
declare const badgeVariants: (props?: ({
    intent?: "default" | "new" | "danger" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
    /**
     * The intent of the badge
     * @default 'default'
     */
    intent?: 'default' | 'new' | 'danger';
    /**
     * Icon to display (only for danger intent in regular mode)
     * Note: Icons are not rendered when using asChild mode
     */
    icon?: IconProp;
    /**
     * The content of the badge
     */
    children: React.ReactNode;
    /**
     * Change the default rendered element for the one passed as a child, merging their props and behavior.
     *
     * When true, the Badge will not render its own element. Instead, it will pass its styling
     * to the child element using Radix UI's Slot pattern.
     *
     * @example
     * // Regular badge
     * <Badge intent="new">New Item</Badge>
     *
     * // AsChild with button
     * <Badge asChild intent="new">
     *   <button onClick={handleClick}>Clickable Badge</button>
     * </Badge>
     *
     * // AsChild with link
     * <Badge asChild intent="default">
     *   <a href="/path">Link Badge</a>
     * </Badge>
     *
     * @default false
     */
    asChild?: boolean;
}
export declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLSpanElement>>;
export {};
