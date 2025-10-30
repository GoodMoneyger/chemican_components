import React from 'react';
import { cva } from 'class-variance-authority';

import { ColorShapeTokens, ColorTextTokens } from '../../tokens';
import { cn } from '../../utils';

// Mapping the color codes for user defined tag colors to our design tokens
// Reference: https://docs.google.com/spreadsheets/d/14r5PJTfzfESsKypY2cJlR65I2-DkO4RvODa04x_s1dA
// [backgroundColor, textColor]
const colorCodeToTokenMap = {
  0: [ColorShapeTokens.AccentGrayPale, ColorTextTokens.AccentGrayStrong],
  1: [ColorShapeTokens.AccentSunPale, ColorTextTokens.AccentSunStrong],
  2: [ColorShapeTokens.AccentMagentaPale, ColorTextTokens.AccentMagentaStrong],
  3: [ColorShapeTokens.AccentPurplePale, ColorTextTokens.AccentPurpleStrong],
  4: [ColorShapeTokens.AccentVioletPale, ColorTextTokens.AccentVioletStrong],
  5: [ColorShapeTokens.AccentSeaPale, ColorTextTokens.AccentSeaStrong],
  6: [ColorShapeTokens.AccentSkyPale, ColorTextTokens.AccentSkyStrong],
  7: [ColorShapeTokens.AccentCyanPale, ColorTextTokens.AccentCyanStrong],
  8: [ColorShapeTokens.AccentPeacockPale, ColorTextTokens.AccentPeacockStrong],
  9: [ColorShapeTokens.AccentGreenPale, ColorTextTokens.AccentGreenStrong],
  10: [ColorShapeTokens.AccentBambooPale, ColorTextTokens.AccentBambooStrong],
  11: [ColorShapeTokens.AccentLimePale, ColorTextTokens.AccentLimeStrong],
  12: [ColorShapeTokens.AccentGrassPale, ColorTextTokens.AccentGrassStrong],
  13: [ColorShapeTokens.AccentLemonPale, ColorTextTokens.AccentLemonStrong],
  14: [ColorShapeTokens.AccentYellowPale, ColorTextTokens.AccentYellowStrong],
  15: [ColorShapeTokens.AccentOrangePale, ColorTextTokens.AccentOrangeStrong],
  16: [ColorShapeTokens.AccentWoodPale, ColorTextTokens.AccentWoodStrong],
  17: [
    ColorShapeTokens.AccentCharcoalPale,
    ColorTextTokens.AccentCharchoalStrong,
  ],
  18: [ColorShapeTokens.AccentGrayPale, ColorTextTokens.AccentGrayStrong],
} as const;

export interface TagProps {
  className?: string;
  children?: React.ReactNode;
  onRemove?: () => void;
  onClick?: () => void;
  colorCode?: keyof typeof colorCodeToTokenMap;
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
  selected?: boolean;
}

const tagVariants = cva(
  `gap-xxs py-xxs px-xs h-5.5 bg-shape-accent-gray-pale text-accent-gray-strong
  inline-flex items-center rounded-full border border-transparent leading-none`,
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
  colorCode,
  children,
  className,
  onRemove,
  onClick,
  size = 'md',
  style,
  selected = false,
}) => {
  const [effectiveColor, effectiveTextColor] =
    typeof colorCode === 'number'
      ? colorCodeToTokenMap[colorCode]
      : [undefined, undefined];

  return (
    <div
      className={cn(
        tagVariants({ size, selected, interactive: Boolean(onClick) }),
        className
      )}
      style={{
        backgroundColor: `var(${effectiveColor})`,
        color: effectiveTextColor ? `var(${effectiveTextColor})` : undefined,
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
