import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';
declare const uploadVariants: (props?: ({
    size?: "small" | "large" | null | undefined;
    state?: "default" | "success" | "error" | "inProgress" | "dragging" | null | undefined;
    disabled?: boolean | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export interface FileUploaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>, VariantProps<typeof uploadVariants> {
    onFileSelect?: (files: FileList) => void;
    accept?: string;
    multiple?: boolean;
    disabled?: boolean;
    progress?: number;
    fileName?: string;
    fileSize?: string;
    errorMessage?: string;
    successMessage?: string;
    maxFileSize?: number;
    onFileRemove?: () => void;
    dragDropText?: string;
    orText?: string;
    selectFileText?: string;
    dropFilesText?: string;
    uploadingText?: string;
    uploadCompletedText?: string;
    uploadFailedText?: string;
}
declare const FileUploader: React.ForwardRefExoticComponent<FileUploaderProps & React.RefAttributes<HTMLDivElement>>;
export { FileUploader };
