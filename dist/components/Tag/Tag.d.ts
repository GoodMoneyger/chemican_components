import { default as React } from 'react';
import { ColorShapeTokens, ColorTextTokens } from '../../tokens';
declare const colorCodeToTokenMap: {
    readonly 0: readonly [ColorShapeTokens.AccentGrayPale, ColorTextTokens.AccentGrayStrong];
    readonly 1: readonly [ColorShapeTokens.AccentSunPale, ColorTextTokens.AccentSunStrong];
    readonly 2: readonly [ColorShapeTokens.AccentMagentaPale, ColorTextTokens.AccentMagentaStrong];
    readonly 3: readonly [ColorShapeTokens.AccentPurplePale, ColorTextTokens.AccentPurpleStrong];
    readonly 4: readonly [ColorShapeTokens.AccentVioletPale, ColorTextTokens.AccentVioletStrong];
    readonly 5: readonly [ColorShapeTokens.AccentSeaPale, ColorTextTokens.AccentSeaStrong];
    readonly 6: readonly [ColorShapeTokens.AccentSkyPale, ColorTextTokens.AccentSkyStrong];
    readonly 7: readonly [ColorShapeTokens.AccentCyanPale, ColorTextTokens.AccentCyanStrong];
    readonly 8: readonly [ColorShapeTokens.AccentPeacockPale, ColorTextTokens.AccentPeacockStrong];
    readonly 9: readonly [ColorShapeTokens.AccentGreenPale, ColorTextTokens.AccentGreenStrong];
    readonly 10: readonly [ColorShapeTokens.AccentBambooPale, ColorTextTokens.AccentBambooStrong];
    readonly 11: readonly [ColorShapeTokens.AccentLimePale, ColorTextTokens.AccentLimeStrong];
    readonly 12: readonly [ColorShapeTokens.AccentGrassPale, ColorTextTokens.AccentGrassStrong];
    readonly 13: readonly [ColorShapeTokens.AccentLemonPale, ColorTextTokens.AccentLemonStrong];
    readonly 14: readonly [ColorShapeTokens.AccentYellowPale, ColorTextTokens.AccentYellowStrong];
    readonly 15: readonly [ColorShapeTokens.AccentOrangePale, ColorTextTokens.AccentOrangeStrong];
    readonly 16: readonly [ColorShapeTokens.AccentWoodPale, ColorTextTokens.AccentWoodStrong];
    readonly 17: readonly [ColorShapeTokens.AccentCharcoalPale, ColorTextTokens.AccentCharchoalStrong];
    readonly 18: readonly [ColorShapeTokens.AccentGrayPale, ColorTextTokens.AccentGrayStrong];
};
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
export declare const Tag: React.FC<TagProps>;
export {};
