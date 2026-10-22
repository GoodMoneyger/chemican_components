import { default as React } from 'react';
import { ClassArray } from 'clsx';
import { TablerIcon } from '../../@tabler/icons-react/dist/esm/icons/index.mjs';
export declare const cn: (...inputs: ClassArray) => string;
export type IconProp = React.ReactNode | TablerIcon;
export interface IconRenderOptions {
    size?: number;
    className?: string;
}
/**
 * Renders an icon that can be either a React node or a TablerIcon component.
 * If a TablerIcon component is passed, it will be rendered with the specified size.
 * If a React node is passed, it will be rendered as-is.
 */
export declare const renderIcon: (icon: IconProp | undefined, options?: IconRenderOptions) => React.ReactNode;
/** Default `getItemValue`: the value itself for strings and numbers, or its `id`. */
export declare const resolveValueKey: (value: unknown, owner: string) => string | number;
