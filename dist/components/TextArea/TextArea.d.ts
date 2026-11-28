import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';
declare const textareaVariants: (props?: ({
    invalid?: boolean | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textareaVariants> {
    invalid?: boolean;
    characterLimit?: number;
    showCharacterLimit?: boolean;
}
export declare const TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
export {};
