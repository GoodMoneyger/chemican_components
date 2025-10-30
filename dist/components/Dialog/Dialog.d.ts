import { default as React, ReactNode } from 'react';
import { Dialog as RadixDialog } from 'radix-ui';
import { ButtonProps } from '../Button';
export interface DialogAction extends Omit<ButtonProps, 'children' | 'asChild' | 'value'> {
    label: ReactNode;
    onAction?: (close?: (value?: unknown) => void) => void | Promise<void>;
    value?: unknown;
    classNames?: string;
}
export interface DialogProps extends React.ComponentProps<typeof RadixDialog.Root> {
    isOpen: boolean;
    onClose: (value?: unknown) => void;
    children: ReactNode;
    busy?: boolean;
    title: ReactNode;
    actions?: DialogAction[];
    cancellable?: boolean;
    cancelButtonLabel?: ReactNode;
}
export declare const Dialog: React.FC<DialogProps>;
