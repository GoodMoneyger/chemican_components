import { default as React } from '../../../node_modules/react';
export interface FormFieldProps {
    label?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
    name: string;
    error?: React.ReactNode;
    description?: React.ReactNode;
    optional?: boolean;
}
export declare const FormField: React.FC<FormFieldProps>;
