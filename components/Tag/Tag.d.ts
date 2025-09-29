import { default as React } from '../../../node_modules/react';
import { ColorShapeTokens } from '../../tokens';
declare const colorCodeToTokenMap: {
    readonly 0: ColorShapeTokens.AccentGreenPale;
    readonly 1: ColorShapeTokens.AccentRedSoft;
    readonly 2: ColorShapeTokens.AccentRedSoft;
    readonly 3: ColorShapeTokens.AccentPurpleSoft;
    readonly 4: ColorShapeTokens.AccentPurpleSoft;
    readonly 5: ColorShapeTokens.AccentBlueSoft;
    readonly 6: ColorShapeTokens.AccentBlueSoft;
    readonly 7: ColorShapeTokens.AccentCyanSoft;
    readonly 8: ColorShapeTokens.AccentCyanSoft;
    readonly 9: ColorShapeTokens.AccentGreenSoft;
    readonly 10: ColorShapeTokens.AccentGreenSoft;
    readonly 11: ColorShapeTokens.AccentLimeSoft;
    readonly 12: ColorShapeTokens.AccentLimeSoft;
    readonly 13: ColorShapeTokens.AccentYellowSoft;
    readonly 14: ColorShapeTokens.AccentYellowSoft;
    readonly 15: ColorShapeTokens.AccentOrangeSoft;
    readonly 16: ColorShapeTokens.AccentOrangeSoft;
    readonly 17: ColorShapeTokens.AccentGraySoft;
    readonly 18: ColorShapeTokens.AccentGraySoft;
};
export interface TagProps {
    className?: string;
    children?: React.ReactNode;
    onRemove?: () => void;
    accentColor?: ColorShapeTokens;
    colorCode?: keyof typeof colorCodeToTokenMap;
    size?: 'sm' | 'md';
}
export declare const Tag: React.FC<TagProps>;
export {};
