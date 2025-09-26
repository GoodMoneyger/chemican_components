import React, { useEffect } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { IconSearch, IconX } from '@tabler/icons-react';

const searchBarWrapperVariants = cva(
  `rounded-sm bg-white min-h-8 flex w-auto max-w-full min-w-[448px] items-center
  justify-between border`,
  {
    variants: {
      size: {
        sm: 'h-8 text-sm w-auto max-w-full min-w-[400px]',
        md: 'h-10 text-base w-auto max-w-full min-w-[448px]',
        lg: 'h-12 text-lg w-auto max-w-full min-w-[500px]',
      },
      state: {
        default: 'border-[var(--border-color-interactive-default)]',
        hover: 'hover:border-[var(--border-color-interactive-hover)]',
        focus: `border-[var(--border-color-interactive-hover)]
        shadow-[0_0_0_4px_#C9E8E5]`,
        filled: 'border-[var(--border-color-interactive-default)]',
        disabled: `cursor-not-allowed
        border-[var(--border-color-interactive-default)]
        bg-[var(--background-color-input-disabled)]
        text-[var(--text-color-body-disabled)]`,
      },
    },
    defaultVariants: {
      size: 'md',
      state: 'default',
    },
  }
);

const inputWrapperVariants = cva(
  `min-w-0 flex flex-1 items-center gap-[var(--spacing-xxs)]
  px-[var(--spacing-sm)]`, //overflow-x-auto
  {
    variants: {
      size: {
        sm: '',
        md: '',
        lg: '',
      },
      disabled: {
        true: 'bg-[var(--background-color-input-disabled)]',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      disabled: false,
    },
  }
);

// New inputGroupVariants for search icon + input field //
const inputGroupVariants = cva(
  `min-w-0 rounded-l-sm gap-4] flex flex-1 flex-row flex-nowrap items-center
  justify-between`,
  {
    variants: {
      size: {
        sm: '',
        md: '',
        lg: '',
      },
      disabled: {
        true: 'bg-[var(--background-color-input-disabled)]',
        false: '',
      },
      state: {
        default: '',
        hover: '',
        focus: '',
        filled: '',
        disabled: '',
      },
    },
    defaultVariants: {
      size: 'md',
      disabled: false,
    },
  }
);

const searchIconVariants = cva(
  'flex items-center text-[var(--color-shape-primary)]',
  {
    variants: {
      size: {
        sm: 'h-[20px] w-[20px]',
        md: 'h-[20px] w-[20px]',
        lg: 'h-[20px] w-[20px]',
      },
      state: {
        default: 'text-[var(--color-shape-primary)]',
        hover: 'text-[var(--color-shape-primary)]',
        focus: 'text-[var(--color-shape-primary)]',
        filled: 'text-[var(--color-shape-primary)]',
        disabled: 'text-[var(--color-shape-interactive-disabled)]',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const inputVariants = cva(
  `min-w-[120px] flex-1 bg-transparent leading-[100%] tracking-[0%]
  text-[var(--text-size-md)] outline-none`,
  {
    variants: {
      size: {
        sm: '',
        md: '',
        lg: '',
      },
      state: {
        default: 'text-[var(--text-color-body-disabled)]',
        hover: '',
        focus: '',
        filled: '',
        disabled: `cursor-not-allowed
        bg-[var(--background-color-input-disabled)]
        text-[var(--text-color-body-disabled)]`, // background and text for disabled
      },
      disabled: {
        true: `cursor-not-allowed bg-[var(--background-color-input-disabled)]
        text-[var(--text-color-body-disabled)]`, // background and text for disabled
        false: 'text-body-primary',
      },
    },
    defaultVariants: {
      size: 'md',
      disabled: false,
    },
  }
);

const buttonVariants = cva(
  `gap-4 rounded-r-sm flex h-[40px] min-w-[60px] flex-row items-center
  justify-center border bg-[var(--color-shape-accent-gray-pale)]
  px-[var(--spacing-sm)] py-[var(--spacing-xs)] text-center
  text-[var(--text-size-md)]
  hover:border-[var(--border-color-interactive-hover)]
  hover:text-[var(--text-color-interactive-primary-hover)]`,
  {
    variants: {
      size: {
        sm: 'h-8 text-[var(--text-size-sm)]',
        md: 'h-10 text-[var(--text-size-md)]',
        lg: 'h-12 text-[var(--text-size-lg)]',
      },
      disabled: {
        true: 'bg-gray-100 text-gray-400 cursor-not-allowed',
        false: '',
      },
      state: {
        default: `border-[var(--border-color-interactive-default)]
        text-[var(--color-shape-primary)]`,
        hover: `border-t-[var(--border-color-interactive-hover)]
        border-r-[var(--border-color-interactive-hover)]
        border-b-[var(--border-color-interactive-hover)]
        border-l-[var(--border-color-interactive-default)]
        text-[var(--text-color-interactive-primary-hover)]`,
        focus: `border-l-[var(--border-color-interactive-default)]
        text-[var(--color-shape-primary)]`,
        filled: `border-[var(--border-color-interactive-default)]
        text-[var(--color-shape-primary)]`,
        disabled: `cursor-not-allowed
        border-l-[var(--border-color-interactive-disabled)]
        bg-[var(--color-shape-accent-gray-pale)]
        text-[--text-color-body-disabled]`,
      },
    },
    defaultVariants: {
      size: 'md',
      disabled: false,
    },
  }
);
const supportTextVariants = cva(
  'gap-2 text-sm flex flex-row text-[var(--text-color-body-secondary)]',
  {
    variants: {
      size: {
        sm: 'w-auto max-w-full min-w-[400px]',
        md: 'w-auto max-w-full min-w-[448px]',
        lg: 'w-auto max-w-full min-w-[500px]',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);
const chipVariants = cva(
  `gap-1 flex items-center rounded-full bg-[var(--color-shape-accent-gray-pale)]
  px-[var(--spacing-xs)] py-[var(--spacing-xxs)]
  text-[var(--text-color-accent-gray-strong)] text-[var(--text-md)]`,
  {
    variants: {
      size: {
        sm: 'h-[20px]',
        md: 'h-[22px]',
        lg: 'h-[22px]',
      },
      radius: {
        max: '', // rounded-full already applies max radius
      },
    },
    defaultVariants: {
      size: 'md',
      radius: 'max',
    },
  }
);
const chipRemoveButtonVariants = cva(
  `bg-white w-3 h-3 gap-2.5 flex items-center justify-center rounded-full
  p-[var(--spacing-xxs)] text-[var(--color-shape-primary)]`
);
const chipContainerVariants = cva(
  `gap-2 flex max-h-[48px] min-h-[32px] min-h-full flex-1 flex-row flex-nowrap
  items-center`
);
const chipIconX = cva(
  `p-1 gap-2.5 flex h-[12px] w-[12px] items-center justify-center rounded-full
  bg-[#FFFFFF]` // p-1 = 4px, gap-2.5 = 10px
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
  state?: 'default' | 'hover' | 'focus' | 'filled' | 'disabled';
  supportText?: string;
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
  ...props
}) => {
  const disabled = disabledProp || state === 'disabled';

  const [isFocused, setIsFocused] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false); //
  const [keywords, setKeywords] = React.useState<string[]>([]);
  const [firstFocus, setFirstFocus] = React.useState(false);

  // Automatically set keywords to ['ファイル'] if state is 'filled' from Storybook
  useEffect(() => {
    if (state === 'filled') {
      setKeywords(['ファイル']);
    }
  }, [state]);

  const resolvedState =
    typeof state === 'string'
      ? state
      : disabled
        ? 'disabled'
        : isFocused
          ? 'focus'
          : isHovered
            ? 'hover'
            : keywords.length > 0
              ? 'filled'
              : 'default';
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

  useEffect(() => {
    // If transitioning from 'focus' to another state, clear input value
    if (
      prevResolvedState.current === 'focus' &&
      resolvedState !== 'focus' &&
      value
    ) {
      if (onChange) {
        onChange({
          target: { value: '' },
        } as React.ChangeEvent<HTMLInputElement>);
      }
    }
    prevResolvedState.current = resolvedState;
  }, [resolvedState, value, onChange]);

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
  // Prevent focus when disabled
  const handleInputFocus = () => {
    if (!disabled) {
      setIsFocused(true);
      if (!firstFocus && !value && resolvedState === 'focus') {
        if (onChange) {
          // Set value to 'ファイル' only on first focus
          const event = {
            target: { value: 'ファイル' },
          } as React.ChangeEvent<HTMLInputElement>;
          onChange(event);
        }
        setFirstFocus(true);
      }
    }
  };
  const handleInputBlur = () => {
    if (!disabled) setIsFocused(false);
  };
  return (
    <div
      className="gap-1 flex flex-col"
      style={disabled ? { pointerEvents: 'none' } : {}}
      aria-disabled={disabled ? 'true' : undefined}
    >
      <div
        onMouseEnter={() => !disabled && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={twMerge(
          classNames(
            searchBarWrapperVariants({
              size,
              state: resolvedState,
            })
          )
        )}
      >
        {/* Chips + Input area */}
        <div
          className={twMerge(
            classNames(inputWrapperVariants({ size, disabled }))
          )}
        >
          <div
            className={twMerge(
              classNames(
                chipContainerVariants(),
                inputGroupVariants({ size, disabled, state: resolvedState })
              )
            )}
          >
            <span
              className={twMerge(
                classNames(
                  searchIconVariants({
                    size,
                    state: disabled ? 'disabled' : 'default',
                  })
                )
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
                >
                  <div className={chipIconX()}>
                    {/* <IconX size={32} /> */}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 6 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.2168 0.784518C5.37391 0.941625 5.37391 1.19635 5.2168 1.35345L1.35474 5.21552C1.19763 5.37263 0.942907 5.37263 0.785799 5.21552C0.628692 5.05842 0.628692 4.80369 0.785799 4.64659L4.64787 0.784518C4.80498 0.62741 5.0597 0.62741 5.2168 0.784518Z"
                        fill="#143028"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.785799 0.784518C0.942907 0.62741 1.19763 0.62741 1.35474 0.784518L5.2168 4.64659C5.37391 4.80369 5.37391 5.05842 5.2168 5.21552C5.0597 5.37263 4.80498 5.37263 4.64787 5.21552L0.785799 1.35345C0.628692 1.19635 0.628692 0.941625 0.785799 0.784518Z"
                        fill="#143028"
                      />
                    </svg>
                  </div>
                </button>
              </span>
            ))}
            <input
              className={twMerge(
                classNames(
                  inputVariants({ size, disabled, state: resolvedState })
                )
              )}
              type="text"
              value={value}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder={
                resolvedState === 'filled' || resolvedState === 'focus'
                  ? ''
                  : !isFocused && !value
                    ? placeholder
                    : ''
              }
              disabled={disabled}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              {...props}
            />
          </div>
          {value && !disabled && (
            <button
              type="button"
              aria-label="Clear"
              className="text-[var(--color-shape-primary)]"
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
            className={twMerge(
              classNames(
                buttonVariants({
                  size,
                  disabled,
                  state: resolvedState,
                })
              )
            )}
            onClick={onSearch}
            disabled={disabled}
          >
            検索
          </button>
        </div>
      </div>
      {(isFocused || resolvedState === 'focus' || resolvedState === 'filled') &&
        supportText && (
          <div className={supportTextVariants({ size })}>{supportText}</div>
        )}
    </div>
  );
};
