import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';
declare const textareaVariants: (props?: ({
    invalid?: boolean | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textareaVariants> {
    invalid?: boolean;
    characterLimit?: number;
    showCharacterLimit?: boolean;
}
export declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export {};
