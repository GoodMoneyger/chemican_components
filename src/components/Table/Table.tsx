import React from 'react';
import {
  IconArrowNarrowDown,
  IconArrowNarrowUp,
  IconArrowsSort,
} from '@tabler/icons-react';

import { cn } from '../../utils';
import { ProgressIndicator } from '../ProgressIndicator';
import { Checkbox, type CheckboxProps } from '../Checkbox';
import { Tag, type TagProps } from '../Tag';
import {
  StatusIndicator,
  type StatusIndicatorProps,
  type StatusLevel,
} from '../StatusIndicator';
import { Badge } from '../Badge';

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
        'text-sm bg-surface-tertiary h-10 top-0 sticky leading-[1.2]',
        className
      )}
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
      `border-surface-default [tbody_&]:hover:bg-interactive-neutral-hover h-12
      border-b transition-colors`,
      className
    )}
    {...props}
  />
));
TableRow.displayName = 'TableRow';

export interface TableHeadProps
  extends React.ThHTMLAttributes<HTMLTableCellElement> {
  /**
   * Render a Checkbox component in the header cell
   */
  checkbox?: CheckboxProps | boolean;
}

const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className, checkbox, children, ...props }, ref) => {
    let content;
    let headClassName = `text-body-secondary font-medium h-10 px-md text-left`;

    if (checkbox) {
      // Handle both boolean and CheckboxProps
      const checkboxProps = typeof checkbox === 'boolean' ? {} : checkbox;
      content = <Checkbox {...checkboxProps} />;
      headClassName = `text-body-secondary font-medium h-10 w-9 pt-xs pb-xs pl-5 pr-0 text-left`;
    } else {
      content = <div className="gap-xxs flex items-center">{children}</div>;
    }

    return (
      <th ref={ref} className={cn(headClassName, className)} {...props}>
        {content}
      </th>
    );
  }
);
TableHead.displayName = 'TableHead';

const tableCellVariants = 'py-sm px-md text-md leading-normal align-middle';

export interface IconComponentProps {
  size?: number | string;
  className?: string;
}

export interface TableCellProps
  extends React.TdHTMLAttributes<HTMLTableCellElement> {
  /**
   * Render a Checkbox component instead of children
   */
  checkbox?: CheckboxProps | boolean;

  /**
   * Render a Tag component wrapping children
   */
  tag?: TagProps | boolean;

  /**
   * Render a StatusIndicator component wrapping children
   */
  status?: StatusIndicatorProps | boolean | StatusLevel;

  /**
   * Left icon for default variant - displays before the content
   * Fixed size: 20px width and height
   */
  leftIcon?: React.ComponentType<IconComponentProps>;

  /**
   * Right icon for default variant - displays after the content
   * Fixed size: 20px width and height
   */
  rightIcon?: React.ComponentType<IconComponentProps>;

  /**
   * Click handler for the left icon
   */
  onLeftIconClick?: () => void;

  /**
   * Click handler for the right icon
   */
  onRightIconClick?: () => void;

  /**
   * Show prefix badge - when false, prefix badge is hidden
   * @default true
   */
  showPrefixBadge?: boolean;

  /**
   * Show trailing badge - when false, trailing badge is hidden
   * @default true
   */
  showTrailingBadge?: boolean;

  /**
   * Content for the prefix badge
   * @default "Badge"
   */
  prefixBadgeContent?: React.ReactNode;

  /**
   * Content for the trailing badge
   * @default "Badge"
   */
  trailingBadgeContent?: React.ReactNode;
}

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  (
    {
      className,
      checkbox,
      tag,
      status,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      onLeftIconClick,
      onRightIconClick,
      showPrefixBadge = false,
      showTrailingBadge = false,
      prefixBadgeContent = 'Badge',
      trailingBadgeContent = 'Badge',
      children,
      ...props
    },
    ref
  ) => {
    let content;
    let cellClassName = tableCellVariants;

    if (checkbox) {
      // Handle both boolean and CheckboxProps
      const checkboxProps = typeof checkbox === 'boolean' ? {} : checkbox;
      content = <Checkbox {...checkboxProps} />;
      cellClassName = 'py-sm w-9 pl-5 pr-0 ';
    } else if (tag) {
      // Handle both boolean and TagProps
      const tagProps = typeof tag === 'boolean' ? {} : tag;
      content = <Tag {...tagProps}>{children}</Tag>;
    } else if (status) {
      // Handle boolean, string, and StatusIndicatorProps
      let statusProps: StatusIndicatorProps;
      if (typeof status === 'boolean') {
        statusProps = { level: 'success' };
      } else if (typeof status === 'string') {
        statusProps = { level: status };
      } else {
        statusProps = status;
      }
      content = <StatusIndicator {...statusProps}>{children}</StatusIndicator>;
    } else {
      // Default variant with complex layout
      content = (
        <div className="gap-1 flex items-center">
          {/* Prefix badge - only show if showPrefixBadge is true */}
          {showPrefixBadge && (
            <Badge intent="default">{prefixBadgeContent}</Badge>
          )}

          {/* SDS Name with icons */}
          <div className="gap-1 flex items-center">
            {/* Left icon - only show if provided */}
            {LeftIcon &&
              (onLeftIconClick ? (
                <button
                  type="button"
                  onClick={onLeftIconClick}
                  className="cursor-pointer transition-opacity hover:opacity-70"
                >
                  <LeftIcon size={20} className="text-shape-primary" />
                </button>
              ) : (
                <LeftIcon size={20} className="text-shape-primary" />
              ))}

            {/* SDS Name */}
            <span>{children}</span>

            {/* Right icon - only show if provided */}
            {RightIcon &&
              (onRightIconClick ? (
                <button
                  type="button"
                  onClick={onRightIconClick}
                  className="cursor-pointer transition-opacity hover:opacity-70"
                >
                  <RightIcon size={20} className="text-shape-primary" />
                </button>
              ) : (
                <RightIcon size={20} className="text-shape-primary" />
              ))}
          </div>

          {/* Trailing badge - only show if showTrailingBadge is true */}
          {showTrailingBadge && (
            <Badge intent="default">{trailingBadgeContent}</Badge>
          )}
        </div>
      );
    }

    return (
      <td ref={ref} className={cn(cellClassName, className)} {...props}>
        {content}
      </td>
    );
  }
);
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
  onSortChange?: (newSortOrder: 'asc' | 'desc' | undefined) => void;
};

const TableHeadSortButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & TableHeadSortButtonProps
>(({ sortOrder, className, onSortChange, onClick, ...props }, ref) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Cycle through sort orders: undefined -> asc -> desc -> undefined
    let newSortOrder: 'asc' | 'desc' | undefined;
    if (sortOrder === undefined) {
      newSortOrder = 'asc';
    } else if (sortOrder === 'asc') {
      newSortOrder = 'desc';
    } else {
      newSortOrder = undefined;
    }

    onSortChange?.(newSortOrder);
    onClick?.(event);
  };

  return (
    <button
      ref={ref}
      className={cn(
        `text-body-secondary bg-interactive-neutral-default
        border-interactive-default size-6 inline-flex cursor-pointer
        items-center justify-center border focus:outline-none`,
        className
      )}
      onClick={handleClick}
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
  );
});

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
