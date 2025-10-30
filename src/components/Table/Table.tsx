import React from 'react';

import { cn } from '../../utils';
import { ProgressIndicator } from '../ProgressIndicator';

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  loading?: boolean;
  loadingText?: React.ReactNode;
}

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, children, ...props }, ref) => (
    <div
      className="border-surface-default bg-surface-primary relative w-max
        border"
    >
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
      className={cn('text-sm bg-surface-tertiary top-0 sticky', className)}
      {...props}
    >
      {children}
      {loading && (
        <tr>
          <td colSpan={100} className="p-0 h-0">
            <ProgressIndicator.Linear
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
      `border-surface-default [thead_&]:h-10 h-12
      [tbody_&]:hover:bg-interactive-neutral-hover transition-colors
      [:not(:last-child)]:border-b`,
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
      [&:has([role=checkbox])]:pt-xs [&:has([role=checkbox])]:pb-xs
      [&:has([role=checkbox])]:pl-xl [&:has([role=checkbox])]:pr-0 px-md
      max-w-[400px] text-left leading-[1.2] [&:has([role=checkbox])]:max-w-none`,
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
      `py-sm [&:has([role=checkbox])]:pl-xl [&:has([role=checkbox])]:pr-0 px-md
      text-md align-middle leading-[1.5]`,
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
    className={cn('text-body-primary mt-md text-sm', className)}
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
    <svg
      className="size-4"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_24993_1396)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.19542 2.66377C4.45577 2.40342 4.87788 2.40342 5.13823 2.66377L7.8049 5.33043C8.06525 5.59078 8.06525 6.01289 7.8049 6.27324C7.54455 6.53359 7.12244 6.53359 6.86209 6.27324L5.3335 4.74465V12.4685C5.3335 12.8367 5.03502 13.1352 4.66683 13.1352C4.29864 13.1352 4.00016 12.8367 4.00016 12.4685V4.74465L2.47157 6.27324C2.21122 6.53359 1.78911 6.53359 1.52876 6.27324C1.26841 6.01289 1.26841 5.59078 1.52876 5.33043L4.19542 2.66377Z"
          fill={
            sortOrder === 'asc'
              ? 'var(--color-shape-interactive-primary-default)'
              : sortOrder === undefined
                ? 'var(--color-shape-light)'
                : 'var(--color-shape-interactive-disabled)'
          }
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.3333 2.46851C11.7015 2.46851 12 2.76698 12 3.13517V10.859L13.5286 9.33043C13.7889 9.07009 14.2111 9.07009 14.4714 9.33043C14.7318 9.59078 14.7318 10.0129 14.4714 10.2732L11.8047 12.9399C11.5444 13.2003 11.1223 13.2003 10.8619 12.9399L8.19526 10.2732C7.93491 10.0129 7.93491 9.59078 8.19526 9.33043C8.45561 9.07009 8.87772 9.07009 9.13807 9.33043L10.6667 10.859V3.13517C10.6667 2.76698 10.9651 2.46851 11.3333 2.46851Z"
          fill={
            sortOrder === 'desc'
              ? 'var(--color-shape-interactive-primary-default)'
              : sortOrder === undefined
                ? 'var(--color-shape-light)'
                : 'var(--color-shape-interactive-disabled)'
          }
        />
      </g>
      <defs>
        <clipPath id="clip0_24993_1396">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
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
