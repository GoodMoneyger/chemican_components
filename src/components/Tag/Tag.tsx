import React from 'react';
import { cva } from 'class-variance-authority';

import { ColorShapeTokens } from '../../tokens';
import { cn } from '../../utils';

// Mapping the color codes for user defined tag colors to our design tokens
// Reference: https://docs.google.com/spreadsheets/d/14r5PJTfzfESsKypY2cJlR65I2-DkO4RvODa04x_s1dA
const colorCodeToTokenMap = {
  0: ColorShapeTokens.AccentGraySoft,
  1: ColorShapeTokens.AccentSunSoft,
  2: ColorShapeTokens.AccentSunPale,
  3: ColorShapeTokens.AccentPurpleSoft,
  4: ColorShapeTokens.AccentPurpleSoft,
  5: ColorShapeTokens.AccentSeaSoft,
  6: ColorShapeTokens.AccentSeaSoft,
  7: ColorShapeTokens.AccentCyanSoft,
  8: ColorShapeTokens.AccentCyanSoft,
  9: ColorShapeTokens.AccentGreenSoft,
  10: ColorShapeTokens.AccentGreenSoft,
  11: ColorShapeTokens.AccentLimeSoft,
  12: ColorShapeTokens.AccentLimeSoft,
  13: ColorShapeTokens.AccentYellowSoft,
  14: ColorShapeTokens.AccentYellowSoft,
  15: ColorShapeTokens.AccentOrangeSoft,
  16: ColorShapeTokens.AccentOrangeSoft,
  17: ColorShapeTokens.AccentGraySoft,
  18: ColorShapeTokens.AccentGraySoft,
} as const;

export interface TagProps {
  className?: string;
  children?: React.ReactNode;
  onRemove?: () => void;
  onClick?: () => void;
  accentColor?: ColorShapeTokens;
  colorCode?: keyof typeof colorCodeToTokenMap;
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
  selected?: boolean;
}

const tagVariants = cva(
  `gap-xxs text-accent-gray-strong py-xxs px-xs h-5.5 inline-flex items-center
  rounded-full border border-transparent leading-none`,
  {
    variants: {
      size: {
        sm: 'text-sm',
        md: '',
      },
      selected: {
        false: '',
        true: 'border-interactive-selected',
      },
      interactive: {
        true: 'cursor-pointer select-none',
      },
    },
    defaultVariants: {
      size: 'md',
      selected: false,
    },
  }
);

export const Tag: React.FC<TagProps> = ({
  accentColor = ColorShapeTokens.AccentGrayPale,
  colorCode,
  children,
  className,
  onRemove,
  onClick,
  size = 'md',
  style,
  selected = false,
}) => {
  // Warning when both props are provided
  React.useEffect(() => {
    if (colorCode && accentColor !== ColorShapeTokens.AccentGrayPale) {
      console.warn(
        'Tag component: Both colorCode and accentColor props are provided. colorCode takes precedence over accentColor.'
      );
    }
  }, [colorCode, accentColor]);

  // colorCode takes precedence over accentColor
  const effectiveColor =
    typeof colorCode === 'number'
      ? colorCodeToTokenMap[colorCode]
      : accentColor;

  return (
    <div
      className={cn(
        tagVariants({ size, selected, interactive: Boolean(onClick) }),
        className
      )}
      style={{
        backgroundColor: `var(${effectiveColor})`,
        ...style,
      }}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
    >
      <div className="truncate">{children}</div>
      {Boolean(onRemove) && (
        <button
          className={cn(
            `bg-interactive-neutral-default h-3 w-3 flex cursor-pointer
            items-center justify-center rounded-full leading-none`
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
