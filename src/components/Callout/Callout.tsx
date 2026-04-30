import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import {
  IconInfoCircleFilled,
  IconCircleCheckFilled,
  IconLockFilled,
} from '@tabler/icons-react';
import type { TablerIcon } from '@tabler/icons-react';

import { TextLink } from '../TextLink';
import type { IconProp } from '../../lib/utils';
import { cn, renderIcon } from '../../lib/utils';

const calloutVariants = cva(
  'rounded-sm gap-xxs py-sm px-md flex items-start overflow-hidden border',
  {
    variants: {
      intent: {
        info: 'bg-surface-inprogress border-surface-info',
        success: 'bg-surface-success border-surface-success',
        warning: 'bg-surface-warning border-surface-warning',
        alert: 'bg-surface-alert border-surface-alert',
        paid: 'bg-surface-primary border-surface-success',
      },
    },
    defaultVariants: {
      intent: 'info',
    },
  }
);

const iconVariants = cva('size-5 shrink-0', {
  variants: {
    intent: {
      info: 'text-shape-status-info',
      success: 'text-shape-status-success',
      warning: 'text-shape-status-warning',
      alert: 'text-shape-status-alert',
      paid: 'text-shape-status-success',
    },
  },
  defaultVariants: {
    intent: 'info',
  },
});

const titleVariants = cva('font-bold text-md', {
  variants: {
    intent: {
      info: 'text-body-primary',
      success: 'text-body-primary',
      warning: 'text-body-primary',
      alert: 'text-body-primary',
      paid: 'text-body-success',
    },
  },
  defaultVariants: {
    intent: 'info',
  },
});

const descriptionVariants = cva(
  'text-body-primary font-normal leading-6 text-md'
);

const contentVariants = cva('min-w-0 gap-xxxs flex flex-1 flex-col');

const intentIcons: Record<string, TablerIcon> = {
  info: IconInfoCircleFilled,
  success: IconCircleCheckFilled,
  warning: IconInfoCircleFilled,
  alert: IconInfoCircleFilled,
  paid: IconLockFilled,
};

export interface CalloutProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>,
    VariantProps<typeof calloutVariants> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  action?: {
    label: React.ReactNode;
    onClick?: () => void;
    href?: string;
    target?: React.HTMLAttributeAnchorTarget;
    rel?: string;
  };
  icon?: IconProp;
}

export const Callout = React.forwardRef<HTMLDivElement, CalloutProps>(
  (
    {
      className,
      intent = 'info',
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
        className={cn(calloutVariants({ intent }), className)}
        {...props}
      >
        <div className={cn(contentVariants())}>
          {title && (
            <div className="flex items-center justify-between">
              <div className="gap-xxs flex">
                <div
                  className={cn(iconVariants({ intent }), 'top-0.5 relative')}
                >
                  {renderIcon(IconComponent, { className: 'size-full' })}
                </div>
                <div className={cn(titleVariants({ intent }))}>{title}</div>
              </div>
              {action &&
                (action.href ? (
                  <TextLink
                    href={action.href}
                    target={action.target}
                    rel={action.rel}
                    intent="primary"
                    size="sm"
                  >
                    {action.label}
                  </TextLink>
                ) : (
                  <TextLink
                    onClick={action.onClick}
                    intent="primary"
                    size="sm"
                    asChild
                  >
                    <button type="button" className="cursor-pointer">
                      {action.label}
                    </button>
                  </TextLink>
                ))}
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
