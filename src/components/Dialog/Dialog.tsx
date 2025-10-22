import React, { type ReactNode } from 'react';
import { Dialog as RadixDialog } from 'radix-ui';

import { Button } from '../Button';
import type { ButtonProps } from '../Button';

export interface DialogAction
  extends Omit<ButtonProps, 'children' | 'asChild' | 'value'> {
  label: ReactNode;
  onAction?: () => void;
  value?: unknown; // The value being passed to the onClose handler
  classNames?: string;
}

export interface DialogProps
  extends React.ComponentProps<typeof RadixDialog.Root> {
  isOpen: boolean;
  onClose: (value?: unknown) => void;
  children: ReactNode;
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
  actions = defaultActions,
  cancellable = true,
  cancelButtonLabel = 'キャンセル',
}) => {
  const handleActionClick = (action: DialogAction) => {
    if (action.onAction) {
      action.onAction();
    }
    onClose(action.value);
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
        className="bg-surface-primary rounded-lg z-dialog fixed top-1/2 left-1/2
          w-2/3 max-w-[40rem] min-w-[25rem] -translate-x-1/2 -translate-y-1/2
          transform"
      >
        <div className="flex flex-col">
          <div
            className="px-xl py-lg flex flex-grow items-center justify-between"
          >
            {title && (
              <RadixDialog.Title
                className="text-xxl text-body-primary font-bold flex h-[18px]
                  items-center"
              >
                {title}
              </RadixDialog.Title>
            )}
          </div>
          <div
            className="border-divider-default bg-surface-secondary px-xl py-lg
              text-body-primary min-h-40 flex flex-grow-0 border-y-1"
          >
            {children}
          </div>
          <div className="px-md py-lg flex justify-between">
            {cancellable && (
              <RadixDialog.Close asChild>
                <Button intent="tertiary" onClick={handleCancelClick}>
                  {cancelButtonLabel}
                </Button>
              </RadixDialog.Close>
            )}
            <div className={`gap-xs flex ${!cancellable ? 'ml-auto' : ''}`}>
              {actions.map((action, index) => {
                const { label, classNames, onAction, value, ...buttonProps } =
                  action;
                return (
                  <RadixDialog.Close
                    key={index}
                    asChild
                    disabled={action.disabled}
                  >
                    <Button
                      {...buttonProps}
                      intent={action.intent || 'primary'}
                      className={classNames}
                      onClick={() => handleActionClick(action)}
                    >
                      {label}
                    </Button>
                  </RadixDialog.Close>
                );
              })}
            </div>
          </div>
        </div>
      </RadixDialog.Content>
    </RadixDialog.Root>
  );
};
