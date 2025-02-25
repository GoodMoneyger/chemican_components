import React from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

export interface ChipProps {
  className?: string;
  children?: React.ReactNode;
}

export const Chip: React.FC<ChipProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        classNames(
          'inline-flex items-center rounded-full bg-status-neutral px-xs py-xxxs font-medium text-body-inverse',
          className
        )
      )}
    >
      {children}
    </div>
  );
};
