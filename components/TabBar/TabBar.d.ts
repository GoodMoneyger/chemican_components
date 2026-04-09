import { default as React } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { Tabs as RadixTabs } from 'radix-ui';
declare const tabBarVariants: (props?: ({
    size?: "small" | "normal" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
declare const tabVariants: (props?: ({
    size?: "small" | "normal" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export interface TabBarProps extends React.ComponentPropsWithoutRef<typeof RadixTabs.Root>, VariantProps<typeof tabBarVariants> {
    /** Label for the overflow "more" button. Receives the count of hidden tabs. Defaults to `(count) => \`${count} more\`` */
    moreLabel?: (count: number) => React.ReactNode;
}
export declare const TabBar: React.ForwardRefExoticComponent<TabBarProps & React.RefAttributes<HTMLDivElement>>;
export interface TabProps extends React.ComponentPropsWithoutRef<typeof RadixTabs.Trigger>, VariantProps<typeof tabVariants> {
}
export declare const Tab: React.ForwardRefExoticComponent<TabProps & React.RefAttributes<HTMLButtonElement>>;
export {};
