import { default as React } from '../../../node_modules/react';
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
declare const TableRowOverlay: React.ForwardRefExoticComponent<TableRowOverlayProps & React.RefAttributes<HTMLTableCellElement>>;
export { TableRowOverlay };
