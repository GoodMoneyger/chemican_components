import { default as React } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
declare const paginationVariants: (props?: ({
    size?: "sm" | "default" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export interface PaginationProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>, VariantProps<typeof paginationVariants> {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    onPageChange: (page: number) => void;
    rowsPerPage: number;
    rowsPerPageOptions?: number[];
    onRowsPerPageChange: (rowsPerPage: number) => void;
    rowsPerPageLabel?: React.ReactNode;
    pageSelectLabel?: React.ReactNode;
    formatPageOption?: (page: number, totalPages: number, totalItems: number) => React.ReactNode;
    formatPageValue?: (page: number, totalPages: number, totalItems: number) => React.ReactNode;
    showNavigation?: boolean;
    showRowsPerPage?: boolean;
    hideRowsPerPageOnMobile?: boolean;
    previousPageLabel?: string;
    nextPageLabel?: string;
}
export declare const Pagination: React.ForwardRefExoticComponent<PaginationProps & React.RefAttributes<HTMLDivElement>>;
export {};
