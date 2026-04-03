import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { IconPencil, IconRestore, IconTrash } from '@tabler/icons-react';

import { cn } from '../../utils';
import { Button } from '../Button/Button';
import type { ButtonProps } from '../Button/Button';
import { Tooltip } from '../Tooltip';

const dataSheetVariants = cva('space-y-md w-full', {
  variants: {
    variant: {
      default: 'bg-inherit',
      bordered: `rounded-sm border-divider-default bg-surface-primary
      overflow-hidden border`,
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface DataSheetProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dataSheetVariants> {
  /**
   * The visual variant of the data sheet
   * @default 'default'
   */
  variant?: 'default' | 'bordered';
}

const DataSheet = React.forwardRef<HTMLDivElement, DataSheetProps>(
  ({ className, variant, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(dataSheetVariants({ variant }), className)}
      {...props}
    >
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

interface AccessibilityProp {
  edit?: string;
  remove?: string;
  restore?: string;
}

export interface DataSheetHeaderProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof dataSheetHeaderVariants> {
  isDeleted?: boolean;
  ariaLabels?: AccessibilityProp;
  tooltipMessages?: AccessibilityProp;
  onEdit?: () => void;
  onRemove?: () => void;
  onRestore?: () => void;
}

const DataSheetHeader = React.forwardRef<HTMLElement, DataSheetHeaderProps>(
  (
    {
      className,
      variant,
      children,
      isDeleted = false,
      ariaLabels,
      tooltipMessages,
      onEdit,
      onRemove,
      onRestore,
      ...props
    },
    ref
  ) => {
    const hasActions = onEdit || onRemove || onRestore;

    return (
      <header
        ref={ref}
        className={cn(
          dataSheetHeaderVariants({ variant }),
          hasActions && 'flex items-center justify-between',
          className
        )}
        {...props}
      >
        <div className={cn(isDeleted && 'line-through opacity-60')}>
          {children}
        </div>

        {hasActions && (
          <div className="gap-xxs flex">
            {onEdit && (
              <Tooltip
                content={isDeleted ? null : (tooltipMessages?.edit ?? null)}
                disableHoverableContent
              >
                <Button
                  aria-label={ariaLabels?.edit ?? undefined}
                  size="icon"
                  intent="text"
                  icon={IconPencil}
                  disabled={isDeleted}
                  onClick={onEdit}
                  className={cn(
                    'text-shape-primary [&_svg]:!size-5',
                    isDeleted && 'cursor-not-allowed!'
                  )}
                />
              </Tooltip>
            )}
            {onRemove && !isDeleted && (
              <Tooltip
                content={tooltipMessages?.remove ?? null}
                disableHoverableContent
              >
                <Button
                  aria-label={ariaLabels?.remove ?? undefined}
                  size="icon"
                  intent="text"
                  icon={IconTrash}
                  onClick={onRemove}
                  danger
                  className="[&_svg]:!size-5"
                />
              </Tooltip>
            )}
            {onRestore && isDeleted && (
              <Tooltip
                content={tooltipMessages?.restore ?? null}
                disableHoverableContent
              >
                <Button
                  aria-label={ariaLabels?.restore ?? undefined}
                  size="icon"
                  intent="text"
                  icon={IconRestore}
                  onClick={onRestore}
                  className="text-shape-primary [&_svg]:!size-5"
                />
              </Tooltip>
            )}
          </div>
        )}
      </header>
    );
  }
);
DataSheetHeader.displayName = 'DataSheetHeader';

export type DataSheetSectionProps = React.HTMLAttributes<HTMLElement>;

const DataSheetSection = React.forwardRef<HTMLElement, DataSheetSectionProps>(
  ({ className, children, ...props }, ref) => (
    <section
      ref={ref}
      className={cn('divide-surface-default divide-y', className)}
      {...props}
    >
      {children}
    </section>
  )
);
DataSheetSection.displayName = 'DataSheetSection';

const dataSheetKeyValueVariants = cva('py-sm', {
  variants: {
    orientation: {
      vertical: 'gap-xxs flex flex-col',
      horizontal: 'px-0 py-0 min-h-11 flex items-center',
    },
    spacing: {
      default: '',
      compact: 'py-xxs min-h-0 border-none',
    },
  },
  defaultVariants: {
    orientation: 'vertical',
    spacing: 'default',
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

const dataSheetKeyValueValueVariants = cva(
  'font-normal text-body-primary leading-[1.5]',
  {
    variants: {
      orientation: {
        vertical: '',
        horizontal: 'flex-1',
      },
    },
    defaultVariants: {
      orientation: 'vertical',
    },
  }
);

export interface DataSheetKeyValueProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dataSheetKeyValueVariants> {
  label: React.ReactNode;
}

const DataSheetKeyValue = React.forwardRef<
  HTMLDivElement,
  DataSheetKeyValueProps
>(({ className, label, orientation, spacing, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      dataSheetKeyValueVariants({ orientation, spacing }),
      className
    )}
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

export type DataSheetItemType = string | number | object;

export interface DataSheetTableProps<TItem extends DataSheetItemType = string>
  extends React.HTMLAttributes<HTMLDivElement> {
  onEditRow?: (item: TItem) => void;
  onRemoveRow?: (item: TItem) => void;
  onRestoreRow?: (item: TItem) => void;
  actionsColumnParts?: number;
}

interface DataSheetTableContextValue<TItem extends DataSheetItemType = string> {
  onEditRow?: (item: TItem) => void;
  onRemoveRow?: (item: TItem) => void;
  onRestoreRow?: (item: TItem) => void;
  actionsColumnParts: number;
}

const defaultDataSheetTableContextValue: DataSheetTableContextValue = {
  actionsColumnParts: 10,
};

const DataSheetTableContext = React.createContext<DataSheetTableContextValue>(
  defaultDataSheetTableContextValue
);

const useDataSheetTableContext = <TItem extends DataSheetItemType = string>() =>
  React.useContext(DataSheetTableContext) as DataSheetTableContextValue<TItem>;

// Context for TableRow to provide item and totalParts to cells
interface DataSheetTableRowContextValue<
  TItem extends DataSheetItemType = string,
> {
  item?: TItem;
  totalParts?: number;
  isDeleted?: boolean;
  ariaLabels?: AccessibilityProp;
  tooltipMessages?: AccessibilityProp;
}

const DataSheetTableRowContext =
  React.createContext<DataSheetTableRowContextValue>({});

const useDataSheetTableRowContext = <
  TItem extends DataSheetItemType = string,
>() =>
  React.useContext(
    DataSheetTableRowContext
  ) as DataSheetTableRowContextValue<TItem>;

function DataSheetTableInner<TItem extends DataSheetItemType = string>(
  {
    className,
    children,
    onEditRow,
    onRemoveRow,
    onRestoreRow,
    actionsColumnParts = 10,
    ...props
  }: DataSheetTableProps<TItem>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const contextValue: DataSheetTableContextValue<TItem> = {
    actionsColumnParts,
    ...(onEditRow && { onEditRow }),
    ...(onRemoveRow && { onRemoveRow }),
    ...(onRestoreRow && { onRestoreRow }),
  };

  return (
    <DataSheetTableContext.Provider
      value={contextValue as DataSheetTableContextValue}
    >
      <div ref={ref} className={cn('overflow-x-auto', className)} {...props}>
        <table className="w-full table-fixed">{children}</table>
      </div>
    </DataSheetTableContext.Provider>
  );
}

const DataSheetTable = React.forwardRef(DataSheetTableInner) as <
  TItem extends DataSheetItemType = string,
>(
  props: DataSheetTableProps<TItem> & {
    ref?: React.ForwardedRef<HTMLDivElement>;
  }
) => React.ReactElement;

(
  DataSheetTable as unknown as React.ForwardRefExoticComponent<DataSheetTableProps>
).displayName = 'DataSheetTable';

export type DataSheetTableHeaderProps =
  React.HTMLAttributes<HTMLTableSectionElement>;

const DataSheetTableHeader = React.forwardRef<
  HTMLTableSectionElement,
  DataSheetTableHeaderProps
>(({ className, children, ...props }, ref) => (
  <thead ref={ref} className={cn('', className)} {...props}>
    {children}
  </thead>
));
DataSheetTableHeader.displayName = 'DataSheetTableHeader';

export type DataSheetTableBodyProps =
  React.HTMLAttributes<HTMLTableSectionElement>;

const DataSheetTableBody = React.forwardRef<
  HTMLTableSectionElement,
  DataSheetTableBodyProps
>(({ className, children, ...props }, ref) => (
  <tbody ref={ref} className={cn('', className)} {...props}>
    {children}
  </tbody>
));
DataSheetTableBody.displayName = 'DataSheetTableBody';

export interface DataSheetTableRowProps<
  TItem extends DataSheetItemType = string,
> extends React.HTMLAttributes<HTMLTableRowElement> {
  header?: boolean;
  item?: TItem;
  isDeleted?: boolean;
  ariaLabels?: AccessibilityProp;
  tooltipMessages?: AccessibilityProp;
}

function DataSheetTableRowInner<TItem extends DataSheetItemType = string>(
  {
    className,
    header,
    item,
    isDeleted = false,
    ariaLabels,
    tooltipMessages,
    children,
    ...props
  }: DataSheetTableRowProps<TItem>,
  ref: React.ForwardedRef<HTMLTableRowElement>
) {
  // Calculate total parts from all children with parts prop
  const totalParts = React.useMemo(() => {
    let total = 0;
    React.Children.forEach(children, (child) => {
      if (
        React.isValidElement<{ parts?: number }>(child) &&
        typeof child.props.parts === 'number'
      ) {
        total += child.props.parts;
      }
    });
    return total > 0 ? total : undefined;
  }, [children]);

  const rowContextValue: DataSheetTableRowContextValue<TItem> = {
    ...(item !== undefined && { item }),
    ...(totalParts !== undefined && { totalParts }),
    isDeleted,
    ...(ariaLabels && { ariaLabels }),
    ...(tooltipMessages && { tooltipMessages }),
  };

  return (
    <DataSheetTableRowContext.Provider
      value={rowContextValue as DataSheetTableRowContextValue}
    >
      <tr
        ref={ref}
        className={cn(
          header ? 'h-[18px]' : 'border-surface-default border-t',
          isDeleted && 'opacity-60',
          className
        )}
        {...props}
      >
        {children}
      </tr>
    </DataSheetTableRowContext.Provider>
  );
}

const DataSheetTableRow = React.forwardRef(DataSheetTableRowInner) as <
  TItem extends DataSheetItemType = string,
>(
  props: DataSheetTableRowProps<TItem> & {
    ref?: React.ForwardedRef<HTMLTableRowElement>;
  }
) => React.ReactElement;

(
  DataSheetTableRow as unknown as React.ForwardRefExoticComponent<DataSheetTableRowProps>
).displayName = 'DataSheetTableRow';

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
  const { totalParts, isDeleted } = useDataSheetTableRowContext();

  // Calculate width as percentage based on parts
  // Parts represent relative weight - total is calculated from all cells in the row
  const widthStyle =
    parts !== undefined && totalParts !== undefined
      ? { width: `${(parts / totalParts) * 100}%`, ...style }
      : style;

  // Determine if content should have line-through
  // Skip line-through for empty content or single dash
  const contentStr =
    typeof children === 'string' ? children.trim() : String(children || '');
  const shouldApplyLineThrough =
    isDeleted && !header && contentStr !== '' && contentStr !== '-';

  return (
    <Component
      ref={ref}
      className={cn(
        'py-xs text-left align-top',
        'first:pl-0 last:pr-0 px-xs',
        header
          ? 'text-body-secondary text-sm font-normal leading-[1.5]'
          : 'text-body-primary font-normal leading-[1.5]',
        shouldApplyLineThrough && 'line-through',
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

export interface DataSheetTableActionsCellProps<
  TItem extends DataSheetItemType = string,
> extends Omit<DataSheetTableCellProps, 'parts'> {
  item?: TItem;
}

function DataSheetTableActionsCellInner<
  TItem extends DataSheetItemType = string,
>(
  {
    className,
    header,
    item: itemProp,
    children,
    ...props
  }: DataSheetTableActionsCellProps<TItem>,
  ref: React.ForwardedRef<HTMLTableCellElement>
) {
  const { onEditRow, onRemoveRow, onRestoreRow, actionsColumnParts } =
    useDataSheetTableContext<TItem>();
  const {
    item: itemFromContext,
    isDeleted,
    ariaLabels,
    tooltipMessages,
  } = useDataSheetTableRowContext<TItem>();

  // Use explicit prop if provided, otherwise use context
  const item = itemProp ?? itemFromContext;

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
  const hasActions = onEditRow || onRemoveRow || onRestoreRow;
  if (!hasActions) return null;

  return (
    <DataSheetTableCell
      ref={ref}
      parts={actionsColumnParts}
      className={cn('align-top', className)}
      {...props}
    >
      <div className="gap-xxs flex">
        {onEditRow && item && (
          <Tooltip
            content={isDeleted ? null : (tooltipMessages?.edit ?? null)}
            disableHoverableContent
          >
            <Button
              aria-label={ariaLabels?.edit ?? undefined}
              size="icon"
              intent="text"
              icon={IconPencil}
              disabled={isDeleted}
              onClick={() => onEditRow(item)}
              className={cn(
                'text-shape-primary [&_svg]:size-5!',
                isDeleted && 'cursor-not-allowed!'
              )}
            />
          </Tooltip>
        )}
        {onRemoveRow && item && !isDeleted && (
          <Tooltip
            content={tooltipMessages?.remove ?? null}
            disableHoverableContent
          >
            <Button
              aria-label={ariaLabels?.remove ?? undefined}
              size="icon"
              intent="text"
              icon={IconTrash}
              onClick={() => onRemoveRow(item)}
              danger
              className="[&_svg]:!size-5"
            />
          </Tooltip>
        )}
        {onRestoreRow && item && isDeleted && (
          <Tooltip
            content={tooltipMessages?.restore ?? null}
            disableHoverableContent
          >
            <Button
              aria-label={ariaLabels?.restore ?? undefined}
              size="icon"
              intent="text"
              icon={IconRestore}
              onClick={() => onRestoreRow(item)}
              className="text-shape-primary [&_svg]:!size-5"
            />
          </Tooltip>
        )}
      </div>
    </DataSheetTableCell>
  );
}

const DataSheetTableActionsCell = React.forwardRef(
  DataSheetTableActionsCellInner
) as <TItem extends DataSheetItemType = string>(
  props: DataSheetTableActionsCellProps<TItem> & {
    ref?: React.ForwardedRef<HTMLTableCellElement>;
  }
) => React.ReactElement;

(
  DataSheetTableActionsCell as unknown as React.ForwardRefExoticComponent<DataSheetTableActionsCellProps>
).displayName = 'DataSheetTableActionsCell';

export type DataSheetActionProps = ButtonProps;

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
