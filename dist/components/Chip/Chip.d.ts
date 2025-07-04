import { default as React } from 'react';
import { ColorShapeTokens, ColorBackgroundTokens } from '../../tokens';
export interface ChipProps {
    className?: string;
    children?: React.ReactNode;
    accentColor: ColorShapeTokens | ColorBackgroundTokens;
}
export declare const Chip: React.FC<ChipProps>;
