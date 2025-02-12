import React from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import { IconX } from '@tabler/icons-react';

import { Button } from '../Button';

export interface DialogProps
  extends React.ComponentProps<typeof RadixDialog.Root> {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
  confirmButtonLabel: string;
  cancelButtonLabel?: string;
}

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  title,
  children,
  confirmButtonLabel,
  cancelButtonLabel = 'キャンセル',
}) => {
  return (
    <RadixDialog.Root open={isOpen} onOpenChange={onClose}>
      <RadixDialog.Overlay className="fixed top-0 left-0 h-full w-full bg-surface-scrimmed" />
      <RadixDialog.Content className="shadow-lg fixed top-1/2 left-1/2 w-2/3 max-w-[40rem] min-w-[25rem] -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-surface-primary">
        <div className="flex flex-col">
          <div className="flex flex-grow justify-between px-xl py-lg">
            <div>
              {title && (
                <h2 className="text-size-xxl text-body-primary">{title}</h2>
              )}
            </div>
            <RadixDialog.Close asChild>
              <button className="cursor-pointer">
                <IconX className="h-xl w-xl text-body-primary" />
              </button>
            </RadixDialog.Close>
          </div>
          <div className="flex min-h-10 flex-grow-0 border-y-1 border-divider-default bg-surface-secondary px-xl py-lg text-body-primary">
            {children}
          </div>
          <div className="flex flex-grow gap-xs px-md py-lg">
            <RadixDialog.Close asChild>
              <Button intent="secondary">{cancelButtonLabel}</Button>
            </RadixDialog.Close>
            <RadixDialog.Close asChild>
              <Button intent="primary">{confirmButtonLabel}</Button>
            </RadixDialog.Close>
          </div>
        </div>
      </RadixDialog.Content>
    </RadixDialog.Root>
  );
};
