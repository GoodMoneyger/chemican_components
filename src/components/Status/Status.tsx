import React from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '../../utils';
import { ColorShapeTokens, ColorBackgroundTokens } from '../../tokens';

export interface StatusProps {
  className?: string;
  children?: React.ReactNode;
  accentColor?: ColorShapeTokens | ColorBackgroundTokens;
  size?: 'sm' | 'md';
  onRemove?: () => void;
  indicator?: 'valid' | 'invalid';
}

const statusVariants = cva(
  `px-xs py-xxs text-interactive-inverse inline-flex items-center rounded-full
  font-medium`,
  {
    variants: {
      size: {
        sm: 'text-sm',
        md: '',
      },
      hasRemove: {
        true: 'gap-xxs',
        false: '',
      },
      hasIndicator: {
        true: 'gap-xxs',
        false: '',
      },
      indicator: {
        valid: 'bg-status-success',
        invalid: 'bg-interactive-disabled text-body-secondary',
        undefined: '',
      },
    },
    defaultVariants: {
      size: 'sm',
      hasRemove: false,
      hasIndicator: false,
      indicator: undefined,
    },
  }
);

const indicatorDotVariants = cva('h-2 w-2 rounded-full', {
  variants: {
    indicator: {
      valid: 'bg-shape-accent-lime-soft',
      invalid: 'bg-shape-light',
    },
  },
});

export const Status: React.FC<StatusProps> = ({
  children,
  className,
  accentColor,
  size = 'md',
  onRemove,
  indicator,
}) => {
  const hasIndicator = Boolean(indicator);

  return (
    <div
      className={cn(
        statusVariants({
          size,
          hasRemove: Boolean(onRemove),
          hasIndicator,
          indicator,
        }),
        className
      )}
      style={
        !indicator && accentColor
          ? {
              backgroundColor: `var(${accentColor})`,
            }
          : undefined
      }
    >
      {hasIndicator && indicator && (
        <div className={indicatorDotVariants({ indicator })} />
      )}
      {children}
      {Boolean(onRemove) && (
        <button
          className={cn(
            `bg-interactive-neutral-default flex h-3 w-3 cursor-pointer
            items-center justify-center rounded-full`
          )}
          onClick={onRemove}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-shape-primary h-2 w-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      )}
    </div>
  );
};
