import { default as React } from '../../../node_modules/react';
import { Dialog as RadixDialog } from 'radix-ui';
export interface DialogProps extends React.ComponentProps<typeof RadixDialog.Root> {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title: string;
    confirmButtonLabel: string;
    cancelButtonLabel?: string;
}
export declare const Dialog: React.FC<DialogProps>;
