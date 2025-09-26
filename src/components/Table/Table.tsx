import React from 'react';
import {
  IconArrowNarrowDown,
  IconArrowNarrowUp,
  IconArrowsSort,
} from '@tabler/icons-react';

import { cn } from '../../utils';

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div
    className="border-surface-default bg-surface-primary relative w-full border"
  >
    <table
      ref={ref}
      className={cn('w-full caption-bottom', className)}
      {...props}
    />
  </div>
));
Table.displayName = 'Table';

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn(
      'text-sm bg-surface-tertiary h-10 top-0 sticky [&_tr]:border-b',
      className
    )}
    {...props}
  />
));
TableHeader.displayName = 'TableHeader';

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn('[&_tr:last-child]:border-0', className)}
    {...props}
  />
));
TableBody.displayName = 'TableBody';

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      'bg-surface-secondary font-medium border-t [&>tr]:last:border-b-0',
      className
    )}
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
      data-[state=selected]:bg-interactive-neutral-selected border-b
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
      `text-body-secondary px-4 font-medium [&:has([role=checkbox])]:w-4
      [&:has([role=checkbox])]:pr-0 h-10 text-left`,
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
      'px-md py-sm [&:has([role=checkbox])]:pr-0 min-h-12 w-fit align-middle',
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
