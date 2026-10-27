import React, { type ReactNode } from 'react';
import { Dialog as RadixDialog } from 'radix-ui';

import { cn } from '../../lib/utils';
import { Button } from '../Button';
import type { ButtonProps } from '../Button';

import { focusFirstTextField } from './openAutoFocus';

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
  /**
   * Focus handling when the dialog opens. Defaults to focusing the first
   * field the user can act on, and only when it is a plain text input or
   * textarea that is either empty or the only such field. Disabled and read
   * only controls are ignored. Pass a handler to override, e.g.
   * `(e) => e.preventDefault()` to never move the focus into the content.
   */
  onOpenAutoFocus?: React.ComponentProps<
    typeof RadixDialog.Content
  >['onOpenAutoFocus'];
  bodyClassName?: string;
  /**
   * Maximum width of the dialog. Use `lg` for content laid out in columns,
   * which does not read well at the default width.
   */
  size?: 'md' | 'lg';
}

const sizeClasses: Record<NonNullable<DialogProps['size']>, string> = {
  md: 'max-w-screen-sm',
  lg: 'max-w-screen-lg',
};

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
  onOpenAutoFocus = focusFirstTextField,
  bodyClassName,
  size = 'md',
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
            className={cn(
              `bg-surface-primary rounded-lg z-dialog min-w-96 max-md:flex
              max-md:max-h-[calc(100dvh-2rem)] max-md:w-[calc(100vw-2rem)]
              max-md:min-w-0 max-md:flex-col fixed top-1/2 left-1/2 w-2/3
              -translate-x-1/2 -translate-y-1/2 transform`,
              sizeClasses[size]
            )}
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
              // max-h-[calc(100dvh-40px-68px-78px)] → viewport full height - 20px top and bottom - header - footer.
              // Below md the content is a capped flex column instead, so a stacked footer still fits.
              className={cn(
                `border-divider-default bg-surface-secondary px-xl pt-md pb-xxl
                text-body-primary max-md:max-h-none max-md:min-h-0 max-md:flex-1
                max-h-[calc(100dvh-40px-68px-78px)] overflow-hidden
                overflow-y-auto border-y-1`,
                bodyClassName
              )}
            >
              {children}
            </div>

            <footer
              className="px-xl py-md max-md:gap-xs max-md:flex-col-reverse flex
                justify-between"
            >
              {cancellable && (
                <Button
                  intent="tertiary"
                  onClick={handleCancelClick}
                  disabled={busyState}
                  className="max-md:w-full"
                >
                  {cancelButtonLabel}
                </Button>
              )}
              <div
                className={cn(
                  `gap-xs max-md:ml-0 max-md:flex-col-reverse max-md:*:w-full
                  flex`,
                  { 'ml-auto': !cancellable }
                )}
              >
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
