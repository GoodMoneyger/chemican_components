import { default as React } from '../../../node_modules/react';
import { ColorShapeTokens, ColorBackgroundTokens } from '../../tokens';
export interface ChipProps {
    className?: string;
    children?: React.ReactNode;
    accentColor: ColorShapeTokens | ColorBackgroundTokens;
}
export declare const Chip: React.FC<ChipProps>;
