import React, { type ReactNode } from 'react';
import { Dialog as RadixDialog } from 'radix-ui';

import { Button } from '../Button';
import type { ButtonProps } from '../Button';

export interface DialogAction
  extends Omit<ButtonProps, 'children' | 'asChild' | 'value'> {
  label: ReactNode;
  onAction?: (
    close?: (value?: unknown) => void
  ) => void | Promise<void> | boolean | Promise<boolean>;
  value?: unknown; // The value being passed to the onClose handler
  classNames?: string;
}

export interface DialogProps
  extends React.ComponentProps<typeof RadixDialog.Root> {
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
  onOpenAutoFocus?: React.ComponentProps<
    typeof RadixDialog.Content
  >['onOpenAutoFocus'];
}

const defaultActions: DialogAction[] = [
  {
    label: 'Confirm',
    value: true,
    intent: 'primary',
  },
];

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  onCancel = (close) => close(),
  title,
  children,
  busy,
  actions = defaultActions,
  cancellable = true,
  cancelButtonLabel = 'キャンセル',
  allowClickOutside = true,
  onOpenAutoFocus,
}) => {
  const [loading, setLoading] = React.useState<number>(-1);

  const setsBusyManually = busy !== undefined;
  const busyState = setsBusyManually ? busy : loading !== -1;

  const handleActionClick = async (action: DialogAction) => {
    const actionIndex = actions.indexOf(action);
    if (action.onAction) {
      setLoading(actionIndex);
      const result = await action.onAction(onClose);
      setLoading(-1);

      // If onAction returns false, don't close the dialog
      if (result === false) {
        return;
      }
    } else {
      setLoading(-1);
    }
    // Automatically close the dialog after the action is performed
    // unless it was already closed or the action returned false.
    if (isOpen) {
      onClose(action.value);
    }
  };

  const handleCancelClick = () => {
    onCancel(onClose);
  };

  const handleOutsideClick = (e: Event) => {
    e.preventDefault();
    if (cancellable && !busyState && allowClickOutside) {
      onCancel(onClose);
    }
  };

  const handleEscapeKeyDown = (e: KeyboardEvent) => {
    if (busyState) {
      e.preventDefault();
      return;
    }

    e.preventDefault();
    onCancel(onClose);
  };

  return (
    <RadixDialog.Root open={isOpen} onOpenChange={onClose}>
      <RadixDialog.Portal>
        <RadixDialog.Overlay
          className="bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
            w-full"
        >
          <RadixDialog.Content
            aria-describedby={undefined}
            onPointerDownOutside={handleOutsideClick}
            onEscapeKeyDown={handleEscapeKeyDown}
            onOpenAutoFocus={onOpenAutoFocus}
            className="bg-surface-primary rounded-lg z-dialog max-w-screen-sm
              min-w-96 fixed top-1/2 left-1/2 w-2/3 -translate-x-1/2
              -translate-y-1/2 transform"
          >
            <header className="px-xl py-lg">
              {title && (
                <RadixDialog.Title
                  className="text-xxl text-body-primary font-bold flex
                    items-center leading-[1.2]"
                >
                  {title}
                </RadixDialog.Title>
              )}
            </header>

            <div
              className="border-divider-default bg-surface-secondary px-xl pt-md
                pb-xxl text-body-primary max-h-[70vh] flex-1 overflow-hidden
                overflow-y-auto border-y-1"
            >
              {children}
            </div>

            <footer className="px-xl py-md flex flex-shrink-0 justify-between">
              {cancellable && (
                <Button
                  intent="tertiary"
                  onClick={handleCancelClick}
                  disabled={busyState}
                >
                  {cancelButtonLabel}
                </Button>
              )}
              <div className={`gap-xs flex ${!cancellable ? 'ml-auto' : ''}`}>
                {actions.map((action, index) => {
                  const { label, classNames, onAction, value, ...buttonProps } =
                    action;

                  return (
                    <Button
                      key={index}
                      loading={loading === index}
                      {...buttonProps}
                      intent={action.intent || 'primary'}
                      className={classNames}
                      onClick={() => handleActionClick(action)}
                    >
                      {label}
                    </Button>
                  );
                })}
              </div>
            </footer>
          </RadixDialog.Content>
        </RadixDialog.Overlay>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};
