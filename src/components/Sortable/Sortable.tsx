import React from 'react';
import { move } from '@dnd-kit/helpers';
import { DragDropProvider } from '@dnd-kit/react';
import type { DragEndEvent } from '@dnd-kit/react';
import { useSortable } from '@dnd-kit/react/sortable';
import {
  IconChevronDown,
  IconChevronUp,
  IconGripVertical,
} from '@tabler/icons-react';

import { Button } from '../Button';
import { cn } from '../../lib/utils';

export type SortableItemId = string | number;

interface SortableContextValue {
  getIndex: (id: SortableItemId) => number;
  moveItem: (id: SortableItemId, offset: number) => void;
  count: number;
  disabled: boolean;
}

const SortableContext = React.createContext<SortableContextValue | null>(null);

const useSortableContext = () => {
  const ctx = React.useContext(SortableContext);
  if (!ctx) {
    throw new Error('Sortable.Item must be rendered inside Sortable.Container');
  }
  return ctx;
};

const resolveItemValue = (item: unknown): SortableItemId => {
  if (typeof item === 'string' || typeof item === 'number') {
    return item;
  }
  if (item !== null && typeof item === 'object' && 'id' in item) {
    const { id } = item as { id: unknown };
    if (typeof id === 'string' || typeof id === 'number') {
      return id;
    }
  }
  throw new Error(
    'Sortable.Container: items must be strings, numbers, or objects with a string or number `id`. Pass `getItemValue` for any other shape.'
  );
};

export interface SortableContainerProps<T> {
  value: T[];
  onValueChange: (value: T[]) => void;
  getItemValue?: (item: T) => SortableItemId;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

function SortableContainerInner<T>(
  {
    value,
    onValueChange,
    getItemValue = resolveItemValue,
    disabled = false,
    className,
    children,
  }: SortableContainerProps<T>,
  ref: React.ForwardedRef<HTMLUListElement>
) {
  const ids = React.useMemo(
    () => value.map((item) => getItemValue(item)),
    [value, getItemValue]
  );

  const contextValue = React.useMemo<SortableContextValue>(() => {
    const indexById = new Map<SortableItemId, number>();
    ids.forEach((id, index) => indexById.set(id, index));

    const getIndex = (id: SortableItemId) => indexById.get(id) ?? -1;

    const moveItem = (id: SortableItemId, offset: number) => {
      const index = getIndex(id);
      const nextIndex = index + offset;
      if (index < 0 || nextIndex < 0 || nextIndex >= value.length) {
        return;
      }

      const next = [...value];
      const [item] = next.splice(index, 1);
      if (item === undefined) {
        return;
      }
      next.splice(nextIndex, 0, item);
      onValueChange(next);
    };

    return { getIndex, moveItem, count: ids.length, disabled };
  }, [ids, value, onValueChange, disabled]);

  const handleDragEnd = (event: DragEndEvent) => {
    // `move` returns the array by reference when the drag was canceled or
    // landed back on its original index.
    const nextIds = move(ids, event);
    if (nextIds === ids) {
      return;
    }

    const itemById = new Map<SortableItemId, T>();
    value.forEach((item) => itemById.set(getItemValue(item), item));

    const next: T[] = [];
    nextIds.forEach((id) => {
      const item = itemById.get(id);
      if (item !== undefined) {
        next.push(item);
      }
    });

    onValueChange(next);
  };

  return (
    <SortableContext.Provider value={contextValue}>
      <DragDropProvider onDragEnd={handleDragEnd}>
        <ul ref={ref} className={cn('gap-xs flex flex-col', className)}>
          {children}
        </ul>
      </DragDropProvider>
    </SortableContext.Provider>
  );
}

const SortableContainer = React.forwardRef(SortableContainerInner) as <T>(
  props: SortableContainerProps<T> & {
    ref?: React.ForwardedRef<HTMLUListElement>;
  }
) => React.ReactElement;

(
  SortableContainer as unknown as React.ForwardRefExoticComponent<
    SortableContainerProps<unknown>
  >
).displayName = 'Sortable.Container';

interface SortableItemAriaLabels {
  moveUp?: string;
  moveDown?: string;
}

export interface SortableItemProps {
  value: SortableItemId;
  disabled?: boolean;
  showMoveButtons?: boolean;
  actions?: React.ReactNode;
  ariaLabels?: SortableItemAriaLabels;
  className?: string;
  children: React.ReactNode;
}

const SortableItem = React.forwardRef<HTMLLIElement, SortableItemProps>(
  (
    {
      value,
      disabled = false,
      showMoveButtons = true,
      actions,
      ariaLabels,
      className,
      children,
    },
    forwardedRef
  ) => {
    const {
      getIndex,
      moveItem,
      count,
      disabled: containerDisabled,
    } = useSortableContext();
    const index = getIndex(value);
    const isDisabled = disabled || containerDisabled;
    const { ref, isDragging } = useSortable({
      id: value,
      index,
      disabled: isDisabled,
    });

    return (
      <li
        ref={(node) => {
          ref(node);
          if (typeof forwardedRef === 'function') {
            forwardedRef(node);
          } else if (forwardedRef) {
            forwardedRef.current = node;
          }
        }}
        data-dragging={isDragging || undefined}
        className={cn(
          `rounded-sm p-2 gap-xxs border-interactive-default bg-surface-primary
          hover:border-interactive-hover flex cursor-grab items-center border
          transition-colors`,
          className
        )}
      >
        <IconGripVertical size={16} className="text-shape-light" />
        <div className="min-w-0 flex-1">{children}</div>
        {(showMoveButtons || actions) && (
          <div className="gap-xxs flex shrink-0 items-center">
            {showMoveButtons && (
              <>
                <Button
                  intent="tertiary"
                  size="icon"
                  icon={IconChevronUp}
                  aria-label={ariaLabels?.moveUp ?? 'Move up'}
                  className="h-6 w-6"
                  disabled={isDisabled || index <= 0}
                  onClick={() => moveItem(value, -1)}
                />
                <Button
                  intent="tertiary"
                  size="icon"
                  icon={IconChevronDown}
                  aria-label={ariaLabels?.moveDown ?? 'Move down'}
                  className="h-6 w-6"
                  disabled={isDisabled || index < 0 || index >= count - 1}
                  onClick={() => moveItem(value, 1)}
                />
              </>
            )}
            {actions}
          </div>
        )}
      </li>
    );
  }
);
SortableItem.displayName = 'Sortable.Item';

export const Sortable = {
  Container: SortableContainer,
  Item: SortableItem,
};
