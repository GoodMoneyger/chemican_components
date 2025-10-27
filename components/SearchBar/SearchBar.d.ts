import { default as React } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
declare const searchBarWrapperVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
    state?: "default" | "disabled" | "filled" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export interface SearchBarProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>, VariantProps<typeof searchBarWrapperVariants> {
    value?: string;
    classname?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch?: (keywords: string[]) => void;
    placeholder?: string;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
    state?: 'default' | 'filled' | 'disabled';
    supportText?: React.ReactNode;
    searchButtonText?: React.ReactNode;
    searchOnKeywordAdd?: boolean;
}
export declare const SearchBar: React.ForwardRefExoticComponent<SearchBarProps & React.RefAttributes<HTMLInputElement>>;
export {};
