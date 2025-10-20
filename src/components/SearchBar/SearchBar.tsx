import React, { useEffect } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { IconSearch, IconX } from '@tabler/icons-react';

import { cn } from '../../lib/utils';
import { Tooltip, TooltipProvider } from '../Tooltip/Tooltip';

const searchBarWrapperVariants = cva(
  `rounded-sm bg-surface-primary border-interactive-default
  hover:border-interactive-hover focus-within:border-interactive-hover
  focus-within:ring-interactive-focused flex w-auto max-w-full flex-col
  justify-center overflow-hidden border focus-within:ring-4`,
  {
    variants: {
      size: {
        sm: 'min-h-8 text-sm',
        md: 'min-h-10 text-md',
        lg: 'min-h-11.5 text-md',
      },
      state: {
        default: '',
        filled: '',
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

const inputWrapperClasses =
  'flex items-center gap-xxs px-sm disabled:bg-input-disabled h-full flex-1';

const searchIconClasses =
  'text-shape-primary disabled:text-shape-interactive-disabled items-center';

const inputClasses = `text-md text-body-primary disabled:bg-input-disabled
  disabled:text-body-disabled placeholder:text-body-disabled flex-1
  bg-transparent leading-[100%] tracking-[0%] outline-none
  focus:placeholder-transparent disabled:cursor-not-allowed h-full`;

const buttonVariants = cva(
  `bg-shape-accent-gray-pale px-sm py-xs text-md text-shape-primary gap-xxs
  border-l-interactive-default hover:bg-interactive-neutral-hover
  hover:text-interactive-primary-hover focus:bg-shape-accent-gray-pale
  focus:text-interactive-primary-hover
  group-hover/wrapper:bg-shape-accent-gray-pale
  disabled:bg-shape-accent-gray-pale disabled:text-body-disabled
  disabled:hover:bg-shape-accent-gray-pale disabled:hover:text-body-disabled
  flex h-full cursor-pointer flex-row items-center justify-center border-l
  text-center disabled:cursor-not-allowed`,
  {
    variants: {
      size: {
        sm: 'text-sm min-h-8',
        md: 'text-md min-h-10',
        lg: 'text-md min-h-11.5',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);
const supportTextClasses = 'gap-2 text-sm text-body-secondary flex-row';
const chipVariants = cva(
  `gap-1 bg-shape-accent-gray-pale px-xs py-xxs text-md text-accent-gray-strong
  flex flex-shrink-0 items-center rounded-full`,
  {
    variants: {
      size: {
        sm: 'text-sm h-5 w-20',
        md: 'text-md h-6 w-24',
        lg: 'text-md h-7 w-28',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);
const chipRemoveButtonClasses = `h-3 w-3 text-shape-primary flex items-center justify-center rounded-full
  disabled:cursor-not-allowed disabled:opacity-50`;

const chipContainerClasses =
  'flex flex-wrap items-start gap-1 w-full p-2 bg-surface-secondary/50 border-t border-interactive-default/20';

const inputRowClasses =
  'flex items-center justify-between h-full min-h-inherit flex-shrink-0';

export interface SearchBarProps
  extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      'size' | 'value' | 'onChange'
    >,
    VariantProps<typeof searchBarWrapperVariants> {
  value?: string;
  className?: string; // Fixed typo
  onChange?: (value: string) => void; // Simplified to just pass the string value
  onSearch?: (searchValue: string, keywords: string[]) => void; // Updated to pass both input and chips
  placeholder?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  state?: 'default' | 'filled' | 'disabled';
  supportText?: string;
  searchButtonText?: string;
  maxKeywords?: number; // Maximum number of keywords allowed
  allowDuplicates?: boolean; // Whether to allow duplicate keywords
  onKeywordsChange?: (keywords: string[]) => void; // New prop for keyword changes
  // i18n props
  removeChipText?: string; // Text for remove chip tooltip
  clearAllText?: string; // Text for clear all tooltip
}

const iconSizeMap = {
  sm: 16, // 50% of h-8 (32px)
  md: 20, // 50% of h-10 (40px)
  lg: 24, // 50% of h-12 (48px)
};

// Helper function to calculate if text will be truncated
const getTextWidth = (text: string, fontSize: number): number => {
  // Approximate character width based on font size
  // This is an estimation - for exact measurements you'd need canvas.measureText()
  const avgCharWidth = fontSize * 0.6; // Average character width relative to font size
  return text.length * avgCharWidth;
};

const isTextTruncated = (text: string, size: 'sm' | 'md' | 'lg'): boolean => {
  const chipWidths = {
    sm: 80, // w-20 = 80px
    md: 96, // w-24 = 96px
    lg: 112, // w-28 = 112px
  };

  const fontSizes = {
    sm: 14, // text-sm
    md: 16, // text-md
    lg: 16, // text-md
  };

  const padding = 16; // px-xs = 8px each side + icon space
  const removeButtonWidth = 16; // Remove button + margin
  const availableWidth = chipWidths[size] - padding - removeButtonWidth;

  const textWidth = getTextWidth(text, fontSizes[size]);

  return textWidth > availableWidth;
};

export const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  (
    {
      size = 'md',
      state,
      value = '',
      className,
      onChange,
      onSearch,
      placeholder,
      disabled: disabledProp,
      supportText,
      searchButtonText = '検索',
      maxKeywords = 10,
      allowDuplicates = false,
      onKeywordsChange,
      removeChipText = 'チップを削除',
      clearAllText = 'すべてクリア',
      ...props
    },
    ref
  ) => {
    const disabled = disabledProp || state === 'disabled';

    const [keywords, setKeywords] = React.useState<string[]>([]);
    const [focusedChipIndex, setFocusedChipIndex] = React.useState<number>(-1);
    const [editingChipIndex, setEditingChipIndex] = React.useState<number>(-1);
    const [editingValue, setEditingValue] = React.useState<string>('');
    const [internalValue, setInternalValue] = React.useState<string>(value);

    // Sync internal value with prop value only when not actively editing
    const inputRef = React.useRef<HTMLInputElement>(null);
    useEffect(() => {
      // Only sync if input is not currently focused to prevent overwriting user input
      if (document.activeElement !== inputRef.current) {
        setInternalValue(value);
      }
    }, [value]);

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

    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return; // Prevent changes if disabled
      const newValue = e.target.value;
      setInternalValue(newValue);
      if (onChange) onChange(newValue);
    };

    // Handle Enter key to confirm keyword
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (disabled) return;

      // Handle arrow key navigation
      if (e.key === 'ArrowLeft' && !internalValue && keywords.length > 0) {
        e.preventDefault();
        const newIndex =
          focusedChipIndex === -1
            ? keywords.length - 1
            : Math.max(0, focusedChipIndex - 1);
        setFocusedChipIndex(newIndex);
        return;
      }

      if (e.key === 'ArrowRight' && focusedChipIndex !== -1) {
        e.preventDefault();
        const newIndex =
          focusedChipIndex === keywords.length - 1 ? -1 : focusedChipIndex + 1;
        setFocusedChipIndex(newIndex);
        return;
      }

      // Handle Enter to add keyword
      if (e.key === 'Enter' && internalValue.trim()) {
        e.preventDefault();
        const trimmedValue = internalValue.trim();

        // Basic input validation
        if (trimmedValue.length > 100) {
          return; // Don't add overly long keywords
        }

        // Check for duplicates if not allowed
        if (!allowDuplicates && keywords.includes(trimmedValue)) {
          return; // Don't add duplicate
        }

        // Check maximum limit
        if (keywords.length >= maxKeywords) {
          return; // Don't exceed limit
        }

        const newKeywords = [...keywords, trimmedValue];
        setKeywords(newKeywords);
        // Notify parent of keyword changes
        if (onKeywordsChange) {
          onKeywordsChange(newKeywords);
        }
        // Clear the input value
        setInternalValue('');
        if (onChange) {
          onChange('');
        }
        setFocusedChipIndex(-1);
        return;
      }

      // Handle Enter to edit focused chip
      if (
        e.key === 'Enter' &&
        focusedChipIndex !== -1 &&
        !internalValue &&
        keywords[focusedChipIndex]
      ) {
        e.preventDefault();
        setEditingChipIndex(focusedChipIndex);
        setEditingValue(keywords[focusedChipIndex]);
        setFocusedChipIndex(-1);
        return;
      }

      // Delete focused chip or last chip
      if (
        (e.key === 'Backspace' || e.key === 'Delete') &&
        !internalValue &&
        keywords.length > 0
      ) {
        e.preventDefault();
        if (focusedChipIndex !== -1) {
          // Delete focused chip
          const newLength = keywords.length - 1;
          handleRemoveKeyword(focusedChipIndex);
          // If no chips remain, set to -1; otherwise adjust focus within bounds
          setFocusedChipIndex(
            newLength === 0 ? -1 : Math.min(focusedChipIndex, newLength - 1)
          );
        } else {
          // Delete last chip
          const newKeywords = keywords.slice(0, -1);
          setKeywords(newKeywords);
          if (onKeywordsChange) {
            onKeywordsChange(newKeywords);
          }
        }
        return;
      }

      // Clear focus when typing
      if (e.key.length === 1) {
        setFocusedChipIndex(-1);
      }
    };
    // Remove keyword chip
    const handleRemoveKeyword = (idx: number) => {
      if (disabled) return; // Prevent changes if disabled
      const newKeywords = keywords.filter((_, i) => i !== idx);
      setKeywords(newKeywords);
      if (onKeywordsChange) {
        onKeywordsChange(newKeywords);
      }
      setFocusedChipIndex(-1);
      setEditingChipIndex(-1);
    };

    // Handle chip editing
    const handleChipEdit = (idx: number, newValue: string) => {
      if (disabled) return;
      const trimmedValue = newValue.trim();

      if (!trimmedValue) {
        // Remove chip if empty
        handleRemoveKeyword(idx);
        return;
      }

      // Check for duplicates if not allowed
      if (
        !allowDuplicates &&
        keywords.some((kw, i) => i !== idx && kw === trimmedValue)
      ) {
        return; // Don't update to duplicate
      }

      const newKeywords = [...keywords];
      newKeywords[idx] = trimmedValue;
      setKeywords(newKeywords);
      if (onKeywordsChange) {
        onKeywordsChange(newKeywords);
      }
      setEditingChipIndex(-1);
      setEditingValue('');
    };

    const handleChipKeyDown = (
      e: React.KeyboardEvent<HTMLInputElement>,
      idx: number
    ) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleChipEdit(idx, editingValue);
      } else if (e.key === 'Escape') {
        e.preventDefault();
        setEditingChipIndex(-1);
        setEditingValue('');
      }
    };

    return (
      <TooltipProvider>
        <div
          className={cn(
            'gap-0 group flex flex-col',
            disabled ? 'pointer-events-none' : '',
            className
          )}
          aria-disabled={disabled ? 'true' : undefined}
        >
          {/* Main search bar with dynamic height */}
          <div
            className={cn(
              searchBarWrapperVariants({
                size,
                state: resolvedState,
              }),
              'group/wrapper'
            )}
          >
            {/* Input row - always at top */}
            <div className={cn(inputRowClasses)}>
              <div className={cn(inputWrapperClasses)}>
                {/* Left side: Icon + Input */}
                <div className="gap-xxs min-w-0 flex flex-1 items-center">
                  <span className={searchIconClasses}>
                    <IconSearch size={iconSizeMap[size]} />
                  </span>
                  <input
                    ref={(node) => {
                      // @ts-expect-error - We need to set the ref for focus checking
                      inputRef.current = node;
                      if (typeof ref === 'function') {
                        ref(node);
                      } else if (ref) {
                        ref.current = node;
                      }
                    }}
                    className={cn(inputClasses, 'min-w-[120px] flex-1')}
                    type="text"
                    value={internalValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder={
                      keywords.length === 0
                        ? placeholder
                        : keywords.length >= maxKeywords
                          ? `Maximum ${maxKeywords} keywords`
                          : ''
                    }
                    disabled={disabled || keywords.length >= maxKeywords}
                    {...props}
                  />
                </div>

                {/* Right side: Clear button */}
                {(internalValue || keywords.length > 0) && !disabled && (
                  <Tooltip
                    content={clearAllText}
                    intent="accent"
                    className="min-w-fit"
                  >
                    <button
                      type="button"
                      aria-label={clearAllText}
                      className="text-shape-primary
                        hover:text-interactive-primary-hover p-1 rounded w-6 h-6
                        flex flex-shrink-0 cursor-pointer items-center
                        justify-center transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();

                        setInternalValue('');
                        if (onChange) {
                          onChange('');
                        }
                        setKeywords([]);
                        if (onKeywordsChange) {
                          onKeywordsChange([]);
                        }
                        setFocusedChipIndex(-1);
                        setEditingChipIndex(-1);
                        setEditingValue('');

                        // Refocus the input after clearing
                        if (inputRef.current) {
                          inputRef.current.focus();
                        }
                      }}
                      onMouseDown={(e) => {
                        e.preventDefault();
                      }}
                      tabIndex={0}
                    >
                      <IconX size={16} />
                    </button>
                  </Tooltip>
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
                  onClick={() => {
                    if (onSearch) {
                      onSearch(internalValue, keywords);
                    }
                  }}
                  disabled={disabled}
                >
                  {searchButtonText}
                </button>
              </div>
            </div>

            {/* Chips section - wrappable area that expands search bar height */}
            {keywords.length > 0 && (
              <div
                className={cn(chipContainerClasses)}
                role="group"
                aria-label="Search keywords"
              >
                {keywords.map((kw, idx) => {
                  const isTruncated = isTextTruncated(kw, size);

                  return (
                    <span
                      key={idx}
                      className={cn(
                        chipVariants({ size }),
                        focusedChipIndex === idx &&
                          'ring-interactive-focused ring-2',
                        editingChipIndex === idx &&
                          'ring-interactive-focused ring-2',
                        'group relative' // Add group for hover effects
                      )}
                    >
                      {editingChipIndex === idx ? (
                        <input
                          type="text"
                          value={editingValue}
                          onChange={(e) => setEditingValue(e.target.value)}
                          onKeyDown={(e) => handleChipKeyDown(e, idx)}
                          onBlur={() => handleChipEdit(idx, editingValue)}
                          className="text-xs min-w-0 flex-1 bg-transparent
                            outline-none"
                          autoFocus
                        />
                      ) : (
                        <>
                          {/* Only show tooltip for truncated text, no action hints */}
                          {isTruncated ? (
                            <Tooltip content={kw} side="top" intent="normal">
                              <span
                                className="min-w-0 leading-tight
                                  hover:text-accent-gray-strong flex-1
                                  cursor-pointer truncate transition-colors"
                                onClick={() => {
                                  if (!disabled) {
                                    setEditingChipIndex(idx);
                                    setEditingValue(kw);
                                    setFocusedChipIndex(-1);
                                  }
                                }}
                              >
                                {kw}
                              </span>
                            </Tooltip>
                          ) : (
                            <span
                              className="min-w-0 leading-tight flex-1
                                cursor-pointer truncate transition-colors"
                              onClick={() => {
                                if (!disabled) {
                                  setEditingChipIndex(idx);
                                  setEditingValue(kw);
                                  setFocusedChipIndex(-1);
                                }
                              }}
                            >
                              {kw}
                            </span>
                          )}

                          {/* Remove button with enhanced visibility on hover */}
                          <Tooltip
                            content={removeChipText}
                            side="top"
                            intent="accent"
                            className="min-w-fit"
                          >
                            <button
                              type="button"
                              className={cn(
                                chipRemoveButtonClasses,
                                `bg-surface-primary ml-1 flex-shrink-0
                                  cursor-pointer`
                              )}
                              onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                handleRemoveKeyword(idx);
                              }}
                              onMouseDown={(e) => {
                                e.preventDefault();
                              }}
                              tabIndex={0}
                              aria-label={`${removeChipText}: ${kw}`}
                              disabled={disabled}
                            >
                              <IconX size={8} />
                            </button>
                          </Tooltip>
                        </>
                      )}
                    </span>
                  );
                })}
              </div>
            )}
          </div>

          {supportText && (
            <div
              className={cn(
                supportTextClasses,
                'hidden group-focus-within:flex',
                resolvedState === 'filled' && 'flex',
                'mt-1'
              )}
            >
              {supportText}
            </div>
          )}
        </div>
      </TooltipProvider>
    );
  }
);

SearchBar.displayName = 'SearchBar';
