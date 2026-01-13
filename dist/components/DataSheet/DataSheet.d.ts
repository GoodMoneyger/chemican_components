import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';
import { ButtonProps } from '../Button/Button';
export type DataSheetProps = React.HTMLAttributes<HTMLDivElement>;
declare const dataSheetHeaderVariants: (props?: ({
    variant?: "table" | "primary" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export interface DataSheetHeaderProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof dataSheetHeaderVariants> {
    onEdit?: () => void;
    onRemove?: () => void;
}
declare const DataSheetHeader: React.ForwardRefExoticComponent<DataSheetHeaderProps & React.RefAttributes<HTMLElement>>;
export type DataSheetSectionProps = React.HTMLAttributes<HTMLElement>;
declare const DataSheetSection: React.ForwardRefExoticComponent<DataSheetSectionProps & React.RefAttributes<HTMLElement>>;
declare const dataSheetKeyValueVariants: (props?: ({
    orientation?: "horizontal" | "vertical" | null | undefined;
    spacing?: "default" | "compact" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export interface DataSheetKeyValueProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof dataSheetKeyValueVariants> {
    label: React.ReactNode;
}
declare const DataSheetKeyValue: React.ForwardRefExoticComponent<DataSheetKeyValueProps & React.RefAttributes<HTMLDivElement>>;
export interface DataSheetTableProps extends React.HTMLAttributes<HTMLDivElement> {
    onEditRow?: (itemId: string) => void;
    onRemoveRow?: (itemId: string) => void;
    actionsColumnParts?: number;
}
declare const DataSheetTable: React.ForwardRefExoticComponent<DataSheetTableProps & React.RefAttributes<HTMLDivElement>>;
export type DataSheetTableHeaderProps = React.HTMLAttributes<HTMLTableSectionElement>;
declare const DataSheetTableHeader: React.ForwardRefExoticComponent<DataSheetTableHeaderProps & React.RefAttributes<HTMLTableSectionElement>>;
export type DataSheetTableBodyProps = React.HTMLAttributes<HTMLTableSectionElement>;
declare const DataSheetTableBody: React.ForwardRefExoticComponent<DataSheetTableBodyProps & React.RefAttributes<HTMLTableSectionElement>>;
export interface DataSheetTableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
    header?: boolean;
    itemId?: string;
}
declare const DataSheetTableRow: React.ForwardRefExoticComponent<DataSheetTableRowProps & React.RefAttributes<HTMLTableRowElement>>;
export interface DataSheetTableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
    header?: boolean;
    parts?: number;
}
declare const DataSheetTableCell: React.ForwardRefExoticComponent<DataSheetTableCellProps & React.RefAttributes<HTMLTableCellElement>>;
export interface DataSheetTableActionsCellProps extends Omit<DataSheetTableCellProps, 'parts'> {
    itemId?: string;
}
declare const DataSheetTableActionsCell: React.ForwardRefExoticComponent<DataSheetTableActionsCellProps & React.RefAttributes<HTMLTableCellElement>>;
export type DataSheetActionProps = ButtonProps;
declare const DataSheetAction: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
declare const DataSheetNamespace: React.ForwardRefExoticComponent<DataSheetProps & React.RefAttributes<HTMLDivElement>> & {
    Header: React.ForwardRefExoticComponent<DataSheetHeaderProps & React.RefAttributes<HTMLElement>>;
    Section: React.ForwardRefExoticComponent<DataSheetSectionProps & React.RefAttributes<HTMLElement>>;
    KeyValue: React.ForwardRefExoticComponent<DataSheetKeyValueProps & React.RefAttributes<HTMLDivElement>>;
    Table: React.ForwardRefExoticComponent<DataSheetTableProps & React.RefAttributes<HTMLDivElement>>;
    TableHeader: React.ForwardRefExoticComponent<DataSheetTableHeaderProps & React.RefAttributes<HTMLTableSectionElement>>;
    TableBody: React.ForwardRefExoticComponent<DataSheetTableBodyProps & React.RefAttributes<HTMLTableSectionElement>>;
    TableRow: React.ForwardRefExoticComponent<DataSheetTableRowProps & React.RefAttributes<HTMLTableRowElement>>;
    TableCell: React.ForwardRefExoticComponent<DataSheetTableCellProps & React.RefAttributes<HTMLTableCellElement>>;
    TableActionsCell: React.ForwardRefExoticComponent<DataSheetTableActionsCellProps & React.RefAttributes<HTMLTableCellElement>>;
    Action: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
};
export { DataSheetNamespace as DataSheet, DataSheetHeader, DataSheetSection, DataSheetKeyValue, DataSheetTable, DataSheetTableHeader, DataSheetTableBody, DataSheetTableRow, DataSheetTableCell, DataSheetTableActionsCell, DataSheetAction, };
