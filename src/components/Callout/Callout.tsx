import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import {
  IconInfoCircleFilled,
  IconCircleCheckFilled,
  IconAlertTriangleFilled,
  IconX,
  TablerIcon,
} from '@tabler/icons-react';

import { cn } from '../../lib/utils';
import { Button } from '../Button';

const calloutVariants = cva(
  'gap-xs flex items-center overflow-hidden rounded-sm border',
  {
    variants: {
      intent: {
        info: 'bg-surface-inprogress border-surface-info',
        success: 'bg-surface-success border-surface-success',
        warning: 'bg-surface-warning border-surface-warning',
        alert: 'bg-surface-alert border-surface-alert',
      },
      size: {
        default: 'p-xs',
        large: 'p-md',
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

const titleVariants = cva('text-body-primary font-medium');

const descriptionVariants = cva('text-body-primary');

const intentIcons: Record<string, TablerIcon> = {
  info: IconInfoCircleFilled,
  success: IconCircleCheckFilled,
  warning: IconAlertTriangleFilled,
  alert: IconX,
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
  icon?: TablerIcon;
}

export const Callout = React.forwardRef<HTMLDivElement, CalloutProps>(
  (
    {
      className,
      intent = 'info',
      size = 'default',
      title,
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
        <div className={cn(iconVariants({ intent, size }))}>
          {IconComponent && <IconComponent className="size-full" />}
        </div>

        <div className="min-w-0 flex-1">
          {title && <div className={cn(titleVariants())}>{title}</div>}
          {children && (
            <div className={cn(descriptionVariants())}>{children}</div>
          )}
        </div>

        {action && (
          <div className="relative shrink-0 self-start">
            <Button
              onClick={action.onClick}
              intent="ghost"
              style={{ top: '-5px', right: '-.5rem' }}
              className="absolute"
              size="xs"
            >
              {action.label}
            </Button>
          </div>
        )}
      </div>
    );
  }
);

Callout.displayName = 'Callout';
