import React from 'react';
import { Slot } from 'radix-ui';
import { cva } from 'class-variance-authority';

import { ColorShapeTokens, ColorTextTokens } from '../../tokens';
import { cn, renderIcon } from '../../utils';
import type { IconProp } from '../../utils';

// Mapping the color codes for user defined tag colors to our design tokens
// Reference: https://docs.google.com/spreadsheets/d/14r5PJTfzfESsKypY2cJlR65I2-DkO4RvODa04x_s1dA
export const colorCodeToTokenMap = [
  {
    backgroundColor: ColorShapeTokens.AccentSunSoft,
    textColor: ColorTextTokens.AccentSunStrong,
    iconColor: ColorShapeTokens.AccentSunStrong,
    code: 19,
  },
  {
    backgroundColor: ColorShapeTokens.AccentSunPale,
    textColor: ColorTextTokens.AccentSunStrong,
    iconColor: ColorShapeTokens.AccentSunStrong,
    code: 1,
  },
  {
    backgroundColor: ColorShapeTokens.AccentWoodSoft,
    textColor: ColorTextTokens.AccentWoodStrong,
    iconColor: ColorShapeTokens.AccentWoodStrong,
    code: 34,
  },
  {
    backgroundColor: ColorShapeTokens.AccentWoodPale,
    textColor: ColorTextTokens.AccentWoodStrong,
    iconColor: ColorShapeTokens.AccentWoodStrong,
    code: 16,
  },
  {
    backgroundColor: ColorShapeTokens.AccentOrangeSoft,
    textColor: ColorTextTokens.AccentOrangeStrong,
    iconColor: ColorShapeTokens.AccentOrangeStrong,
    code: 33,
  },
  {
    backgroundColor: ColorShapeTokens.AccentOrangePale,
    textColor: ColorTextTokens.AccentOrangeStrong,
    iconColor: ColorShapeTokens.AccentOrangeStrong,
    code: 15,
  },
  {
    backgroundColor: ColorShapeTokens.AccentYellowSoft,
    textColor: ColorTextTokens.AccentYellowStrong,
    iconColor: ColorShapeTokens.AccentYellowStrong,
    code: 32,
  },
  {
    backgroundColor: ColorShapeTokens.AccentYellowPale,
    textColor: ColorTextTokens.AccentYellowStrong,
    iconColor: ColorShapeTokens.AccentYellowStrong,
    code: 14,
  },
  {
    backgroundColor: ColorShapeTokens.AccentLemonSoft,
    textColor: ColorTextTokens.AccentLemonStrong,
    iconColor: ColorShapeTokens.AccentLemonStrong,
    code: 31,
  },
  {
    backgroundColor: ColorShapeTokens.AccentLemonPale,
    textColor: ColorTextTokens.AccentLemonStrong,
    iconColor: ColorShapeTokens.AccentLemonStrong,
    code: 13,
  },
  {
    backgroundColor: ColorShapeTokens.AccentGrassSoft,
    textColor: ColorTextTokens.AccentGrassStrong,
    iconColor: ColorShapeTokens.AccentGrassStrong,
    code: 30,
  },
  {
    backgroundColor: ColorShapeTokens.AccentGrassPale,
    textColor: ColorTextTokens.AccentGrassStrong,
    iconColor: ColorShapeTokens.AccentGrassStrong,
    code: 12,
  },
  {
    backgroundColor: ColorShapeTokens.AccentLimeSoft,
    textColor: ColorTextTokens.AccentLimeStrong,
    iconColor: ColorShapeTokens.AccentLimeStrong,
    code: 29,
  },
  {
    backgroundColor: ColorShapeTokens.AccentLimePale,
    textColor: ColorTextTokens.AccentLimeStrong,
    iconColor: ColorShapeTokens.AccentLimeStrong,
    code: 11,
  },
  {
    backgroundColor: ColorShapeTokens.AccentGreenSoft,
    textColor: ColorTextTokens.AccentGreenStrong,
    iconColor: ColorShapeTokens.AccentGreenStrong,
    code: 27,
  },
  {
    backgroundColor: ColorShapeTokens.AccentGreenPale,
    textColor: ColorTextTokens.AccentGreenStrong,
    iconColor: ColorShapeTokens.AccentGreenStrong,
    code: 9,
  },
  {
    backgroundColor: ColorShapeTokens.AccentPeacockSoft,
    textColor: ColorTextTokens.AccentPeacockStrong,
    iconColor: ColorShapeTokens.AccentPeacockStrong,
    code: 26,
  },
  {
    backgroundColor: ColorShapeTokens.AccentPeacockPale,
    textColor: ColorTextTokens.AccentPeacockStrong,
    iconColor: ColorShapeTokens.AccentPeacockStrong,
    code: 8,
  },
  {
    backgroundColor: ColorShapeTokens.AccentCyanSoft,
    textColor: ColorTextTokens.AccentCyanStrong,
    iconColor: ColorShapeTokens.AccentCyanStrong,
    code: 25,
  },
  {
    backgroundColor: ColorShapeTokens.AccentCyanPale,
    textColor: ColorTextTokens.AccentCyanStrong,
    iconColor: ColorShapeTokens.AccentCyanStrong,
    code: 7,
  },
  {
    backgroundColor: ColorShapeTokens.AccentSkySoft,
    textColor: ColorTextTokens.AccentSkyStrong,
    iconColor: ColorShapeTokens.AccentSkyStrong,
    code: 24,
  },
  {
    backgroundColor: ColorShapeTokens.AccentSkyPale,
    textColor: ColorTextTokens.AccentSkyStrong,
    iconColor: ColorShapeTokens.AccentSkyStrong,
    code: 6,
  },
  {
    backgroundColor: ColorShapeTokens.AccentSeaSoft,
    textColor: ColorTextTokens.AccentSeaStrong,
    iconColor: ColorShapeTokens.AccentSeaStrong,
    code: 23,
  },
  {
    backgroundColor: ColorShapeTokens.AccentSeaPale,
    textColor: ColorTextTokens.AccentSeaStrong,
    iconColor: ColorShapeTokens.AccentSeaStrong,
    code: 5,
  },
  {
    backgroundColor: ColorShapeTokens.AccentVioletSoft,
    textColor: ColorTextTokens.AccentVioletStrong,
    iconColor: ColorShapeTokens.AccentVioletStrong,
    code: 22,
  },
  {
    backgroundColor: ColorShapeTokens.AccentVioletPale,
    textColor: ColorTextTokens.AccentVioletStrong,
    iconColor: ColorShapeTokens.AccentVioletStrong,
    code: 4,
  },
  {
    backgroundColor: ColorShapeTokens.AccentPurpleSoft,
    textColor: ColorTextTokens.AccentPurpleStrong,
    iconColor: ColorShapeTokens.AccentPurpleStrong,
    code: 21,
  },
  {
    backgroundColor: ColorShapeTokens.AccentPurplePale,
    textColor: ColorTextTokens.AccentPurpleStrong,
    iconColor: ColorShapeTokens.AccentPurpleStrong,
    code: 3,
  },
  {
    backgroundColor: ColorShapeTokens.AccentMagentaSoft,
    textColor: ColorTextTokens.AccentMagentaStrong,
    iconColor: ColorShapeTokens.AccentMagentaStrong,
    code: 20,
  },
  {
    backgroundColor: ColorShapeTokens.AccentMagentaPale,
    textColor: ColorTextTokens.AccentMagentaStrong,
    iconColor: ColorShapeTokens.AccentMagentaStrong,
    code: 2,
  },
  {
    backgroundColor: ColorShapeTokens.AccentCharcoalSoft,
    textColor: ColorTextTokens.AccentCharchoalStrong,
    iconColor: ColorShapeTokens.AccentCharcoalStrong,
    code: 35,
  },
  {
    backgroundColor: ColorShapeTokens.AccentCharcoalPale,
    textColor: ColorTextTokens.AccentCharchoalStrong,
    iconColor: ColorShapeTokens.AccentCharcoalStrong,
    code: 17,
  },
  {
    backgroundColor: ColorShapeTokens.AccentGraySoft,
    textColor: ColorTextTokens.AccentGrayStrong,
    iconColor: ColorShapeTokens.AccentGrayStrong,
    code: 36,
  },
  {
    backgroundColor: ColorShapeTokens.AccentGrayPale,
    textColor: ColorTextTokens.AccentGrayStrong,
    iconColor: ColorShapeTokens.AccentGrayStrong,
    code: 18,
  },

  // LegacyColor and fallback to default gray (0)
  {
    backgroundColor: ColorShapeTokens.AccentGrayPale,
    textColor: ColorTextTokens.AccentGrayStrong,
    iconColor: ColorShapeTokens.AccentGrayStrong,
    code: 0,
  },
  {
    backgroundColor: ColorShapeTokens.AccentBambooPale,
    textColor: ColorTextTokens.AccentBambooStrong,
    iconColor: ColorShapeTokens.AccentBambooStrong,
    code: 10,
  },
] as const;

export type TagColorCode = (typeof colorCodeToTokenMap)[number]['code'];

export interface TagProps {
  className?: string;
  children?: React.ReactNode;
  onRemove?: () => void;
  onClick?: () => void;
  colorCode?: TagColorCode;
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
  selected?: boolean;
  variant?: 'primary' | 'secondary';
  icon?: IconProp;
  disabled?: boolean;
  /**
   * Whether to render as a child element, e.g. a link (useful for Next.js Link).
   * The child element receives the tag styling; `icon` and `onRemove` render inside it.
   */
  asChild?: boolean;
}

const tagVariants = cva(
  `gap-xxs px-xs h-5.5 inline-flex max-w-full items-center rounded-full border
  border-transparent leading-none`,
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
      variant: {
        primary: '',
        secondary: 'bg-surface-disabled',
      },
      disabled: {
        true: 'text-body-disabled',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: 'secondary',
        disabled: true,
        className: 'bg-interactive-disabled',
      },
      {
        disabled: true,
        className: 'cursor-default',
      },
    ],
    defaultVariants: {
      size: 'md',
      selected: false,
      variant: 'primary',
      disabled: false,
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
  variant = 'primary',
  icon,
  disabled = false,
  asChild = false,
}) => {
  const colorMapping = colorCodeToTokenMap.find(
    (colorMap) => colorMap.code === colorCode
  );

  // Determine icon color based on variant
  // For secondary variant, icon uses shape color (distinct from text color)
  // For primary variant, icon inherits text color
  const getIconColor = () => {
    if (variant === 'secondary') {
      return `var(${colorMapping?.iconColor})`;
    }
    // Primary variant: icon uses same color as text
    return `var(${colorMapping?.textColor})`;
  };

  const tagClassName = cn(
    tagVariants({
      size,
      selected: disabled ? false : selected,
      interactive: Boolean(onClick) && !disabled,
      variant,
      disabled,
    }),
    className
  );

  const tagStyle: React.CSSProperties = {
    // Only apply accent background for primary variant
    // Secondary variant uses bg-surface-disabled from CVA (or bg-interactive-disabled when disabled)
    ...(variant === 'primary' && {
      backgroundColor: `var(${colorMapping?.backgroundColor})`,
    }),
    // Only apply inline color when not disabled (Tailwind class handles disabled state)
    ...(!disabled && { color: `var(${colorMapping?.textColor})` }),
    ...style,
  };

  const Comp = asChild ? Slot.Slot : 'div';

  return (
    <Comp
      className={tagClassName}
      style={tagStyle}
      onClick={disabled ? undefined : onClick}
      role={!asChild && onClick ? 'button' : undefined}
      aria-disabled={disabled || undefined}
    >
      {icon && (
        <span
          className={cn(
            'shrink-0',
            disabled && 'text-shape-interactive-disabled'
          )}
          style={disabled ? undefined : { color: getIconColor() }}
        >
          {renderIcon(icon, { size: 14 })}
        </span>
      )}
      {asChild ? (
        <Slot.Slottable>{children}</Slot.Slottable>
      ) : (
        <div className="pt-0.5 relative h-full truncate">{children}</div>
      )}
      {Boolean(onRemove) && !disabled && (
        <button
          className={cn(
            `bg-interactive-neutral-default h-3 w-3 flex shrink-0 cursor-pointer
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
    </Comp>
  );
};
