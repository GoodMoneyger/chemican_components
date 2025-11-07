import React from 'react';
import { Toast as RadixToast } from 'radix-ui';
import {
  IconX,
  IconCircleCheckFilled,
  IconExclamationCircleFilled,
  IconInfoCircleFilled,
} from '@tabler/icons-react';

import { cn } from '../../utils';

export interface ToastItemProps
  extends Omit<React.ComponentProps<typeof RadixToast.Root>, 'title'> {
  message: React.ReactNode;
  title?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  level: 'success' | 'error' | 'warning' | 'info';
}

// Individual toast item component (for use with ToastProvider)
export const ToastItem: React.FC<ToastItemProps> = ({
  message,
  title,
  isOpen,
  onClose,
  level,
}) => {
  return (
    <RadixToast.Root
      open={isOpen}
      onOpenChange={onClose}
      className="border-surface-default bg-surface-primary p-sm
        text-body-primary shadow-high w-96 rounded
        data-[state=open]:animate-slide-in data-[state=closed]:animate-hide
        data-[swipe=end]:animate-swipe-out data-[swipe=cancel]:translate-x-0
        border-1 data-[swipe=cancel]:transition-[transform_200ms_ease-out]
        data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]"
    >
      <div className="gap-xs flex items-start justify-between">
        <div className="gap-xxs flex items-start">
          <div>
            {level === 'success' && (
              <IconCircleCheckFilled
                className="h-md text-shape-status-success w-md"
              />
            )}
            {level === 'error' && (
              <IconExclamationCircleFilled
                className="h-md text-shape-status-alert w-md"
              />
            )}
            {level === 'warning' && (
              <IconExclamationCircleFilled
                className="h-md text-shape-status-warning w-md"
              />
            )}
            {level === 'info' && (
              <IconInfoCircleFilled className="h-md text-shape-status-info w-md" />
            )}
          </div>
          <div>
            {title && (
              <RadixToast.Title className="text-body-primary font-bold">
                <h5
                  className={cn('text-md leading-none', {
                    'mb-xs': Boolean(message),
                  })}
                >
                  {title}
                </h5>
              </RadixToast.Title>
            )}
            <RadixToast.Description>
              <p className="text-md -my-1">{message}</p>
            </RadixToast.Description>
          </div>
        </div>
        <div>
          <RadixToast.Action asChild altText="Close">
            <button onClick={onClose} className="block">
              <IconX className="h-md text-body-primary w-md" />
            </button>
          </RadixToast.Action>
        </div>
      </div>
    </RadixToast.Root>
  );
};

export interface ToastProviderProps
  extends React.ComponentProps<typeof RadixToast.Provider> {
  children: React.ReactNode;
}

// Provider for multiple toasts (use at app root level)
export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  swipeDirection = 'right',
  ...rest
}) => {
  return (
    <RadixToast.Provider swipeDirection={swipeDirection} {...rest}>
      {children}
      <RadixToast.Viewport
        className="gap-md bottom-0 right-0 m-0 fixed z-[100] flex max-w-[100vw]
          flex-col p-[var(--viewport-padding)] [--viewport-padding:_16px]"
      />
    </RadixToast.Provider>
  );
};
