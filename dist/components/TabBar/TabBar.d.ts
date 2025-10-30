import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';
import { Tabs as RadixTabs } from 'radix-ui';
declare const tabBarVariants: (props?: ({
    size?: "small" | "normal" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
declare const tabVariants: (props?: ({
    size?: "small" | "normal" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export interface TabBarProps extends React.ComponentPropsWithoutRef<typeof RadixTabs.Root>, VariantProps<typeof tabBarVariants> {
}
export declare const TabBar: React.ForwardRefExoticComponent<TabBarProps & React.RefAttributes<HTMLDivElement>>;
export interface TabProps extends React.ComponentPropsWithoutRef<typeof RadixTabs.Trigger>, VariantProps<typeof tabVariants> {
    label: React.ReactNode;
}
export declare const Tab: React.ForwardRefExoticComponent<TabProps & React.RefAttributes<HTMLButtonElement>>;
export {};
