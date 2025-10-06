import { default as React } from '../../../node_modules/react';
interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
    loading?: boolean;
    loadingText?: React.ReactNode;
}
declare const Table: React.ForwardRefExoticComponent<TableProps & React.RefAttributes<HTMLTableElement>>;
interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    loading?: boolean;
}
declare const TableHeader: React.ForwardRefExoticComponent<TableHeaderProps & React.RefAttributes<HTMLTableSectionElement>>;
interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
    loading?: boolean;
    loadingText?: React.ReactNode;
    colSpan?: number;
}
declare const TableBody: React.ForwardRefExoticComponent<TableBodyProps & React.RefAttributes<HTMLTableSectionElement>>;
declare const TableFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>;
declare const TableRow: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableRowElement> & React.RefAttributes<HTMLTableRowElement>>;
declare const TableHead: React.ForwardRefExoticComponent<React.ThHTMLAttributes<HTMLTableCellElement> & React.RefAttributes<HTMLTableCellElement>>;
declare const TableCell: React.ForwardRefExoticComponent<React.TdHTMLAttributes<HTMLTableCellElement> & React.RefAttributes<HTMLTableCellElement>>;
declare const TableCaption: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableCaptionElement> & React.RefAttributes<HTMLTableCaptionElement>>;
type TableHeadSortButtonProps = {
    sortOrder: 'asc' | 'desc' | undefined;
    className?: string;
};
declare const TableHeadSortButton: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & TableHeadSortButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption, TableHeadSortButton, };
