import React from 'react';
import { cva } from 'class-variance-authority';

import { ColorShapeTokens } from '../../tokens';
import { cn } from '../../utils';

export interface TagProps {
  className?: string;
  children?: React.ReactNode;
  onRemove?: () => void;
  accentColor: ColorShapeTokens;
  size?: 'sm' | 'md';
}

const tagVariants = cva(
  `gap-xxs text-accent-gray-strong py-xxs px-xs my-1 inline-flex items-center
  rounded-full font-medium`,
  {
    variants: {
      size: {
        sm: 'text-sm',
        md: '',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  }
);

export const Tag: React.FC<TagProps> = ({
  accentColor,
  children,
  className,
  onRemove,
  size = 'sm',
}) => {
  return (
    <div
      className={cn(tagVariants({ size }), className)}
      style={{
        backgroundColor: `var(${accentColor})`,
      }}
    >
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
