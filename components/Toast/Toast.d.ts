import { default as React } from '../../../node_modules/react';
import { Toast as RadixToast } from 'radix-ui';
export interface ToastItemProps extends Omit<React.ComponentProps<typeof RadixToast.Root>, 'title'> {
    message: React.ReactNode;
    title: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    level: 'success' | 'error' | 'warning' | 'info';
}
export declare const ToastItem: React.FC<ToastItemProps>;
export interface ToastProviderProps extends React.ComponentProps<typeof RadixToast.Provider> {
    children: React.ReactNode;
}
export declare const ToastProvider: React.FC<ToastProviderProps>;
