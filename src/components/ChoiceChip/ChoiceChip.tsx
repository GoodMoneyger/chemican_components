import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const choiceChipVariants = cva(
  `px-sm py-xxs text-md h-8 focus-visible:ring-interactive-focused inline-flex
  cursor-pointer items-center justify-center rounded-full border
  transition-colors select-none focus-visible:ring-4 focus-visible:outline-none`,
  {
    variants: {
      selected: {
        true: `border-interactive-selected bg-interactive-neutral-selected
        text-body-primary`,
        false: `border-interactive-default bg-surface-primary
        text-body-secondary hover:border-interactive-hover
        hover:bg-interactive-neutral-hover`,
      },
      disabled: {
        true: 'cursor-not-allowed opacity-50',
        false: '',
      },
    },
    compoundVariants: [
      {
        selected: true,
        disabled: true,
        class: 'hover:bg-interactive-neutral-selected',
      },
      {
        selected: false,
        disabled: true,
        class: 'hover:border-interactive-default hover:bg-surface-primary',
      },
    ],
    defaultVariants: {
      selected: false,
      disabled: false,
    },
  }
);

export interface ChoiceChipProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<typeof choiceChipVariants> {
  /**
   * Whether the chip is selected
   * @default false
   */
  selected?: boolean;
  /**
   * Whether the chip is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * The content of the chip
   */
  children: React.ReactNode;
  /**
   * Callback when the chip is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ChoiceChip = React.forwardRef<HTMLButtonElement, ChoiceChipProps>(
  (
    {
      selected = false,
      disabled = false,
      className,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) return;
      onClick?.(event);
    };

    return (
      <button
        ref={ref}
        type="button"
        role="option"
        aria-selected={selected}
        aria-disabled={disabled}
        disabled={disabled}
        className={cn(choiceChipVariants({ selected, disabled }), className)}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);

ChoiceChip.displayName = 'ChoiceChip';

export interface ChoiceChipGroupProps {
  /**
   * The children chips
   */
  children: React.ReactNode;
  /**
   * Additional class names
   */
  className?: string;
}

export const ChoiceChipGroup: React.FC<ChoiceChipGroupProps> = ({
  children,
  className,
}) => {
  return (
    <div role="listbox" className={cn('gap-xs flex flex-wrap', className)}>
      {children}
    </div>
  );
};

ChoiceChipGroup.displayName = 'ChoiceChipGroup';
