import React, { useEffect } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { IconSearch, IconX } from '@tabler/icons-react';

import { cn } from '../../lib/utils';

const searchBarWrapperVariants = cva(
  `rounded-sm bg-surface-primary min-h-8 border-t-interactive-default
  border-b-interactive-default border-l-interactive-default
  hover:border-t-interactive-hover hover:border-b-interactive-hover
  hover:border-l-interactive-hover focus-within:border-t-interactive-hover
  focus-within:border-b-interactive-hover
  focus-within:border-l-interactive-hover focus-within:ring-interactive-focused
  flex w-auto max-w-full items-center justify-between border-t border-b border-l
  focus-within:ring-4`,
  {
    variants: {
      size: {
        sm: 'h-8 text-sm',
        md: 'h-10 text-md',
        lg: 'h-12 text-lg',
      },
      state: {
        default: '',
        filled: '',
        disabled: `!border-t-interactive-default !border-b-interactive-default
        !border-l-interactive-default bg-input-disabled text-body-disabled
        pointer-events-none cursor-not-allowed`,
      },
    },
    defaultVariants: {
      size: 'md',
      state: 'default',
    },
  }
);

const inputWrapperVariants = cva(
  'gap-xxs px-sm disabled:bg-input-disabled flex flex-1 items-center'
);

const inputGroupVariants = cva(
  `rounded-l-sm gap-1 disabled:bg-input-disabled flex h-full flex-1 flex-row
  flex-nowrap items-center justify-between`
);

const searchIconVariants = cva(
  `text-shape-primary disabled:text-shape-interactive-disabled flex
  items-center`,
  {
    variants: {
      size: {
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const inputVariants = cva(
  `text-md text-body-primary disabled:bg-input-disabled
  disabled:text-body-disabled placeholder:text-body-disabled flex-1
  bg-transparent leading-[100%] tracking-[0%] outline-none
  focus:placeholder-transparent disabled:cursor-not-allowed`
);

const buttonVariants = cva(
  `rounded-r-sm bg-shape-accent-gray-pale px-sm py-xs text-md text-shape-primary
  gap-xxs border-l-interactive-default border-t-interactive-default
  border-r-interactive-default border-b-interactive-default
  hover:bg-shape-accent-gray-pale hover:text-interactive-primary-hover
  hover:border-t-interactive-hover hover:border-r-interactive-hover
  hover:border-b-interactive-hover focus:bg-shape-accent-gray-pale
  focus:text-interactive-primary-hover focus:border-t-interactive-hover
  focus:border-r-interactive-hover focus:border-b-interactive-hover
  group-hover/wrapper:bg-shape-accent-gray-pale
  group-hover/wrapper:text-interactive-primary-hover
  group-hover/wrapper:border-t-interactive-hover
  group-hover/wrapper:border-r-interactive-hover
  group-hover/wrapper:border-b-interactive-hover
  group-focus-within/wrapper:border-t-interactive-hover
  group-focus-within/wrapper:border-r-interactive-hover
  group-focus-within/wrapper:border-b-interactive-hover
  disabled:bg-shape-accent-gray-pale disabled:text-body-disabled
  disabled:border-t-interactive-default disabled:border-r-interactive-default
  disabled:border-b-interactive-default disabled:hover:bg-shape-accent-gray-pale
  disabled:hover:text-body-disabled flex cursor-pointer flex-row items-center
  justify-center border-t border-r border-b border-l text-center
  disabled:cursor-not-allowed`,
  {
    variants: {
      size: {
        sm: 'h-8 text-sm',
        md: 'h-10 text-md',
        lg: 'h-12 text-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);
const supportTextVariants = cva('gap-2 text-sm text-body-secondary flex-row');
const chipVariants = cva(
  `gap-1 bg-shape-accent-gray-pale px-xs py-xxs text-md text-accent-gray-strong
  flex items-center rounded-full`,
  {
    variants: {
      size: {
        sm: 'h-5',
        md: 'h-6',
        lg: 'h-6',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);
const chipRemoveButtonVariants = cva(
  `h-3 w-3 text-shape-primary flex items-center justify-center rounded-full
  disabled:cursor-not-allowed disabled:opacity-50`
);
const chipContainerVariants = cva(
  'gap-2 flex min-h-full flex-1 flex-row flex-nowrap items-center'
);
export interface SearchBarProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof searchBarWrapperVariants> {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch?: () => void;
  placeholder?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  state?: 'default' | 'filled' | 'disabled';
  supportText?: string;
  searchButtonText?: string;
}

const iconSizeMap = {
  sm: 16, // 50% of h-8 (32px)
  md: 20, // 50% of h-10 (40px)
  lg: 24, // 50% of h-12 (48px)
};

export const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  (
    {
      size = 'md',
      state,
      value = '',
      onChange,
      onSearch,
      placeholder,
      disabled: disabledProp,
      supportText,
      searchButtonText = '検索',
      ...props
    },
    ref
  ) => {
    const disabled = disabledProp || state === 'disabled';

    const [keywords, setKeywords] = React.useState<string[]>([]);

    let resolvedState: 'default' | 'filled' | 'disabled';

    if (typeof state === 'string') {
      resolvedState = state;
    } else if (disabled) {
      resolvedState = 'disabled';
    } else if (keywords.length > 0) {
      resolvedState = 'filled';
    } else {
      resolvedState = 'default';
    }
    const prevResolvedState = React.useRef(resolvedState);

    useEffect(() => {
      // If transitioning from 'filled' to another state, clear keywords
      if (
        prevResolvedState.current === 'filled' &&
        resolvedState !== 'filled'
      ) {
        setKeywords([]);
      }
      prevResolvedState.current = resolvedState;
    }, [resolvedState]);

    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return; // Prevent changes if disabled
      if (onChange) onChange(e);
    };

    // Handle Enter key to confirm keyword
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (disabled) return;
      if (e.key === 'Enter' && value.trim()) {
        setKeywords([...keywords, value.trim()]);
        if (onChange) {
          const event = {
            ...e,
            target: { value: '' },
          } as unknown as React.ChangeEvent<HTMLInputElement>;
          onChange(event);
        }
        e.preventDefault();
      }
      // Delete last chip if input is empty and Backspace/Delete is pressed
      if (
        (e.key === 'Backspace' || e.key === 'Delete') &&
        !value &&
        keywords.length > 0
      ) {
        setKeywords(keywords.slice(0, -1));
        e.preventDefault();
      }
    };
    // Remove keyword chip
    const handleRemoveKeyword = (idx: number) => {
      if (disabled) return; // Prevent changes if disabled
      setKeywords(keywords.filter((_, i) => i !== idx));
    };

    return (
      <div
        className={cn(
          'gap-1 group flex flex-col',
          disabled ? 'pointer-events-none' : ''
        )}
        aria-disabled={disabled ? 'true' : undefined}
      >
        <div
          className={cn(
            searchBarWrapperVariants({
              size,
              state: resolvedState,
            }),
            'group/wrapper'
          )}
        >
          {/* Chips + Input area */}
          <div className={cn(inputWrapperVariants())}>
            <div className={cn(chipContainerVariants(), inputGroupVariants())}>
              <span className={cn(searchIconVariants({ size }))}>
                <IconSearch size={iconSizeMap[size]} />
              </span>
              {/* Render chips */}
              {keywords.map((kw, idx) => (
                <span key={idx} className={chipVariants()}>
                  <span>{kw}</span>
                  <button
                    type="button"
                    className={cn(
                      chipRemoveButtonVariants(),
                      'bg-surface-primary'
                    )}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent event bubbling
                      e.preventDefault(); // Prevent default behavior
                      handleRemoveKeyword(idx);
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault(); // Prevent focus change on mouse down
                    }}
                    tabIndex={-1}
                    aria-label="Remove keyword"
                    disabled={disabled} // Disable chip remove button
                  >
                    <IconX size={8} />
                  </button>
                </span>
              ))}
              <input
                ref={ref}
                className={cn(inputVariants())}
                type="text"
                value={value}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder={
                  resolvedState === 'filled' || keywords.length > 0
                    ? ''
                    : placeholder
                }
                disabled={disabled}
                {...props}
              />
            </div>
            {(value || keywords.length > 0) && !disabled && (
              <button
                type="button"
                aria-label="Clear"
                className="text-shape-primary"
                onClick={() => {
                  // Clear both input text and keywords
                  if (onChange) {
                    onChange({
                      target: { value: '' },
                    } as React.ChangeEvent<HTMLInputElement>);
                  }
                  setKeywords([]); // Clear all chips/keywords
                }}
                tabIndex={-1}
              >
                <IconX size={20} />
              </button>
            )}
          </div>
          {/* Search button - always fixed at right */}
          <div className="flex h-full items-center">
            <button
              type="button"
              className={cn(
                buttonVariants({
                  size,
                })
              )}
              onClick={onSearch}
              disabled={disabled}
            >
              {searchButtonText}
            </button>
          </div>
        </div>
        {supportText && (
          <div
            className={cn(
              supportTextVariants(),
              'hidden group-focus-within:flex',
              resolvedState === 'filled' && 'flex'
            )}
          >
            {supportText}
          </div>
        )}
      </div>
    );
  }
);

SearchBar.displayName = 'SearchBar';
