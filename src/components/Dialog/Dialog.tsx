import React from 'react';
import { Dialog as RadixDialog } from 'radix-ui';

import { Button } from '../Button';

export interface DialogAction {
  label: string;
  onAction?: () => void;
  value?: unknown; // The value being passed to the onClose handler
  intent?: 'primary' | 'secondary' | 'tertiary' | 'text';
  classNames?: string;
}

export interface DialogProps
  extends React.ComponentProps<typeof RadixDialog.Root> {
  isOpen: boolean;
  onClose: (value?: unknown) => void;
  children: React.ReactNode;
  title: string;
  actions?: DialogAction[];
  cancellable?: boolean;
  cancelButtonLabel?: string;
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
        className="bg-surface-scrimmed top-0 left-0 fixed h-full w-full
          opacity-85"
      />
      <RadixDialog.Content
        className="bg-surface-primary rounded-lg fixed top-1/2 left-1/2 w-2/3
          max-w-[40rem] min-w-[25rem] -translate-x-1/2 -translate-y-1/2
          transform"
      >
        <div className="flex flex-col">
          <div
            className="px-xl py-lg flex flex-grow items-center justify-between"
          >
            {title && (
              <span
                className="text-xxl text-body-primary font-bold flex h-[18px]
                  items-center"
              >
                {title}
              </span>
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
              {actions.map((action, index) => (
                <RadixDialog.Close key={index} asChild>
                  <Button
                    intent={action.intent || 'primary'}
                    className={action.classNames}
                    onClick={() => handleActionClick(action)}
                  >
                    {action.label}
                  </Button>
                </RadixDialog.Close>
              ))}
            </div>
          </div>
        </div>
      </RadixDialog.Content>
    </RadixDialog.Root>
  );
};
