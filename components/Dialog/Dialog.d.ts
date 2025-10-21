import { default as React, ReactNode } from '../../../node_modules/react';
import { Dialog as RadixDialog } from 'radix-ui';
export interface DialogAction {
    label: ReactNode;
    onAction?: () => void;
    value?: unknown;
    intent?: 'primary' | 'secondary' | 'tertiary' | 'text';
    classNames?: string;
}
export interface DialogProps extends React.ComponentProps<typeof RadixDialog.Root> {
    isOpen: boolean;
    onClose: (value?: unknown) => void;
    children: ReactNode;
    title: ReactNode;
    actions?: DialogAction[];
    cancellable?: boolean;
    cancelButtonLabel?: ReactNode;
}
export declare const Dialog: React.FC<DialogProps>;
