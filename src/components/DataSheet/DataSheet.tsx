import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { IconPencil, IconTrash } from '@tabler/icons-react';

import { cn } from '../../utils';
import { Button } from '../Button/Button';
import type { ButtonProps } from '../Button/Button';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface DataSheetProps extends React.HTMLAttributes<HTMLDivElement> {}

const dataSheetVariants = cva('bg-surface-primary min-w-0 space-y-md w-full', {
  variants: {},
});

const DataSheet = React.forwardRef<HTMLDivElement, DataSheetProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn(dataSheetVariants(), className)} {...props}>
      {children}
    </div>
  )
);
DataSheet.displayName = 'DataSheet';

const dataSheetHeaderVariants = cva(
  'px-0 py-xs text-body-primary leading-[1.2]',
  {
    variants: {
      variant: {
        primary: 'text-md font-bold',
        table: `text-sm font-bold bg-surface-tertiary px-xs py-xxs mb-xxs
        leading-tight`,
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export interface DataSheetHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dataSheetHeaderVariants> {
  onEdit?: () => void;
  onRemove?: () => void;
}

const DataSheetHeader = React.forwardRef<HTMLDivElement, DataSheetHeaderProps>(
  ({ className, variant, children, onEdit, onRemove, ...props }, ref) => {
    const hasActions = onEdit || onRemove;

    return (
      <div
        ref={ref}
        className={cn(
          dataSheetHeaderVariants({ variant }),
          hasActions && 'flex items-center justify-between',
          className
        )}
        {...props}
      >
        <div>{children}</div>
        {hasActions && (
          <div className="flex">
            {onEdit && (
              <Button
                size="icon"
                intent="text"
                icon={IconPencil}
                onClick={onEdit}
                className="text-shape-primary [&_svg]:!size-5"
              />
            )}
            {onRemove && (
              <Button
                size="icon"
                intent="text"
                icon={IconTrash}
                onClick={onRemove}
                danger
                className="[&_svg]:!size-5"
              />
            )}
          </div>
        )}
      </div>
    );
  }
);
DataSheetHeader.displayName = 'DataSheetHeader';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface DataSheetSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const DataSheetSection = React.forwardRef<
  HTMLDivElement,
  DataSheetSectionProps
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('divide-surface-default divide-y', className)}
    {...props}
  >
    {children}
  </div>
));
DataSheetSection.displayName = 'DataSheetSection';

const dataSheetKeyValueVariants = cva('py-sm', {
  variants: {
    orientation: {
      vertical: 'gap-xxs flex flex-col',
      horizontal: 'px-0 py-0 min-h-11 flex items-center',
    },
  },
  defaultVariants: {
    orientation: 'vertical',
  },
});

const dataSheetKeyValueLabelVariants = cva(
  'font-normal text-body-secondary text-sm',
  {
    variants: {
      orientation: {
        vertical: 'leading-none',
        horizontal: 'w-[120px] shrink-0 leading-[1.5]',
      },
    },
    defaultVariants: {
      orientation: 'vertical',
    },
  }
);

const dataSheetKeyValueValueVariants = cva('font-normal', {
  variants: {
    orientation: {
      vertical: 'text-body-primary leading-[1.5]',
      horizontal: 'text-body-primary flex-1 leading-[1.5]',
    },
  },
  defaultVariants: {
    orientation: 'vertical',
  },
});

export interface DataSheetKeyValueProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dataSheetKeyValueVariants> {
  label: React.ReactNode;
}

const DataSheetKeyValue = React.forwardRef<
  HTMLDivElement,
  DataSheetKeyValueProps
>(({ className, label, orientation, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(dataSheetKeyValueVariants({ orientation }), className)}
    {...props}
  >
    <div className={cn(dataSheetKeyValueLabelVariants({ orientation }))}>
      {label}
    </div>
    <div className={cn(dataSheetKeyValueValueVariants({ orientation }))}>
      {children}
    </div>
  </div>
));
DataSheetKeyValue.displayName = 'DataSheetKeyValue';

export interface DataSheetTableProps
  extends React.HTMLAttributes<HTMLDivElement> {
  onEditRow?: (rowIndex: number) => void;
  onRemoveRow?: (rowIndex: number) => void;
  actionsColumnParts?: number;
}

interface DataSheetTableContextValue {
  onEditRow?: (rowIndex: number) => void;
  onRemoveRow?: (rowIndex: number) => void;
  actionsColumnParts: number;
}

const defaultDataSheetTableContextValue: DataSheetTableContextValue = {
  actionsColumnParts: 10,
};

const DataSheetTableContext = React.createContext<DataSheetTableContextValue>(
  defaultDataSheetTableContextValue
);

const useDataSheetTableContext = () => React.useContext(DataSheetTableContext);

// Context for TableRow to provide rowIndex to cells
interface DataSheetTableRowContextValue {
  rowIndex?: number;
}

const DataSheetTableRowContext =
  React.createContext<DataSheetTableRowContextValue>({});

const useDataSheetTableRowContext = () =>
  React.useContext(DataSheetTableRowContext);

const DataSheetTable = React.forwardRef<HTMLDivElement, DataSheetTableProps>(
  (
    {
      className,
      children,
      onEditRow,
      onRemoveRow,
      actionsColumnParts = 10,
      ...props
    },
    ref
  ) => {
    const contextValue: DataSheetTableContextValue = {
      actionsColumnParts,
      ...(onEditRow && { onEditRow }),
      ...(onRemoveRow && { onRemoveRow }),
    };

    return (
      <DataSheetTableContext.Provider value={contextValue}>
        <div ref={ref} className={cn('overflow-x-auto', className)} {...props}>
          <table className="w-full table-fixed">{children}</table>
        </div>
      </DataSheetTableContext.Provider>
    );
  }
);
DataSheetTable.displayName = 'DataSheetTable';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface DataSheetTableHeaderProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {}

const DataSheetTableHeader = React.forwardRef<
  HTMLTableSectionElement,
  DataSheetTableHeaderProps
>(({ className, children, ...props }, ref) => (
  <thead ref={ref} className={cn('', className)} {...props}>
    {children}
  </thead>
));
DataSheetTableHeader.displayName = 'DataSheetTableHeader';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface DataSheetTableBodyProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {}

const DataSheetTableBody = React.forwardRef<
  HTMLTableSectionElement,
  DataSheetTableBodyProps
>(({ className, children, ...props }, ref) => {
  // Auto-inject rowIndex for non-header rows
  const childrenWithIndex = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      const childProps = child.props as { rowIndex?: number; header?: boolean };
      if (childProps.rowIndex === undefined && !childProps.header) {
        return React.cloneElement(child, { rowIndex: index } as Partial<
          typeof childProps
        >);
      }
    }
    return child;
  });

  return (
    <tbody ref={ref} className={cn('', className)} {...props}>
      {childrenWithIndex}
    </tbody>
  );
});
DataSheetTableBody.displayName = 'DataSheetTableBody';

export interface DataSheetTableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement> {
  header?: boolean;
  rowIndex?: number;
}

const DataSheetTableRow = React.forwardRef<
  HTMLTableRowElement,
  DataSheetTableRowProps
>(({ className, header, rowIndex, children, ...props }, ref) => {
  const rowContextValue: DataSheetTableRowContextValue = {
    ...(rowIndex !== undefined && { rowIndex }),
  };

  return (
    <DataSheetTableRowContext.Provider value={rowContextValue}>
      <tr
        ref={ref}
        className={cn(
          header ? 'h-[18px]' : 'border-surface-default border-t',
          className
        )}
        {...props}
      >
        {children}
      </tr>
    </DataSheetTableRowContext.Provider>
  );
});
DataSheetTableRow.displayName = 'DataSheetTableRow';

export interface DataSheetTableCellProps
  extends React.TdHTMLAttributes<HTMLTableCellElement> {
  header?: boolean;
  parts?: number;
}

const DataSheetTableCell = React.forwardRef<
  HTMLTableCellElement,
  DataSheetTableCellProps
>(({ className, header, parts, children, style, ...props }, ref) => {
  const Component = header ? 'th' : 'td';
  // Calculate width as percentage based on parts
  // Parts represent relative weight - total is calculated from all cells in the row
  const widthStyle =
    parts !== undefined ? { width: `${parts}%`, ...style } : style;

  return (
    <Component
      ref={ref}
      className={cn(
        'py-xs text-left align-top',
        'first:pl-0 last:pr-0 px-xs',
        header
          ? 'text-body-secondary text-sm font-normal leading-[1.5]'
          : 'text-body-primary font-normal leading-[1.5]',
        className
      )}
      style={widthStyle}
      {...props}
    >
      {children}
    </Component>
  );
});
DataSheetTableCell.displayName = 'DataSheetTableCell';

export interface DataSheetTableActionsCellProps
  extends Omit<DataSheetTableCellProps, 'parts'> {
  rowIndex?: number;
}

const DataSheetTableActionsCell = React.forwardRef<
  HTMLTableCellElement,
  DataSheetTableActionsCellProps
>(({ className, header, rowIndex: rowIndexProp, children, ...props }, ref) => {
  const { onEditRow, onRemoveRow, actionsColumnParts } =
    useDataSheetTableContext();
  const { rowIndex: rowIndexFromContext } = useDataSheetTableRowContext();

  // Use explicit prop if provided, otherwise use context
  const rowIndex = rowIndexProp ?? rowIndexFromContext;

  // Header row - render empty or label
  if (header) {
    return (
      <DataSheetTableCell
        ref={ref}
        header
        parts={actionsColumnParts}
        className={className}
        {...props}
      >
        {children}
      </DataSheetTableCell>
    );
  }

  // Data row - render action buttons
  const hasActions = onEditRow || onRemoveRow;
  if (!hasActions) return null;

  return (
    <DataSheetTableCell
      ref={ref}
      parts={actionsColumnParts}
      className={cn('align-middle', className)}
      {...props}
    >
      <div className="flex">
        {onEditRow && rowIndex !== undefined && (
          <Button
            size="icon"
            intent="text"
            icon={IconPencil}
            onClick={() => onEditRow(rowIndex)}
            className="text-shape-primary [&_svg]:!size-5"
          />
        )}
        {onRemoveRow && rowIndex !== undefined && (
          <Button
            size="icon"
            intent="text"
            icon={IconTrash}
            onClick={() => onRemoveRow(rowIndex)}
            danger
            className="[&_svg]:!size-5"
          />
        )}
      </div>
    </DataSheetTableCell>
  );
});
DataSheetTableActionsCell.displayName = 'DataSheetTableActionsCell';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface DataSheetActionProps extends ButtonProps {}

const DataSheetAction = React.forwardRef<
  HTMLButtonElement,
  DataSheetActionProps
>(({ className, ...props }, ref) => (
  <Button ref={ref} className={cn('w-full', className)} {...props} />
));
DataSheetAction.displayName = 'DataSheetAction';

// Compound component pattern
const DataSheetNamespace = Object.assign(DataSheet, {
  Header: DataSheetHeader,
  Section: DataSheetSection,
  KeyValue: DataSheetKeyValue,
  Table: DataSheetTable,
  TableHeader: DataSheetTableHeader,
  TableBody: DataSheetTableBody,
  TableRow: DataSheetTableRow,
  TableCell: DataSheetTableCell,
  TableActionsCell: DataSheetTableActionsCell,
  Action: DataSheetAction,
});

export {
  DataSheetNamespace as DataSheet,
  DataSheetHeader,
  DataSheetSection,
  DataSheetKeyValue,
  DataSheetTable,
  DataSheetTableHeader,
  DataSheetTableBody,
  DataSheetTableRow,
  DataSheetTableCell,
  DataSheetTableActionsCell,
  DataSheetAction,
};
