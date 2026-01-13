interface AccountMenuProps {
    userName: string;
    loggedAsRole: string;
    logoutText: string;
    children?: React.ReactNode;
    className?: string;
}
export declare const AccountMenu: React.FC<AccountMenuProps>;
export {};
