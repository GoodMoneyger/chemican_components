import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

import { cn } from '../../lib/utils';
import { Select } from '../Select';
import { Button } from '../Button';

const paginationVariants = cva('gap-md flex items-center justify-start', {
  variants: {
    size: {
      default: 'gap-md',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

const labelVariants = cva(
  'text-md text-body-primary text-right leading-[14px] whitespace-nowrap'
);

export interface PaginationProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    VariantProps<typeof paginationVariants> {
  // Page control
  currentPage: number;
  totalPages: number;
  totalItems: number;
  onPageChange: (page: number) => void;

  // Rows per page control
  rowsPerPage: number;
  rowsPerPageOptions?: number[];
  onRowsPerPageChange: (rowsPerPage: number) => void;

  // Labels (for internationalization)
  rowsPerPageLabel?: React.ReactNode;
  pageSelectLabel?: React.ReactNode;

  // Page option label formatter (for internationalization)
  formatPageOption?: (
    page: number,
    totalPages: number,
    totalItems: number
  ) => React.ReactNode;

  // Navigation control
  showNavigation?: boolean;
}

export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      currentPage,
      totalPages,
      totalItems,
      onPageChange,
      rowsPerPage,
      rowsPerPageOptions = [10, 25, 50, 100],
      onRowsPerPageChange,
      rowsPerPageLabel = '表示行数',
      pageSelectLabel = 'ページ選択',
      formatPageOption = (page, totalPages, totalItems) =>
        `${page} / ${totalPages}（全${totalItems}件）`,
      showNavigation = true,
      size,
      className,
      ...props
    },
    ref
  ) => {
    const handlePreviousPage = () => {
      if (currentPage > 1) {
        onPageChange(currentPage - 1);
      }
    };

    const handleNextPage = () => {
      if (currentPage < totalPages) {
        onPageChange(currentPage + 1);
      }
    };

    const handleRowsPerPageChange = (newRowsPerPage: string) => {
      const numericValue = parseInt(newRowsPerPage, 10);
      onRowsPerPageChange(numericValue);
      // Reset to first page when changing rows per page
      if (currentPage > 1) {
        onPageChange(1);
      }
    };

    const handlePageChange = (pageValue: string) => {
      const numericPage = parseInt(pageValue, 10);
      onPageChange(numericPage);
    };

    // Prepare options for Select components
    const rowsPerPageSelectOptions = rowsPerPageOptions.map((option) => ({
      value: option.toString(),
      label: option.toString(),
    }));

    // Ensure at least one page option exists, even when there are no results
    const effectiveTotalPages = Math.max(totalPages, 1);
    const pageSelectOptions = Array.from(
      { length: effectiveTotalPages },
      (_, i) => i + 1
    ).map((page) => ({
      value: page.toString(),
      label: formatPageOption(page, effectiveTotalPages, totalItems),
    }));

    return (
      <div
        ref={ref}
        className={cn(paginationVariants({ size }), className)}
        {...props}
      >
        {/* Rows per page selector */}
        <div className="gap-xs flex items-center">
          <span className={cn(labelVariants())}>{rowsPerPageLabel}</span>
          <Select
            value={rowsPerPage.toString()}
            onValueChange={handleRowsPerPageChange}
            options={rowsPerPageSelectOptions}
          />
        </div>

        {/* Page info and selector */}
        <div className="gap-xs flex items-center">
          <span className={cn(labelVariants())}>{pageSelectLabel}</span>
          <Select
            value={currentPage.toString()}
            onValueChange={handlePageChange}
            options={pageSelectOptions}
            disabled={totalItems === 0}
          />
        </div>

        {/* Navigation buttons */}
        {showNavigation && (
          <div className="gap-md flex items-center">
            <Button
              intent="text"
              size="sm"
              icon={IconChevronLeft}
              onClick={handlePreviousPage}
              disabled={currentPage <= 1}
              aria-label="Previous page"
            />
            <Button
              intent="text"
              size="sm"
              icon={IconChevronRight}
              onClick={handleNextPage}
              disabled={currentPage >= totalPages}
              aria-label="Next page"
            />
          </div>
        )}
      </div>
    );
  }
);

Pagination.displayName = 'Pagination';
