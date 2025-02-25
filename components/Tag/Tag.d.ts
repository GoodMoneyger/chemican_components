import { default as React } from '../../../node_modules/react';
export interface TagProps {
    className?: string;
    children?: React.ReactNode;
    onRemove?: () => void;
}
export declare const Tag: React.FC<TagProps>;
