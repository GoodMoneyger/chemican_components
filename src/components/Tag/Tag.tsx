import React from 'react';
import { cva } from 'class-variance-authority';

import { ColorShapeTokens, ColorTextTokens } from '../../tokens';
import { cn } from '../../utils';

// Mapping the color codes for user defined tag colors to our design tokens
// Reference: https://docs.google.com/spreadsheets/d/14r5PJTfzfESsKypY2cJlR65I2-DkO4RvODa04x_s1dA
export const colorCodeToMap = [
  {
    backgroundColor: ColorShapeTokens.AccentSunSoft,
    textColor: ColorTextTokens.AccentSunStrong,
    code: 19,
  },
  {
    backgroundColor: ColorShapeTokens.AccentSunPale,
    textColor: ColorTextTokens.AccentSunStrong,
    code: 1,
  },
  {
    backgroundColor: ColorShapeTokens.AccentWoodSoft,
    textColor: ColorTextTokens.AccentWoodStrong,
    code: 34,
  },
  {
    backgroundColor: ColorShapeTokens.AccentWoodPale,
    textColor: ColorTextTokens.AccentWoodStrong,
    code: 16,
  },
  {
    backgroundColor: ColorShapeTokens.AccentOrangeSoft,
    textColor: ColorTextTokens.AccentOrangeStrong,
    code: 33,
  },
  {
    backgroundColor: ColorShapeTokens.AccentOrangePale,
    textColor: ColorTextTokens.AccentOrangeStrong,
    code: 15,
  },
  {
    backgroundColor: ColorShapeTokens.AccentYellowSoft,
    textColor: ColorTextTokens.AccentYellowStrong,
    code: 32,
  },
  {
    backgroundColor: ColorShapeTokens.AccentYellowPale,
    textColor: ColorTextTokens.AccentYellowStrong,
    code: 14,
  },
  {
    backgroundColor: ColorShapeTokens.AccentLemonSoft,
    textColor: ColorTextTokens.AccentLemonStrong,
    code: 31,
  },
  {
    backgroundColor: ColorShapeTokens.AccentLemonPale,
    textColor: ColorTextTokens.AccentLemonStrong,
    code: 13,
  },
  {
    backgroundColor: ColorShapeTokens.AccentGrassSoft,
    textColor: ColorTextTokens.AccentGrassStrong,
    code: 30,
  },
  {
    backgroundColor: ColorShapeTokens.AccentGrassPale,
    textColor: ColorTextTokens.AccentGrassStrong,
    code: 12,
  },
  {
    backgroundColor: ColorShapeTokens.AccentLimeSoft,
    textColor: ColorTextTokens.AccentLimeStrong,
    code: 29,
  },
  {
    backgroundColor: ColorShapeTokens.AccentLimePale,
    textColor: ColorTextTokens.AccentLimeStrong,
    code: 11,
  },
  {
    backgroundColor: ColorShapeTokens.AccentGreenSoft,
    textColor: ColorTextTokens.AccentGreenStrong,
    code: 27,
  },
  {
    backgroundColor: ColorShapeTokens.AccentGreenPale,
    textColor: ColorTextTokens.AccentGreenStrong,
    code: 9,
  },
  {
    backgroundColor: ColorShapeTokens.AccentPeacockSoft,
    textColor: ColorTextTokens.AccentPeacockStrong,
    code: 26,
  },
  {
    backgroundColor: ColorShapeTokens.AccentPeacockPale,
    textColor: ColorTextTokens.AccentPeacockStrong,
    code: 8,
  },
  {
    backgroundColor: ColorShapeTokens.AccentCyanSoft,
    textColor: ColorTextTokens.AccentCyanStrong,
    code: 25,
  },
  {
    backgroundColor: ColorShapeTokens.AccentCyanPale,
    textColor: ColorTextTokens.AccentCyanStrong,
    code: 7,
  },
  {
    backgroundColor: ColorShapeTokens.AccentSkySoft,
    textColor: ColorTextTokens.AccentSkyStrong,
    code: 24,
  },
  {
    backgroundColor: ColorShapeTokens.AccentSkyPale,
    textColor: ColorTextTokens.AccentSkyStrong,
    code: 6,
  },
  {
    backgroundColor: ColorShapeTokens.AccentSeaSoft,
    textColor: ColorTextTokens.AccentSeaStrong,
    code: 23,
  },
  {
    backgroundColor: ColorShapeTokens.AccentSeaPale,
    textColor: ColorTextTokens.AccentSeaStrong,
    code: 5,
  },
  {
    backgroundColor: ColorShapeTokens.AccentVioletSoft,
    textColor: ColorTextTokens.AccentVioletStrong,
    code: 22,
  },
  {
    backgroundColor: ColorShapeTokens.AccentVioletPale,
    textColor: ColorTextTokens.AccentVioletStrong,
    code: 4,
  },
  {
    backgroundColor: ColorShapeTokens.AccentPurpleSoft,
    textColor: ColorTextTokens.AccentPurpleStrong,
    code: 21,
  },
  {
    backgroundColor: ColorShapeTokens.AccentPurplePale,
    textColor: ColorTextTokens.AccentPurpleStrong,
    code: 3,
  },
  {
    backgroundColor: ColorShapeTokens.AccentMagentaSoft,
    textColor: ColorTextTokens.AccentMagentaStrong,
    code: 20,
  },
  {
    backgroundColor: ColorShapeTokens.AccentMagentaPale,
    textColor: ColorTextTokens.AccentMagentaStrong,
    code: 2,
  },
  {
    backgroundColor: ColorShapeTokens.AccentCharcoalSoft,
    textColor: ColorTextTokens.AccentCharchoalStrong,
    code: 35,
  },
  {
    backgroundColor: ColorShapeTokens.AccentCharcoalPale,
    textColor: ColorTextTokens.AccentCharchoalStrong,
    code: 17,
  },
  {
    backgroundColor: ColorShapeTokens.AccentGraySoft,
    textColor: ColorTextTokens.AccentGrayStrong,
    code: 36,
  },
  {
    backgroundColor: ColorShapeTokens.AccentGrayPale,
    textColor: ColorTextTokens.AccentGrayStrong,
    code: 18,
  },

  // LegacyColor and fallback to default gray (0)
  {
    backgroundColor: ColorShapeTokens.AccentGrayPale,
    textColor: ColorTextTokens.AccentGrayStrong,
    code: 0,
  },
  {
    backgroundColor: ColorShapeTokens.AccentBambooPale,
    textColor: ColorTextTokens.AccentBambooStrong,
    code: 10,
  },
] as const;

export type TagColorCode = (typeof colorCodeToMap)[number]['code'];

export interface TagProps {
  className?: string;
  children?: React.ReactNode;
  onRemove?: () => void;
  onClick?: () => void;
  colorCode?: TagColorCode;
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
  colorCode = 0,
  children,
  className,
  onRemove,
  onClick,
  size = 'md',
  style,
  selected = false,
}) => {
  const colorMapping = colorCodeToMap.find(
    (colorMap) => colorMap.code === colorCode
  );

  return (
    <div
      className={cn(
        tagVariants({ size, selected, interactive: Boolean(onClick) }),
        className
      )}
      style={{
        backgroundColor: `var(${colorMapping?.backgroundColor})`,
        color: `var(${colorMapping?.textColor})`,
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
