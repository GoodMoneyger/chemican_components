import React from 'react';

import { cn } from '../../utils';

export interface TableRowOverlayProps {
  /** Keep overlay visible (e.g., when dropdown is open) */
  forceVisible?: boolean;
  /** Additional class names for the overlay container */
  className?: string;
  children: React.ReactNode;
}

/**
 * A table row overlay that:
 * - Sticks to the right edge during horizontal scroll
 * - Appears on row hover or when forceVisible is true
 * - Spans over multiple columns (not constrained to cell width)
 *
 * Must be used as the last child in a TableRow.
 * Requires TableRow to have `position: relative`.
 */
const TableRowOverlay = React.forwardRef<
  HTMLTableCellElement,
  TableRowOverlayProps
>(({ forceVisible = false, className, children }, ref) => (
  <td
    ref={ref}
    className={cn(
      // Zero-width anchor cell that sticks to right
      'right-0 w-0 p-0 sticky border-none',
      // No background on the cell itself
      'bg-transparent'
    )}
  >
    {/* Absolutely positioned overlay relative to the row */}
    <div
      className={cn(
        // Position at right edge of row, vertically centered
        'right-0 top-0 bottom-0 absolute flex items-center',
        // Padding for content spacing, max-content width
        'pr-md pl-16 w-max',
        // Z-index above other cells
        'z-slight',
        // Visibility control
        forceVisible
          ? 'opacity-100'
          : 'opacity-0 transition-opacity group-hover:opacity-100',
        className
      )}
      style={{
        background:
          'linear-gradient(to right, transparent 0rem, var(--token-color-background-interactive-neutral-hover) 3rem, var(--token-color-background-interactive-neutral-hover) 100%)',
      }}
    >
      <div className="gap-xs flex items-center">{children}</div>
    </div>
  </td>
));

TableRowOverlay.displayName = 'TableRowOverlay';

export { TableRowOverlay };
