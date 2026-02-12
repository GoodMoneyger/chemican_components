import React, {
  useState,
  useCallback,
  useRef,
  useMemo,
  useEffect,
  type KeyboardEvent,
  type ChangeEvent,
} from 'react';

import type { IconProp } from '../../lib/utils';
import { cn, renderIcon } from '../../lib/utils';
import { Tag } from '../Tag/Tag';
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
} from '../../lib/components/Popover';

import { inputWrapperVariants, iconVariants } from './TextField';

export interface TagInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'onKeyDown' | 'onSelect'
  > {
  value: string[];
  onChange: (value: string[]) => void;
  maxTags?: number;
  allowDuplicates?: boolean;
  separators?: string[];
  inputValue?: string;
  onInputChange?: (inputValue: string) => void;
  prefixIcon?: IconProp;
  trailingIcon?: IconProp;
  trailingIconSize?: number;
  prefixIconSize?: number;
  invalid?: boolean;
  helperText?: React.ReactNode;
  suggestions?: string[];
  renderSuggestion?: (item: string) => React.ReactNode;
  onSelect?: (value: string) => void;
}

export const TagInput = React.forwardRef<HTMLInputElement, TagInputProps>(
  (
    {
      value: tags,
      onChange,
      maxTags,
      allowDuplicates = true,
      separators = [',', '、'],
      placeholder = 'Add tags...',
      inputValue: controlledInputValue,
      onInputChange,
      helperText,
      prefixIcon,
      trailingIcon,
      trailingIconSize = 14,
      prefixIconSize = 14,
      invalid,
      disabled,
      className,
      suggestions,
      renderSuggestion,
      onSelect,
      ...inputProps
    },
    ref
  ) => {
    const [internalInputValue, setInternalInputValue] = useState('');
    const inputValue = controlledInputValue ?? internalInputValue;
    const setInputValue = onInputChange ?? setInternalInputValue;

    const [isFocused, setIsFocused] = useState(false);
    const [open, setOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState<number>(0);
    const [isComposing, setIsComposing] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    React.useImperativeHandle(ref, () => inputRef.current!);

    const separatorRegex = React.useMemo(() => {
      const escapedSeparators = separators.map((s) =>
        s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      );
      return new RegExp(escapedSeparators.join('|'));
    }, [separators]);

    const filteredSuggestions = useMemo(() => {
      if (!suggestions || !inputValue) return [];

      const query = inputValue.toLowerCase();
      return suggestions.filter((item) => {
        if (tags.includes(item)) return false;
        return item.toLowerCase().includes(query);
      });
    }, [suggestions, tags, inputValue]);

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

    // Helper: Check if tag is valid
    const isTagValid = useCallback(
      (tag: string): boolean => {
        if (!tag) return false;
        if (!allowDuplicates && tags.includes(tag)) return false;
        if (maxTags && tags.length >= maxTags) return false;
        return true;
      },
      [tags, allowDuplicates, maxTags]
    );

    // Helper: Add tag
    const addTag = useCallback(
      (rawTag: string) => {
        const tag = rawTag.trim();

        if (isTagValid(tag)) {
          onChange([...tags, tag]);
          setInputValue('');
        }
      },
      [tags, onChange, isTagValid, setInputValue]
    );

    const removeTag = useCallback(
      (index: number) => {
        const newTags = tags.filter((_, i) => i !== index);
        onChange(newTags);
      },
      [tags, onChange]
    );

    const handleSelectSuggestion = useCallback(
      (suggestion: string) => {
        onSelect?.(suggestion);
        addTag(suggestion);
        setOpen(false);
      },
      [onSelect, addTag]
    );

    const handleInputChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;

        const lastChar = newValue[newValue.length - 1];
        if (lastChar && separators.includes(lastChar)) {
          const tagValue = newValue.slice(0, -1);
          if (tagValue) {
            addTag(tagValue);
          }
          return;
        }

        const parts = newValue.split(separatorRegex);
        if (parts.length > 1) {
          parts.filter(Boolean).forEach((part) => addTag(part));
          return;
        }

        setInputValue(newValue);

        if (suggestions && newValue && filteredSuggestions.length > 0) {
          setOpen(true);
        }
      },
      [
        separators,
        separatorRegex,
        addTag,
        setInputValue,
        suggestions,
        filteredSuggestions.length,
      ]
    );

    const handleKeyDown = useCallback(
      (e: KeyboardEvent<HTMLInputElement>) => {
        if (isComposing) {
          return;
        }

        if (open && filteredSuggestions.length > 0) {
          switch (e.key) {
            case 'Escape':
              e.preventDefault();
              setOpen(false);
              return;

            case 'Enter': {
              e.preventDefault();
              const suggestion = filteredSuggestions[highlightedIndex];
              if (suggestion) {
                handleSelectSuggestion(suggestion);
              }
              return;
            }

            case 'ArrowDown':
              e.preventDefault();
              setHighlightedIndex((prev) =>
                prev < filteredSuggestions.length - 1 ? prev + 1 : prev
              );
              return;

            case 'ArrowUp':
              e.preventDefault();
              setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
              return;
          }
        }

        if (e.key === 'Enter' && inputValue.trim()) {
          e.preventDefault();
          addTag(inputValue);
        }

        if (
          (e.key === 'Backspace' || e.key === 'Delete') &&
          !inputValue &&
          tags.length > 0
        ) {
          e.preventDefault();
          removeTag(tags.length - 1);
        }
      },
      [
        isComposing,
        open,
        filteredSuggestions,
        highlightedIndex,
        handleSelectSuggestion,
        inputValue,
        tags.length,
        addTag,
        removeTag,
      ]
    );

    const handleBlur = useCallback(() => {
      if (inputValue.trim()) {
        addTag(inputValue);
      }
      setIsFocused(false);
      setOpen(false);
    }, [inputValue, addTag]);

    const handleFocus = useCallback(() => {
      setIsFocused(true);
      if (suggestions && inputValue && filteredSuggestions.length > 0) {
        setOpen(true);
      }
    }, [suggestions, inputValue, filteredSuggestions.length]);

    const isDisabled = disabled || (maxTags ? tags.length >= maxTags : false);
    const showPlaceholder = tags.length === 0 && !inputValue;
    const hasPrefix = !!prefixIcon;
    const hasTrailing = !!trailingIcon;

    const shouldShowPopover =
      !!suggestions && open && !isDisabled && filteredSuggestions.length > 0;

    const activeDescendantId =
      shouldShowPopover && highlightedIndex >= 0
        ? `taginput-item-${highlightedIndex}`
        : undefined;

    const inputContent = (
      <>
        <div
          className={cn(
            inputWrapperVariants({ invalid }),
            'min-h-11.5 !h-auto max-h-[200px] overflow-y-auto',
            className
          )}
        >
          {prefixIcon && (
            <div
              className={iconVariants({
                position: 'prefix',
              })}
            >
              {renderIcon(prefixIcon, { size: prefixIconSize })}
            </div>
          )}

          <div
            className={cn(
              'gap-xxs min-h-6 flex flex-1 flex-wrap items-center',
              hasPrefix ? 'pl-0' : 'pl-sm',
              hasTrailing ? 'pr-0' : 'pr-sm',
              'py-xxs'
            )}
          >
            {tags.map((tag, index) => (
              <Tag
                key={index}
                {...(!disabled && { onRemove: () => removeTag(index) })}
              >
                {tag}
              </Tag>
            ))}

            <input
              ref={inputRef}
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onCompositionStart={() => setIsComposing(true)}
              onCompositionEnd={() => setIsComposing(false)}
              placeholder={showPlaceholder ? placeholder : ''}
              disabled={isDisabled}
              className={cn(
                'min-w-24 min-h-6 flex-1 bg-transparent outline-none',
                'text-body-primary placeholder:text-body-placeholder',
                'disabled:text-body-disabled py-0 px-0 leading-[100%]'
              )}
              {...(suggestions && {
                role: 'combobox',
                'aria-expanded': shouldShowPopover,
                'aria-controls': 'taginput-listbox',
                'aria-activedescendant': activeDescendantId,
                'aria-autocomplete': 'list',
              })}
              {...inputProps}
            />
          </div>

          {trailingIcon && (
            <div
              className={iconVariants({
                position: 'trailing',
              })}
            >
              {renderIcon(trailingIcon, { size: trailingIconSize })}
            </div>
          )}
        </div>

        {helperText && (
          <p
            className={cn(
              'text-body-secondary mt-xxs text-sm',
              !isFocused && 'invisible'
            )}
          >
            {helperText}
          </p>
        )}
      </>
    );

    if (suggestions) {
      return (
        <Popover open={shouldShowPopover}>
          <PopoverAnchor asChild>
            <div>{inputContent}</div>
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
            <div
              id="taginput-listbox"
              role="listbox"
              className="max-h-[calc(40vh-56px)] overflow-x-hidden
                overflow-y-auto"
              style={{ overscrollBehaviorY: 'contain' }}
            >
              {filteredSuggestions.map((item, index) => {
                const isHighlighted = index === highlightedIndex;
                const itemId = `taginput-item-${index}`;
                return (
                  <div
                    key={itemId}
                    id={itemId}
                    ref={(el) => {
                      itemRefs.current[index] = el;
                    }}
                    role="option"
                    aria-selected={isHighlighted}
                    data-value={item}
                    onClick={() => handleSelectSuggestion(item)}
                    onPointerDown={(e) => {
                      e.preventDefault();
                      handleSelectSuggestion(item);
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
                    {renderSuggestion ? renderSuggestion(item) : item}
                  </div>
                );
              })}
            </div>
          </PopoverContent>
        </Popover>
      );
    }

    return inputContent;
  }
);

TagInput.displayName = 'TagInput';
