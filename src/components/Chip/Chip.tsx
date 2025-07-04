import React from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

import { ColorShapeTokens, ColorBackgroundTokens } from '../../tokens';

export interface ChipProps {
  className?: string;
  children?: React.ReactNode;
  accentColor: ColorShapeTokens | ColorBackgroundTokens;
}

export const Chip: React.FC<ChipProps> = ({
  children,
  className,
  accentColor,
}) => {
  return (
    <div
      className={twMerge(
        classNames(
          `inline-flex items-center rounded-full bg-status-neutral px-xs py-xxs
          font-medium text-accent-gray-soft`,
          className
        )
      )}
      style={{
        backgroundColor: `var(${accentColor})`,
      }}
    >
      {children}
    </div>
  );
};
