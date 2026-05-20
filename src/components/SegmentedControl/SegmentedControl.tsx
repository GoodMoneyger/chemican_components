import React from 'react';
import { cva } from 'class-variance-authority';

import type { IconProp } from '../../lib/utils';
import { cn, renderIcon } from '../../lib/utils';

type SegmentedValue = string | number;

interface SegmentedControlContextValue {
  name: string | undefined;
  idPrefix: string;
  value: SegmentedValue | undefined;
  disabled: boolean;
  invalid: boolean;
  onValueChange: (value: SegmentedValue) => void;
}

const SegmentedControlContext =
  React.createContext<SegmentedControlContextValue | null>(null);

const useSegmentedControlContext = () => {
  const ctx = React.useContext(SegmentedControlContext);
  if (!ctx) {
    throw new Error(
      'SegmentedControl.Option must be rendered inside SegmentedControl.Group'
    );
  }
  return ctx;
};

export interface SegmentedControlGroupProps {
  name?: string;
  value?: SegmentedValue;
  defaultValue?: SegmentedValue;
  onValueChange?: (value: SegmentedValue) => void;
  invalid?: boolean;
  disabled?: boolean;
  id?: string;
  className?: string;
  children: React.ReactNode;
  'aria-label'?: string;
  'aria-labelledby'?: string;
}

const groupVariants = cva(
  `rounded [&>*+*]:border-surface-default flex w-full overflow-clip border
  [&>*+*]:border-l`,
  {
    variants: {
      invalid: {
        true: 'border-surface-alert',
        false: 'border-surface-default',
      },
    },
    defaultVariants: { invalid: false },
  }
);

const SegmentedControlGroup = React.forwardRef<
  HTMLDivElement,
  SegmentedControlGroupProps
>(
  (
    {
      name,
      value,
      defaultValue,
      onValueChange,
      invalid = false,
      disabled = false,
      id,
      className,
      children,
      ...ariaProps
    },
    ref
  ) => {
    const reactId = React.useId();
    const idPrefix = id ?? `segmented-control-${reactId}`;

    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = React.useState<
      SegmentedValue | undefined
    >(defaultValue);
    const currentValue = isControlled ? value : internalValue;

    const handleValueChange = React.useCallback(
      (next: SegmentedValue) => {
        if (!isControlled) setInternalValue(next);
        onValueChange?.(next);
      },
      [isControlled, onValueChange]
    );

    const ctx = React.useMemo<SegmentedControlContextValue>(
      () => ({
        name,
        idPrefix,
        value: currentValue,
        disabled,
        invalid,
        onValueChange: handleValueChange,
      }),
      [name, idPrefix, currentValue, disabled, invalid, handleValueChange]
    );

    return (
      <SegmentedControlContext.Provider value={ctx}>
        <div
          ref={ref}
          id={id}
          role="radiogroup"
          aria-invalid={invalid || undefined}
          aria-disabled={disabled || undefined}
          className={cn(groupVariants({ invalid }), className)}
          {...ariaProps}
        >
          {children}
        </div>
      </SegmentedControlContext.Provider>
    );
  }
);

SegmentedControlGroup.displayName = 'SegmentedControl.Group';

export interface SegmentedControlOptionProps {
  value: SegmentedValue;
  disabled?: boolean;
  leadingIcon?: IconProp;
  id?: string;
  className?: string;
  children: React.ReactNode;
}

const optionVariants = cva(
  `gap-xxs px-lg py-sm text-md
  has-[input:focus-visible]:ring-interactive-focused flex flex-1 cursor-pointer
  items-center justify-center select-none has-[input:focus-visible]:relative
  has-[input:focus-visible]:z-10 has-[input:focus-visible]:ring-2
  has-[input:focus-visible]:ring-inset`,
  {
    variants: {
      selected: { true: 'font-medium', false: '' },
      disabled: { true: 'cursor-not-allowed', false: '' },
    },
    compoundVariants: [
      {
        selected: true,
        disabled: false,
        class: 'bg-interactive-primary-default text-body-inverse',
      },
      {
        selected: false,
        disabled: false,
        class: `bg-surface-primary text-body-primary
        hover:bg-interactive-neutral-hover`,
      },
      {
        selected: true,
        disabled: true,
        class: 'bg-interactive-primary-default/50 text-body-inverse opacity-50',
      },
      {
        selected: false,
        disabled: true,
        class: 'bg-surface-disabled text-body-primary opacity-50',
      },
    ],
    defaultVariants: { selected: false, disabled: false },
  }
);

const SegmentedControlOption: React.FC<SegmentedControlOptionProps> = ({
  value,
  disabled: optionDisabled = false,
  leadingIcon,
  id,
  className,
  children,
}) => {
  const ctx = useSegmentedControlContext();
  const selected =
    ctx.value !== undefined && String(ctx.value) === String(value);
  const disabled = optionDisabled || ctx.disabled;
  const inputId = id ?? `${ctx.idPrefix}-${encodeURIComponent(String(value))}`;

  return (
    <label
      htmlFor={inputId}
      className={cn(optionVariants({ selected, disabled }), className)}
    >
      <input
        id={inputId}
        type="radio"
        name={ctx.name}
        value={String(value)}
        checked={selected}
        disabled={disabled}
        aria-invalid={ctx.invalid || undefined}
        onChange={() => ctx.onValueChange(value)}
        className="sr-only"
      />
      {leadingIcon &&
        renderIcon(leadingIcon, { size: 16, className: 'shrink-0' })}
      {children}
    </label>
  );
};

SegmentedControlOption.displayName = 'SegmentedControl.Option';

export const SegmentedControl = {
  Group: SegmentedControlGroup,
  Option: SegmentedControlOption,
};
