import React from 'react';
import {
  IconArrowNarrowDown,
  IconArrowNarrowUp,
  IconArrowsSort,
} from '@tabler/icons-react';

import { cn } from '../../utils';
import { Progress } from '../Progress';

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  loading?: boolean;
  loadingText?: React.ReactNode;
}

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, children, ...props }, ref) => (
    <div className="border-surface-default bg-surface-primary relative border">
      <table
        ref={ref}
        className={cn('w-full caption-bottom', className)}
        {...props}
      >
        {children}
      </table>
    </div>
  )
);
Table.displayName = 'Table';

export interface TableHeaderProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {
  loading?: boolean;
}

const TableHeader = React.forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ className, loading = false, children, ...props }, ref) => (
    <thead
      ref={ref}
      className={cn(
        'text-sm bg-surface-tertiary h-10 top-0 leading-tight sticky',
        className
      )}
      {...props}
    >
      {children}
      {loading && (
        <tr>
          <td colSpan={100} className="p-0 h-0">
            <Progress
              indeterminate
              className="bg-surface-primary border-b-divider-default box-content
                border-b"
            />
          </td>
        </tr>
      )}
    </thead>
  )
);
TableHeader.displayName = 'TableHeader';

export interface TableBodyProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {
  loading?: boolean;
  loadingText?: React.ReactNode;
  colSpan?: number;
}

const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  (
    {
      className,
      loading = false,
      loadingText = 'ローディング中…',
      colSpan = 1,
      children,
      ...props
    },
    ref
  ) => (
    <tbody ref={ref} className={className} {...props}>
      {loading ? (
        <tr>
          <td
            colSpan={colSpan}
            className="py-sm min-h-12 px-[1.44rem] text-center align-middle"
          >
            {loadingText}
          </td>
        </tr>
      ) : (
        children
      )}
    </tbody>
  )
);
TableBody.displayName = 'TableBody';

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn('bg-surface-secondary font-medium border-t', className)}
    {...props}
  />
));
TableFooter.displayName = 'TableFooter';

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      `border-surface-default hover:bg-interactive-neutral-hover
      data-[state=selected]:bg-interactive-neutral-selected h-12 border-b
      transition-colors`,
      className
    )}
    {...props}
  />
));
TableRow.displayName = 'TableRow';

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, children, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      `text-body-secondary font-medium h-10 [&:has([role=checkbox])]:w-9
      [&:has([role=checkbox])]:pt-2 [&:has([role=checkbox])]:pb-2
      [&:has([role=checkbox])]:pl-3 [&:has([role=checkbox])]:pr-0 max-w-[400px]
      px-[1.44rem] text-left [&:has([role=checkbox])]:max-w-none`,
      className
    )}
    {...props}
  >
    <div className="gap-xxs flex items-center">{children}</div>
  </th>
));
TableHead.displayName = 'TableHead';

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      `py-sm [&:has([role=checkbox])]:pr-0 px-md text-md align-middle
      leading-none`,
      className
    )}
    {...props}
  />
));
TableCell.displayName = 'TableCell';

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn('text-body-primary mt-4 text-sm', className)}
    {...props}
  />
));
TableCaption.displayName = 'TableCaption';

type TableHeadSortButtonProps = {
  sortOrder: 'asc' | 'desc' | undefined;
  className?: string;
};

const TableHeadSortButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & TableHeadSortButtonProps
>(({ sortOrder, className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      `text-body-secondary bg-interactive-neutral-default
      border-interactive-default size-6 inline-flex cursor-pointer items-center
      justify-center border focus:outline-none`,
      className
    )}
    {...props}
  >
    <span className="sr-only">Sort</span>
    {sortOrder === 'asc' ? (
      <IconArrowNarrowUp className="h-4 w-4" />
    ) : sortOrder === 'desc' ? (
      <IconArrowNarrowDown className="h-4 w-4" />
    ) : (
      <IconArrowsSort className="h-4 w-4" />
    )}
  </button>
));

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  TableHeadSortButton,
};
