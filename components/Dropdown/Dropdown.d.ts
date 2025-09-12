import { default as React } from '../../../node_modules/react';
import { DropdownMenu as RadixDropdownMenu } from 'radix-ui';
import { VariantProps } from 'class-variance-authority';
import { IconProp } from '../../lib/utils';
declare const dropdownContentVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export interface DropdownItemProps {
    children: React.ReactNode;
    onSelect?: (event: Event) => void;
    disabled?: boolean;
    intent?: 'default' | 'danger';
    icon?: IconProp;
    className?: string;
}
export declare const DropdownItem: React.ForwardRefExoticComponent<DropdownItemProps & React.RefAttributes<HTMLDivElement>>;
export interface DropdownSeparatorProps {
    className?: string;
}
export declare const DropdownSeparator: React.ForwardRefExoticComponent<DropdownSeparatorProps & React.RefAttributes<HTMLDivElement>>;
export interface DropdownLabelProps {
    children: React.ReactNode;
    className?: string;
}
export declare const DropdownLabel: React.ForwardRefExoticComponent<DropdownLabelProps & React.RefAttributes<HTMLDivElement>>;
export interface DropdownContentProps extends React.ComponentPropsWithoutRef<typeof RadixDropdownMenu.Content>, VariantProps<typeof dropdownContentVariants> {
    className?: string;
}
export declare const DropdownContent: React.ForwardRefExoticComponent<DropdownContentProps & React.RefAttributes<HTMLDivElement>>;
export interface DropdownProps {
    children: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    modal?: boolean;
}
export declare const Dropdown: {
    ({ children, open, onOpenChange, modal, ...props }: DropdownProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export interface DropdownTriggerProps extends React.ComponentPropsWithoutRef<typeof RadixDropdownMenu.Trigger> {
    asChild?: boolean;
    className?: string;
}
export declare const DropdownTrigger: React.ForwardRefExoticComponent<DropdownTriggerProps & React.RefAttributes<HTMLButtonElement>>;
export {};
