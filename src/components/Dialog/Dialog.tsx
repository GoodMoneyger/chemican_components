import React, { type ReactNode } from 'react';
import { Dialog as RadixDialog } from 'radix-ui';

import { Button } from '../Button';
import type { ButtonProps } from '../Button';

export interface DialogAction
  extends Omit<ButtonProps, 'children' | 'asChild' | 'value'> {
  label: ReactNode;
  onAction?: (close?: (value?: unknown) => void) => void | Promise<void>;
  value?: unknown; // The value being passed to the onClose handler
  classNames?: string;
}

export interface DialogProps
  extends React.ComponentProps<typeof RadixDialog.Root> {
  isOpen: boolean;
  onClose: (value?: unknown) => void;
  children: ReactNode;
  busy?: boolean;
  title: ReactNode;
  actions?: DialogAction[];
  cancellable?: boolean;
  cancelButtonLabel?: ReactNode;
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
  title,
  children,
  busy,
  actions = defaultActions,
  cancellable = true,
  cancelButtonLabel = 'キャンセル',
}) => {
  const [loading, setLoading] = React.useState<number>(-1);

  const setsBusyManually = busy !== undefined;
  const busyState = setsBusyManually ? busy : loading !== -1;

  const handleActionClick = async (action: DialogAction) => {
    const actionIndex = actions.indexOf(action);
    if (action.onAction) {
      setLoading(actionIndex);
      await action.onAction(onClose);
    }
    // Automatically close the dialog after the action is performed
    // unless it was already closed.
    if (isOpen) {
      onClose(action.value);
    }
    setLoading(-1);
  };

  const handleCancelClick = () => {
    onClose();
  };

  return (
    <RadixDialog.Root open={isOpen} onOpenChange={onClose}>
      <RadixDialog.Overlay
        className="bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
          w-full"
      />
      <RadixDialog.Content
        onPointerDownOutside={(e) => {
          if (!cancellable || busyState) {
            e.preventDefault();
          }
        }}
        className="bg-surface-primary rounded-lg z-dialog max-w-screen-sm
          min-w-96 fixed top-1/2 left-1/2 flex max-h-[90vh] w-2/3
          -translate-x-1/2 -translate-y-1/2 transform flex-col"
      >
        <div
          className="px-xl py-lg flex flex-shrink-0 items-center
            justify-between"
        >
          {title && (
            <RadixDialog.Title
              className="text-xxl text-body-primary font-bold min-h-4.5 flex
                items-center leading-none"
            >
              {title}
            </RadixDialog.Title>
          )}
        </div>
        <div
          className="border-divider-default bg-surface-secondary px-xl pt-md
            pb-xxl text-body-primary min-h-40 flex-1 overflow-y-auto border-y-1"
        >
          {children}
        </div>
        <div className="px-xl py-md flex flex-shrink-0 justify-between">
          {cancellable && (
            <RadixDialog.Close asChild>
              <Button
                intent="tertiary"
                onClick={handleCancelClick}
                disabled={busyState}
              >
                {cancelButtonLabel}
              </Button>
            </RadixDialog.Close>
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
        </div>
      </RadixDialog.Content>
    </RadixDialog.Root>
  );
};
