import { default as React } from '../../../node_modules/react';
import { ColorShapeTokens, ColorBackgroundTokens } from '../../tokens';
export interface StatusProps {
    className?: string;
    children?: React.ReactNode;
    accentColor?: ColorShapeTokens | ColorBackgroundTokens;
    size?: 'sm' | 'md';
    onRemove?: () => void;
    indicator?: 'valid' | 'invalid';
}
export declare const Status: React.FC<StatusProps>;
