import React from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

import { ColorShapeTokens } from '../../tokens';

export interface TagProps {
  className?: string;
  children?: React.ReactNode;
  onRemove?: () => void;
  accentColor: ColorShapeTokens;
}

export const Tag: React.FC<TagProps> = ({
  accentColor,
  children,
  className,
  onRemove,
}) => {
  return (
    <div
      className={twMerge(
        classNames(
          `gap-xxs p-xs text-accent-gray-strong my-1 inline-flex items-center
          rounded-full text-sm`,
          className
        )
      )}
      style={{
        backgroundColor: `var(${accentColor})`,
      }}
    >
      {children}
      {Boolean(onRemove) && (
        <button
          className={twMerge(
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
