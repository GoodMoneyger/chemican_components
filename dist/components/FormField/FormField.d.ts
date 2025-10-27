import { default as React } from 'react';
export interface FormFieldProps {
    label?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
    name: string;
    error?: string;
    description?: string;
    optional?: boolean;
}
export declare const FormField: React.FC<FormFieldProps>;
