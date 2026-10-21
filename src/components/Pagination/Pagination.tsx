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
      default: '',
      sm: '',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

const labelVariants = cva(
  'text-md text-body-primary text-right leading-[0.875rem] whitespace-nowrap'
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

  // Trigger label formatter for the page select (for internationalization).
  // Unlike formatPageOption, this is only shown in the closed trigger.
  formatPageValue?: (
    page: number,
    totalPages: number,
    totalItems: number
  ) => React.ReactNode;

  // Navigation control
  showNavigation?: boolean;

  // Rows per page selector visibility. Always hidden below md to fit phones
  showRowsPerPage?: boolean;

  // Accessible names of the navigation buttons (for internationalization)
  previousPageLabel?: string;
  nextPageLabel?: string;
}

export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      currentPage,
      totalPages,
      totalItems,
      onPageChange,
      rowsPerPage,
      rowsPerPageOptions = [50, 100, 200],
      onRowsPerPageChange,
      rowsPerPageLabel = '表示行数',
      pageSelectLabel = 'ページ選択',
      formatPageOption = (page, totalPages) => `${page} / ${totalPages}`,
      formatPageValue = (page, totalPages) => `${page} / ${totalPages}`,
      showNavigation = true,
      showRowsPerPage = true,
      previousPageLabel = 'Previous page',
      nextPageLabel = 'Next page',
      size,
      className,
      ...props
    },
    ref
  ) => {
    const buttonSize = size === 'sm' ? 'xs' : 'sm';

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
        {showRowsPerPage && (
          <div className="gap-xs max-md:hidden flex items-center">
            <span className={cn(labelVariants())}>{rowsPerPageLabel}</span>
            <Select
              size={size}
              value={rowsPerPage.toString()}
              onValueChange={handleRowsPerPageChange}
              options={rowsPerPageSelectOptions}
            />
          </div>
        )}

        {/* Page info and selector */}
        <div className="gap-xs flex items-center">
          <span className={cn(labelVariants())}>{pageSelectLabel}</span>
          <Select
            size={size}
            value={currentPage.toString()}
            onValueChange={handlePageChange}
            options={pageSelectOptions}
            disabled={totalItems === 0}
            renderValue={formatPageValue(
              currentPage,
              effectiveTotalPages,
              totalItems
            )}
            searchThreshold={Infinity}
          />
        </div>

        {/* Navigation buttons */}
        {showNavigation && (
          <div
            className={cn('gap-md flex items-center', {
              'gap-xs': size === 'sm',
            })}
          >
            <Button
              intent="text"
              size={buttonSize}
              icon={IconChevronLeft}
              onClick={handlePreviousPage}
              disabled={currentPage <= 1}
              aria-label={previousPageLabel}
            />
            <Button
              intent="text"
              size={buttonSize}
              icon={IconChevronRight}
              onClick={handleNextPage}
              disabled={currentPage >= totalPages}
              aria-label={nextPageLabel}
            />
          </div>
        )}
      </div>
    );
  }
);

Pagination.displayName = 'Pagination';
