import { default as React } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
declare const choiceChipVariants: (props?: ({
    selected?: boolean | null | undefined;
    disabled?: boolean | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export interface ChoiceChipProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>, VariantProps<typeof choiceChipVariants> {
    /**
     * Whether the chip is selected
     * @default false
     */
    selected?: boolean;
    /**
     * Whether the chip is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * The content of the chip
     */
    children: React.ReactNode;
    /**
     * Callback when the chip is clicked
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export declare const ChoiceChip: React.ForwardRefExoticComponent<ChoiceChipProps & React.RefAttributes<HTMLButtonElement>>;
export interface ChoiceChipGroupProps {
    /**
     * The children chips
     */
    children: React.ReactNode;
    /**
     * Additional class names
     */
    className?: string;
}
export declare const ChoiceChipGroup: React.FC<ChoiceChipGroupProps>;
export {};
