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
export type DataSheetItemType = string | number | object;
export interface DataSheetTableProps<TItem extends DataSheetItemType = string> extends React.HTMLAttributes<HTMLDivElement> {
    onEditRow?: (item: TItem) => void;
    onRemoveRow?: (item: TItem) => void;
    onRestoreRow?: (item: TItem) => void;
    actionsColumnParts?: number;
}
declare const DataSheetTable: <TItem extends DataSheetItemType = string>(props: DataSheetTableProps<TItem> & {
    ref?: React.ForwardedRef<HTMLDivElement>;
}) => React.ReactElement;
export type DataSheetTableHeaderProps = React.HTMLAttributes<HTMLTableSectionElement>;
declare const DataSheetTableHeader: React.ForwardRefExoticComponent<DataSheetTableHeaderProps & React.RefAttributes<HTMLTableSectionElement>>;
export type DataSheetTableBodyProps = React.HTMLAttributes<HTMLTableSectionElement>;
declare const DataSheetTableBody: React.ForwardRefExoticComponent<DataSheetTableBodyProps & React.RefAttributes<HTMLTableSectionElement>>;
export interface DataSheetTableRowProps<TItem extends DataSheetItemType = string> extends React.HTMLAttributes<HTMLTableRowElement> {
    header?: boolean;
    item?: TItem;
    isDeleted?: boolean;
}
declare const DataSheetTableRow: <TItem extends DataSheetItemType = string>(props: DataSheetTableRowProps<TItem> & {
    ref?: React.ForwardedRef<HTMLTableRowElement>;
}) => React.ReactElement;
export interface DataSheetTableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
    header?: boolean;
    parts?: number;
}
declare const DataSheetTableCell: React.ForwardRefExoticComponent<DataSheetTableCellProps & React.RefAttributes<HTMLTableCellElement>>;
export interface DataSheetTableActionsCellProps<TItem extends DataSheetItemType = string> extends Omit<DataSheetTableCellProps, 'parts'> {
    item?: TItem;
}
declare const DataSheetTableActionsCell: <TItem extends DataSheetItemType = string>(props: DataSheetTableActionsCellProps<TItem> & {
    ref?: React.ForwardedRef<HTMLTableCellElement>;
}) => React.ReactElement;
export type DataSheetActionProps = ButtonProps;
declare const DataSheetAction: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
declare const DataSheetNamespace: React.ForwardRefExoticComponent<DataSheetProps & React.RefAttributes<HTMLDivElement>> & {
    Header: React.ForwardRefExoticComponent<DataSheetHeaderProps & React.RefAttributes<HTMLElement>>;
    Section: React.ForwardRefExoticComponent<DataSheetSectionProps & React.RefAttributes<HTMLElement>>;
    KeyValue: React.ForwardRefExoticComponent<DataSheetKeyValueProps & React.RefAttributes<HTMLDivElement>>;
    Table: <TItem extends DataSheetItemType = string>(props: DataSheetTableProps<TItem> & {
        ref?: React.ForwardedRef<HTMLDivElement>;
    }) => React.ReactElement;
    TableHeader: React.ForwardRefExoticComponent<DataSheetTableHeaderProps & React.RefAttributes<HTMLTableSectionElement>>;
    TableBody: React.ForwardRefExoticComponent<DataSheetTableBodyProps & React.RefAttributes<HTMLTableSectionElement>>;
    TableRow: <TItem extends DataSheetItemType = string>(props: DataSheetTableRowProps<TItem> & {
        ref?: React.ForwardedRef<HTMLTableRowElement>;
    }) => React.ReactElement;
    TableCell: React.ForwardRefExoticComponent<DataSheetTableCellProps & React.RefAttributes<HTMLTableCellElement>>;
    TableActionsCell: <TItem extends DataSheetItemType = string>(props: DataSheetTableActionsCellProps<TItem> & {
        ref?: React.ForwardedRef<HTMLTableCellElement>;
    }) => React.ReactElement;
    Action: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
};
export { DataSheetNamespace as DataSheet, DataSheetHeader, DataSheetSection, DataSheetKeyValue, DataSheetTable, DataSheetTableHeader, DataSheetTableBody, DataSheetTableRow, DataSheetTableCell, DataSheetTableActionsCell, DataSheetAction, };
