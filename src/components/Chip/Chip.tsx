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
          `bg-status-neutral px-xs py-xxs text-accent-gray-soft inline-flex
          items-center rounded-full font-medium`,
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
