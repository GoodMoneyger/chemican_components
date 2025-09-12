import React from 'react';
import { Dialog as RadixDialog } from 'radix-ui';
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
          <div className="px-xl py-lg flex flex-grow justify-between">
            <div>
              {title && <h2 className="text-xxl text-body-primary">{title}</h2>}
            </div>
            <RadixDialog.Close asChild>
              <button className="cursor-pointer">
                <IconX className="h-xl text-body-primary w-xl" />
              </button>
            </RadixDialog.Close>
          </div>
          <div
            className="border-divider-default bg-surface-secondary px-xl py-lg
              text-body-primary min-h-40 flex flex-grow-0 border-y-1"
          >
            {children}
          </div>
          <div className="gap-xs px-md py-lg flex flex-grow">
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
