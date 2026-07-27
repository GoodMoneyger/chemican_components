import { default as React } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
declare const breadcrumbsVariants: (props?: ({
    size?: "sm" | "md" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export interface BreadcrumbItem {
    label: React.ReactNode;
    href?: string;
    onClick?: () => void;
    /**
     * Render `label` as the crumb element itself via Radix Slot. Useful for
     * router links, e.g. `{ label: <Link to="/">ホーム</Link>, asChild: true }`.
     * The element receives the crumb styling and `aria-current`; `href` is
     * ignored since the element provides its own navigation.
     */
    asChild?: boolean;
}
export interface BreadcrumbsProps extends Omit<React.HTMLAttributes<HTMLElement>, 'children'>, VariantProps<typeof breadcrumbsVariants> {
    items: BreadcrumbItem[];
    separator?: React.ComponentType<{
        className?: string;
    }>;
    maxItems?: number;
    'aria-label'?: string;
}
export declare const Breadcrumbs: React.ForwardRefExoticComponent<BreadcrumbsProps & React.RefAttributes<HTMLElement>>;
export {};
