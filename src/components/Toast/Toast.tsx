import React from 'react';
import { Toast as RadixToast } from 'radix-ui';
import {
  IconX,
  IconCircleCheckFilled,
  IconExclamationCircleFilled,
  IconCircleXFilled,
  IconInfoCircleFilled,
} from '@tabler/icons-react';

export interface ToastProps
  extends React.ComponentProps<typeof RadixToast.Root> {
  message: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  level: 'success' | 'error' | 'warning' | 'info';
}

export const Toast: React.FC<ToastProps> = ({
  message,
  title,
  isOpen,
  onClose,
  level,
}) => {
  return (
    <RadixToast.Provider>
      <RadixToast.Root
        open={isOpen}
        onOpenChange={onClose}
        className="border-surface-default bg-surface-primary p-md
          text-body-primary shadow-high w-96 rounded border-1"
      >
        <div className="gap-xs flex items-start justify-between">
          <div className="gap-xs flex items-start">
            <div>
              {level === 'success' && (
                <IconCircleCheckFilled
                  className="h-md text-shape-status-success w-md"
                />
              )}
              {level === 'error' && (
                <IconCircleXFilled className="h-md text-shape-status-alert w-md" />
              )}
              {level === 'warning' && (
                <IconExclamationCircleFilled
                  className="h-md text-shape-status-warning w-md"
                />
              )}
              {level === 'info' && (
                <IconInfoCircleFilled
                  className="h-md text-shape-status-info w-md"
                />
              )}
            </div>
            <div>
              <RadixToast.Title className="text-body-primary font-bold">
                <h5 className="mb-xxs text-md leading-none">{title}</h5>
              </RadixToast.Title>
              <RadixToast.Description>
                <p className="text-md">{message}</p>
              </RadixToast.Description>
            </div>
          </div>
          <div>
            <RadixToast.Action asChild altText="Close" className="pt-xxxs">
              <button onClick={onClose} className="cursor-pointer">
                <IconX className="h-md text-body-primary w-md" />
              </button>
            </RadixToast.Action>
          </div>
        </div>
      </RadixToast.Root>
      <RadixToast.Viewport />
    </RadixToast.Provider>
  );
};
