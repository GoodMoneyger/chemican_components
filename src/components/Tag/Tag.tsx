import React from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

export interface TagProps {
  className?: string;
  children?: React.ReactNode;
  onRemove?: () => void;
}

export const Tag: React.FC<TagProps> = ({ children, className, onRemove }) => {
  return (
    <div
      className={twMerge(
        classNames(
          'text-black my-1 inline-flex items-center gap-xxs rounded-full bg-status-neutral px-xs py-xs text-size-sm text-accent-gray-strong',
          className
        )
      )}
    >
      {children}
      {Boolean(onRemove) && (
        <button
          className={twMerge(
            'flex h-3 w-3 items-center justify-center rounded-full bg-interactive-secondary-default'
          )}
          onClick={onRemove}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-2 w-2 text-shape-tertiary"
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
