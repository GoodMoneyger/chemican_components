import { default as React } from '../../../node_modules/react';
import { Toast as RadixToast } from 'radix-ui';
export interface ToastProps extends React.ComponentProps<typeof RadixToast.Root> {
    message: string;
    title: string;
    isOpen: boolean;
    onClose: () => void;
    level: 'success' | 'error' | 'warning' | 'info';
}
export declare const Toast: React.FC<ToastProps>;
