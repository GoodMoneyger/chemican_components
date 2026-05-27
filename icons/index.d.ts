import { SVGProps } from '../../node_modules/react';
interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'ref'> {
    size?: string | number;
    color?: string;
}
export declare const IconAdministratorCustom: ({ size, color, style, ...props }: IconProps) => import("react/jsx-runtime").JSX.Element;
export declare const IconMyFilterCustom: ({ size, color, style, ...props }: IconProps) => import("react/jsx-runtime").JSX.Element;
export declare const IconResizeCustom: ({ size, color, style, ...props }: IconProps) => import("react/jsx-runtime").JSX.Element;
export declare const IconUserListCustom: ({ size, color, style, ...props }: IconProps) => import("react/jsx-runtime").JSX.Element;
export {};
