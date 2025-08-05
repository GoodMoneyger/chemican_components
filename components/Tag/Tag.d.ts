import { default as React } from '../../../node_modules/react';
import { ColorShapeTokens } from '../../tokens';
export interface TagProps {
    className?: string;
    children?: React.ReactNode;
    onRemove?: () => void;
    accentColor: ColorShapeTokens;
    size?: 'sm' | 'md';
}
export declare const Tag: React.FC<TagProps>;
