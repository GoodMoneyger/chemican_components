import { IconChevronDown, IconUser } from '@tabler/icons-react';

import { Dropdown, DropdownContent, DropdownTrigger } from './../DropdownMenu';

interface AccountMenuProps {
  userName: string;
  loggedAsRole: string;
  logoutText: string;
  children?: React.ReactNode;
  className?: string;
}

export const AccountMenu: React.FC<AccountMenuProps> = ({
  userName,
  loggedAsRole,
  children,
  className = '',
}) => {
  return (
    <div className={className}>
      <Dropdown>
        <DropdownTrigger
          asChild
          className="rounded-sm bg-surface-tertiary cursor-pointer
            transition-shadow duration-150
            hover:shadow-[0_0_0_4px_var(--chemican-green-100)]
            data-[state=open]:shadow-[0_0_0_4px_var(--chemican-green-100)]"
        >
          <div className="group gap-0.5 h-6.5 py-0 px-2 flex items-center">
            <div className="gap-0.5 flex flex-1 items-center">
              <IconUser size={16} className="flex-[0_0_16px]" />
              <span className="text-sm text-body-primary">{userName}</span>
            </div>
            <IconChevronDown
              size={16}
              className="text-shape-light flex-[0_0_16px]
                group-data-[state=open]:rotate-180"
            />
          </div>
        </DropdownTrigger>

        <DropdownContent align="end" className="py-0 min-w-auto">
          <p
            aria-label="Account menu user role"
            className="h-6.75 px-3 py-0 text-sm font-medium leading-6.75
              text-body-success border-b-surface-default border-b text-center"
          >
            <span
              className="bg-shape-accent-lime-soft w-2 h-2 mr-1 inline-block
                rounded-[50%]"
            ></span>
            {loggedAsRole}
          </p>

          {children}
        </DropdownContent>
      </Dropdown>
    </div>
  );
};
