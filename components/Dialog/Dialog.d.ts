import { default as React, ReactNode } from '../../../node_modules/react';
import { Dialog as RadixDialog } from 'radix-ui';
import { ButtonProps } from '../Button';
export interface DialogAction extends Omit<ButtonProps, 'children' | 'asChild' | 'value'> {
    label: ReactNode;
    onAction?: (close?: (value?: unknown) => void) => void | Promise<void> | boolean | Promise<boolean>;
    value?: unknown;
    classNames?: string;
}
export interface DialogProps extends React.ComponentProps<typeof RadixDialog.Root> {
    isOpen: boolean;
    onClose: (value?: unknown) => void;
    onCancel?: (close: () => void) => void | Promise<void>;
    children: ReactNode;
    busy?: boolean;
    title: ReactNode;
    actions?: DialogAction[];
    cancellable?: boolean;
    cancelButtonLabel?: ReactNode;
    allowClickOutside?: boolean;
    /**
     * Focus handling when the dialog opens. Defaults to focusing the first
     * field the user can act on, and only when it is a plain text input or
     * textarea that is either empty or the only such field. Disabled and read
     * only controls are ignored. Pass a handler to override, e.g.
     * `(e) => e.preventDefault()` to never move the focus into the content.
     */
    onOpenAutoFocus?: React.ComponentProps<typeof RadixDialog.Content>['onOpenAutoFocus'];
    bodyClassName?: string;
    /**
     * Maximum width of the dialog. Use `lg` for content laid out in columns,
     * which does not read well at the default width.
     */
    size?: 'md' | 'lg';
}
export declare const Dialog: React.FC<DialogProps>;
