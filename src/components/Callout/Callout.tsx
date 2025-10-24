import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import {
  IconInfoCircleFilled,
  IconCircleCheckFilled,
} from '@tabler/icons-react';
import type { TablerIcon } from '@tabler/icons-react';

import { Button } from '../Button';
import type { IconProp } from '../../lib/utils';
import { cn, renderIcon } from '../../lib/utils';

const calloutVariants = cva(
  'rounded-sm gap-xxs flex items-start overflow-hidden border',
  {
    variants: {
      intent: {
        info: 'bg-surface-inprogress border-surface-info',
        success: 'bg-surface-success border-surface-success',
        warning: 'bg-surface-warning border-surface-warning',
        alert: 'bg-surface-alert border-surface-alert',
      },
      size: {
        default: 'pt-xs pr-sm pb-xs pl-xs',
        large: 'pt-sm pr-lg pb-sm pl-md',
      },
    },
    defaultVariants: {
      intent: 'info',
      size: 'default',
    },
  }
);

const iconVariants = cva('shrink-0', {
  variants: {
    intent: {
      info: 'text-shape-status-info',
      success: 'text-shape-status-success',
      warning: 'text-shape-status-warning',
      alert: 'text-shape-status-alert',
    },
    size: {
      default: 'size-5',
      large: 'size-5',
    },
  },
  defaultVariants: {
    intent: 'info',
    size: 'default',
  },
});

const titleVariants = cva('text-body-primary font-bold text-md');

const descriptionVariants = cva(
  'text-body-primary font-normal leading-6 text-md'
);

const intentIcons: Record<string, TablerIcon> = {
  info: IconInfoCircleFilled,
  success: IconCircleCheckFilled,
  warning: IconInfoCircleFilled,
  alert: IconInfoCircleFilled,
};

export interface CalloutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof calloutVariants> {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  action?: {
    label: string;
    onClick?: () => void;
  };
  icon?: IconProp;
}

export const Callout = React.forwardRef<HTMLDivElement, CalloutProps>(
  (
    {
      className,
      intent = 'info',
      size = 'default',
      title,
      description,
      children,
      action,
      icon,
      ...props
    },
    ref
  ) => {
    const IconComponent = icon || intentIcons[intent!];

    return (
      <div
        ref={ref}
        className={cn(calloutVariants({ intent, size }), className)}
        {...props}
      >
        <div className={cn(iconVariants({ intent, size }), 'top-0.5 relative')}>
          {renderIcon(IconComponent, { className: 'size-full' })}
        </div>

        <div className="min-w-0 gap-xxs flex flex-1 flex-col">
          {title && (
            <div className="flex items-center justify-between">
              <div className={cn(titleVariants())}>{title}</div>
              {action && (
                <Button
                  onClick={action.onClick}
                  intent="text"
                  size="xs"
                  className="py-0 text-md font-normal
                    text-interactive-primary-default h-auto underline"
                >
                  {action.label}
                </Button>
              )}
            </div>
          )}
          {(children || description) && (
            <div className={cn(descriptionVariants())}>
              {children || description}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Callout.displayName = 'Callout';
