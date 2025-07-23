import React from 'react';

import logoSvg from '../../assets/img/sds_manager_logo.svg';
import logoCollapsedSvg from '../../assets/img/sds_manager_logo_collapsed.svg';

import { useSideNavigation } from './SideNavigationContext';

export const Logo: React.FC = () => {
  const { isCollapsed } = useSideNavigation();

  return (
    <div className="flex">
      <img
        src={logoSvg}
        alt="SDS管理"
        className={`h-[22px] w-[93px] ${
          isCollapsed ? 'absolute opacity-0' : 'opacity-100'
        }`}
      />
      <img
        src={logoCollapsedSvg}
        alt="SDS管理"
        className={`h-[22px] w-[22px] ${
          isCollapsed ? 'opacity-100' : 'absolute opacity-0'
        }`}
      />
    </div>
  );
};
