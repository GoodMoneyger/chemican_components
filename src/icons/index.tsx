import type { SVGProps } from 'react';

// Import SVG components
import AdministratorSvg from '../assets/icons/administrator.svg?react';
import MyFilterSvg from '../assets/icons/my_filter.svg?react';
import ResizeSvg from '../assets/icons/resize.svg?react';
import UserListSvg from '../assets/icons/user_list.svg?react';

// Icon props interface matching Tabler icons
interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'ref'> {
  size?: string | number;
  color?: string;
}

// Wrapper function to create icon components with proper size handling
const createIconComponent = (
  SvgComponent: React.ComponentType<SVGProps<SVGSVGElement>>
) => {
  const IconComponent = ({
    size = 24,
    color = 'currentColor',
    style,
    ...props
  }: IconProps) => {
    return (
      <SvgComponent
        width={size}
        height={size}
        style={{ color, ...style }}
        {...props}
      />
    );
  };
  return IconComponent;
};

// Custom icons from assets/icons/
// Note: Only SVGs in assets/icons/ should be exported here as icons
// Order alphabetically, alway with `Icon{MyIcon}Custom`
export const IconAdministratorCustom = createIconComponent(AdministratorSvg);
export const IconMyFilterCustom = createIconComponent(MyFilterSvg);
export const IconResizeCustom = createIconComponent(ResizeSvg);
export const IconUserListCustom = createIconComponent(UserListSvg);
