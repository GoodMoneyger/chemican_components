import React, { useEffect } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { IconSearch, IconX } from '@tabler/icons-react';

import { cn } from '../../lib/utils';

const searchBarWrapperVariants = cva(
  `rounded-sm bg-white min-h-8 focus-within:border-interactive-hover
  hover:border-interactive-hover flex w-auto max-w-full items-center
  justify-between border focus-within:shadow-[0_0_0_4px_#C9E8E5]`,
  {
    variants: {
      size: {
        sm: 'h-8 text-sm',
        md: 'h-10 text-base',
        lg: 'h-12 text-lg',
      },
      state: {
        default: 'border-interactive-default',
        filled: 'border-interactive-default',
        hover: '!border-interactive-hover',
        focus: '!border-interactive-hover !shadow-[0_0_0_4px_#C9E8E5]',
        disabled: `!border-interactive-default bg-input-disabled
        text-body-disabled pointer-events-none cursor-not-allowed`,
      },
    },
    defaultVariants: {
      size: 'md',
      state: 'default',
    },
  }
);

const inputWrapperVariants = cva(
  'gap-xxs px-sm flex flex-1 items-center', //overflow-x-auto
  {
    variants: {
      disabled: {
        true: 'bg-input-disabled',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
);

// New inputGroupVariants for search icon + input field //
const inputGroupVariants = cva(
  `rounded-l-sm gap-4 flex h-full flex-1 flex-row flex-nowrap items-center
  justify-between`,
  {
    variants: {
      disabled: {
        true: 'bg-input-disabled',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
);

const searchIconVariants = cva('text-shape-primary h-5 w-5 flex items-center', {
  variants: {
    state: {
      disabled: 'text-shape-interactive-disabled',
    },
  },
});

const inputVariants = cva(
  `text-md flex-1 bg-transparent leading-[100%] tracking-[0%] outline-none
  focus:placeholder-transparent`,
  {
    variants: {
      state: {
        default: 'text-body-disabled',
        disabled: 'bg-input-disabled text-body-disabled cursor-not-allowed', // background and text for disabled
      },
      disabled: {
        true: 'bg-input-disabled text-body-disabled cursor-not-allowed', // background and text for disabled
        false: 'text-body-primary',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
);

const buttonVariants = cva(
  `gap-4 rounded-r-sm bg-shape-accent-gray-pale px-sm py-xs text-shape-primary
  group-hover:border-t-interactive-hover group-hover:border-b-interactive-hover
  group-hover:border-l-interactive-default
  group-hover:text-interactive-primary-hover
  group-focus-within:border-t-interactive-hover
  group-focus-within:border-b-interactive-hover
  group-focus-within:border-l-interactive-default
  group-focus-within:text-shape-primary flex cursor-pointer flex-row
  items-center justify-center border-t border-b border-l text-center
  hover:cursor-pointer`,
  {
    variants: {
      size: {
        sm: 'h-8 text-sm',
        md: 'h-10 text-md',
        lg: 'h-12 text-lg',
      },
      state: {
        default: `border-t-interactive-default border-b-interactive-default
        border-l-interactive-default`,
        filled: `border-t-interactive-default border-b-interactive-default
        border-l-interactive-default`,
        hover: `!border-t-interactive-hover !border-b-interactive-hover
        !border-l-interactive-default !text-interactive-primary-hover`,
        focus: `!border-t-interactive-hover !border-b-interactive-hover
        !border-l-interactive-default !text-shape-primary`,
        disabled: `!border-t-interactive-default !border-b-interactive-default
        !border-l-interactive-default !bg-shape-accent-gray-pale
        !text-body-disabled !cursor-not-allowed`,
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
  'h-3 w-3 text-shape-primary flex items-center justify-center rounded-full'
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
  state?: 'default' | 'filled' | 'disabled' | 'hover' | 'focus';
  supportText?: string;
  searchButtonText?: string;
}

const iconSizeMap = {
  sm: 18,
  md: 22,
  lg: 26,
};

export const SearchBar: React.FC<SearchBarProps> = ({
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
}) => {
  const disabled = disabledProp || state === 'disabled';

  const [keywords, setKeywords] = React.useState<string[]>([]);

  let resolvedState: 'default' | 'filled' | 'disabled' | 'hover' | 'focus';

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
    if (prevResolvedState.current === 'filled' && resolvedState !== 'filled') {
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
          })
        )}
      >
        {/* Chips + Input area */}
        <div className={cn(inputWrapperVariants({ disabled }))}>
          <div
            className={cn(
              chipContainerVariants(),
              inputGroupVariants({ disabled })
            )}
          >
            <span
              className={cn(
                searchIconVariants({
                  ...(disabled && { state: 'disabled' }),
                })
              )}
            >
              <IconSearch size={iconSizeMap[size]} />
            </span>
            {/* Render chips */}
            {keywords.map((kw, idx) => (
              <span key={idx} className={chipVariants()}>
                <span>{kw}</span>
                <button
                  type="button"
                  className={chipRemoveButtonVariants()}
                  onClick={() => handleRemoveKeyword(idx)}
                  tabIndex={-1}
                  aria-label="Remove keyword"
                  disabled={disabled} // Disable chip remove button
                  style={{ backgroundColor: '#ffffff' }}
                >
                  <IconX size={8} />
                </button>
              </span>
            ))}
            <input
              className={cn(
                inputVariants({
                  disabled,
                  state: resolvedState === 'disabled' ? 'disabled' : 'default',
                })
              )}
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
          {value && !disabled && (
            <button
              type="button"
              aria-label="Clear"
              className="text-shape-primary"
              onClick={() => {
                if (onChange) {
                  onChange({
                    target: { value: '' },
                  } as React.ChangeEvent<HTMLInputElement>);
                }
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
                state: resolvedState,
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
            (resolvedState === 'filled' || resolvedState === 'focus') && 'flex'
          )}
        >
          {supportText}
        </div>
      )}
    </div>
  );
};
