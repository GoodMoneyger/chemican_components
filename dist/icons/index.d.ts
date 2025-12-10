import { SVGProps } from 'react';
interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'ref'> {
    size?: string | number;
    color?: string;
}
export declare const IconAdministratorCustom: ({ size, color, style, ...props }: IconProps) => import("react/jsx-runtime").JSX.Element;
export declare const IconMyFilterCustom: ({ size, color, style, ...props }: IconProps) => import("react/jsx-runtime").JSX.Element;
export declare const IconUserListCustom: ({ size, color, style, ...props }: IconProps) => import("react/jsx-runtime").JSX.Element;
export {};
