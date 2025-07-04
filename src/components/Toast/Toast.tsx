import React from 'react';
import * as RadixToast from '@radix-ui/react-toast';
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
        className="w-96 rounded border-1 border-surface-default
          bg-surface-primary p-md text-body-primary shadow-high"
      >
        <div className="flex items-start justify-between gap-xs">
          <div className="flex items-start gap-xs">
            <div>
              {level === 'success' && (
                <IconCircleCheckFilled
                  className="h-md w-md text-shape-status-success"
                />
              )}
              {level === 'error' && (
                <IconCircleXFilled className="h-md w-md text-shape-status-alert" />
              )}
              {level === 'warning' && (
                <IconExclamationCircleFilled
                  className="h-md w-md text-shape-status-warning"
                />
              )}
              {level === 'info' && (
                <IconInfoCircleFilled
                  className="h-md w-md text-shape-status-info"
                />
              )}
            </div>
            <div>
              <RadixToast.Title className="font-bold text-body-primary">
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
                <IconX className="h-md w-md text-body-primary" />
              </button>
            </RadixToast.Action>
          </div>
        </div>
      </RadixToast.Root>
      <RadixToast.Viewport />
    </RadixToast.Provider>
  );
};
