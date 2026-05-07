import React, {
  useState,
  useMemo,
  useEffect,
  useCallback,
  useRef,
} from 'react';
import { IconLoader } from '@tabler/icons-react';

import {
  Popover,
  PopoverAnchor,
  PopoverContent,
} from '../../lib/components/Popover';
import { cn } from '../../utils';
import { useDebounce } from '../../lib/hooks';

import { TextField, type TextFieldProps } from './TextField';

/**
 * Suggestion value can be either a simple string or an object with value/label
 */
export type SuggestionValue =
  | string
  | { value: string; label?: string; [key: string]: unknown };

export interface AutoSuggestProps
  extends Omit<TextFieldProps, 'onChange' | 'value' | 'onSelect'> {
  value: string;
  onChange: (value: string) => void;
  suggestions?: SuggestionValue[];
  onSearch?: (query: string) => Promise<SuggestionValue[]>;
  onSelect?: (value: SuggestionValue) => void;
  renderSuggestion?: (item: SuggestionValue) => React.ReactNode;
  getSuggestionValue?: (item: SuggestionValue) => string;
  getSuggestionKey?: (item: SuggestionValue, index: number) => string;
  debounceMs?: number;
  minQueryLength?: number;
  loadingText?: React.ReactNode;
}

/**
 * Default helper to extract string value from suggestion
 */
const defaultGetSuggestionValue = (item: SuggestionValue): string => {
  if (typeof item === 'string') return item;
  return item.label || item.value || String(item);
};

/**
 * Default helper to generate unique key for suggestion
 */
const defaultGetSuggestionKey = (
  item: SuggestionValue,
  index: number
): string => {
  if (typeof item === 'string') return `${item}-${index}`;
  return `${item.value || item}-${index}`;
};

/**
 * AutoSuggest component - TextField with dropdown suggestions
 *
 * @example
 * // Static suggestions
 * <TextField.AutoSuggest
 *   suggestions={['React', 'Vue', 'Angular']}
 *   value={value}
 *   onChange={setValue}
 * />
 *
 * @example
 * // Async suggestions
 * <TextField.AutoSuggest
 *   onSearch={async (query) => fetchSuggestions(query)}
 *   value={value}
 *   onChange={setValue}
 * />
 */
export const AutoSuggest = React.forwardRef<HTMLInputElement, AutoSuggestProps>(
  (props, ref) => {
    const {
      value,
      onChange,
      suggestions: staticSuggestions,
      onSearch,
      onSelect,
      renderSuggestion,
      getSuggestionValue = defaultGetSuggestionValue,
      getSuggestionKey = defaultGetSuggestionKey,
      debounceMs = 300,
      minQueryLength = 0,
      loadingText = 'Loading...',
      disabled,
      onFocus: onFocusProp,
      onBlur: onBlurProp,
      onKeyDown: onKeyDownProp,
      ...textFieldProps
    } = props;

    const [open, setOpen] = useState(false);
    const [asyncSuggestions, setAsyncSuggestions] = useState<SuggestionValue[]>(
      []
    );
    const [isLoading, setIsLoading] = useState(false);
    const abortControllerRef = useRef<AbortController | null>(null);
    const [highlightedIndex, setHighlightedIndex] = useState<number>(0);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const debouncedQuery = useDebounce(value, debounceMs);

    const filteredSuggestions = useMemo(() => {
      if (!staticSuggestions) {
        return asyncSuggestions;
      }

      if (!value || value.length < minQueryLength) {
        return staticSuggestions;
      }

      const query = value.toLowerCase();
      return staticSuggestions.filter((item) => {
        const suggestionValue = getSuggestionValue(item).toLowerCase();
        return suggestionValue.includes(query);
      });
    }, [
      staticSuggestions,
      asyncSuggestions,
      value,
      minQueryLength,
      getSuggestionValue,
    ]);

    useEffect(() => {
      if (!onSearch) return;

      if (debouncedQuery.length < minQueryLength) {
        setAsyncSuggestions([]);
        setOpen(false);
        setIsLoading(false);
        return;
      }

      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      abortControllerRef.current = new AbortController();
      setIsLoading(true);

      onSearch(debouncedQuery)
        .then((results) => {
          setAsyncSuggestions(results);
        })
        .catch((error) => {
          // Only log if not aborted
          if (error.name !== 'AbortError') {
            console.debug('AutoSuggest search failed:', error);
          }
          setAsyncSuggestions([]);
        })
        .finally(() => {
          setIsLoading(false);
        });

      return () => {
        if (abortControllerRef.current) {
          abortControllerRef.current.abort();
        }
      };
    }, [debouncedQuery, onSearch, minQueryLength]);

    const handleSelect = useCallback(
      (item: SuggestionValue) => {
        const newValue = getSuggestionValue(item);
        onChange(newValue);
        onSelect?.(item);
        setOpen(false);
      },
      [onChange, onSelect, getSuggestionValue]
    );

    const handleFocus = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        if (!disabled) {
          setOpen(true);
        }
        onFocusProp?.(e);
      },
      [disabled, onFocusProp]
    );

    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setOpen(false);
        onBlurProp?.(e);
      },
      [onBlurProp]
    );

    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        onChange(newValue);

        if (!open && filteredSuggestions.length > 0) {
          setOpen(true);
        }
      },
      [onChange, open, filteredSuggestions.length]
    );

    useEffect(() => {
      setHighlightedIndex(0);
      itemRefs.current = [];
    }, [filteredSuggestions]);

    useEffect(() => {
      if (open && highlightedIndex >= 0 && itemRefs.current[highlightedIndex]) {
        itemRefs.current[highlightedIndex]?.scrollIntoView({
          block: 'nearest',
        });
      }
    }, [highlightedIndex, open]);

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!open) {
          onKeyDownProp?.(e);
          return;
        }

        switch (e.key) {
          case 'Escape':
            e.preventDefault();
            setOpen(false);
            break;

          case 'Enter': {
            e.preventDefault();
            const item = filteredSuggestions[highlightedIndex];
            if (item) {
              handleSelect(item);
            }
            break;
          }

          case 'ArrowDown':
            e.preventDefault();
            setHighlightedIndex((prev) =>
              prev < filteredSuggestions.length - 1 ? prev + 1 : prev
            );
            break;

          case 'ArrowUp':
            e.preventDefault();
            setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
            break;
        }

        onKeyDownProp?.(e);
      },
      [open, highlightedIndex, filteredSuggestions, handleSelect, onKeyDownProp]
    );

    const shouldShowPopover =
      open && !disabled && (filteredSuggestions.length > 0 || isLoading);

    const activeDescendantId =
      shouldShowPopover && highlightedIndex >= 0
        ? `autosuggest-item-${highlightedIndex}`
        : undefined;

    return (
      <Popover open={shouldShowPopover}>
        <PopoverAnchor asChild>
          <TextField
            ref={ref}
            value={value}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            role="combobox"
            aria-expanded={shouldShowPopover}
            aria-controls="autosuggest-listbox"
            aria-activedescendant={activeDescendantId}
            aria-autocomplete="list"
            {...textFieldProps}
          />
        </PopoverAnchor>

        <PopoverContent
          align="start"
          sideOffset={4}
          className="p-0"
          style={{
            width: 'var(--radix-popover-trigger-width)',
            maxWidth: '600px',
          }}
          onOpenAutoFocus={(e) => {
            e.preventDefault();
          }}
        >
          {isLoading ? (
            <div
              className="gap-xs py-6 text-body-secondary flex items-center
                justify-center"
            >
              <IconLoader className="h-4 w-4 animate-spin" />
              <span className="text-sm">{loadingText}</span>
            </div>
          ) : (
            <div
              id="autosuggest-listbox"
              role="listbox"
              className={cn(
                'max-h-[calc(40vh-56px)] overflow-x-hidden overflow-y-auto'
              )}
              style={{ overscrollBehaviorY: 'contain' }}
            >
              {filteredSuggestions.map((item, index) => {
                const itemValue = getSuggestionValue(item);
                const isHighlighted = index === highlightedIndex;
                const itemId = `autosuggest-item-${index}`;
                return (
                  <div
                    key={getSuggestionKey(item, index)}
                    id={itemId}
                    ref={(el) => {
                      itemRefs.current[index] = el;
                    }}
                    role="option"
                    aria-selected={isHighlighted}
                    data-value={itemValue}
                    onClick={() => handleSelect(item)}
                    onPointerDown={(e) => {
                      e.preventDefault();
                      handleSelect(item);
                    }}
                    onMouseEnter={() => setHighlightedIndex(index)}
                    className={cn(
                      `min-h-10 px-lg py-1.5 relative flex cursor-default
                        items-center`,
                      'break-words whitespace-normal outline-none select-none',
                      'hover:bg-interactive-neutral-hover',
                      isHighlighted && 'bg-interactive-neutral-hover'
                    )}
                  >
                    {renderSuggestion
                      ? renderSuggestion(item)
                      : getSuggestionValue(item)}
                  </div>
                );
              })}
            </div>
          )}
        </PopoverContent>
      </Popover>
    );
  }
);

AutoSuggest.displayName = 'AutoSuggest';
