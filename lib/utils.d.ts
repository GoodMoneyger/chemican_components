import { default as React } from '../../node_modules/react';
import { TablerIcon } from '../../@tabler/icons-react/dist/esm/icons/index.mjs';
export declare const cn: (...inputs: (string | undefined | null)[]) => string;
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
