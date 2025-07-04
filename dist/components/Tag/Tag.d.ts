import { default as React } from 'react';
import { ColorShapeTokens } from '../../tokens';
export interface TagProps {
    className?: string;
    children?: React.ReactNode;
    onRemove?: () => void;
    accentColor: ColorShapeTokens;
}
export declare const Tag: React.FC<TagProps>;
