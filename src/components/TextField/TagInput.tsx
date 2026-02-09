import React, {
  useState,
  useCallback,
  useRef,
  type KeyboardEvent,
  type ChangeEvent,
} from 'react';

import type { IconProp } from '../../lib/utils';
import { cn, renderIcon } from '../../lib/utils';
import { Tag } from '../Tag/Tag';

import { inputWrapperVariants, iconVariants } from './TextField';

export interface TagInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'onKeyDown'
  > {
  tags: string[];
  onChange: (tags: string[]) => void;
  maxTags?: number;
  allowDuplicates?: boolean;
  separators?: string[];
  placeholder?: string;
  inputValue?: string;
  onInputChange?: (value: string) => void;
  prefixIcon?: IconProp;
  trailingIcon?: IconProp;
  onTrailingIconClick?: () => void;
  trailingIconSize?: number;
  prefixIconSize?: number;
  invalid?: boolean;
  className?: string;
  helperText?: string;
}

export const TagInput = React.forwardRef<HTMLInputElement, TagInputProps>(
  (
    {
      tags,
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
      onTrailingIconClick,
      trailingIconSize = 14,
      prefixIconSize = 14,
      invalid,
      disabled,
      className,
      ...inputProps
    },
    ref
  ) => {
    // Internal state for input text
    const [internalInputValue, setInternalInputValue] = useState('');
    const inputValue = controlledInputValue ?? internalInputValue;
    const setInputValue = onInputChange ?? setInternalInputValue;

    // Track focus state for helper text
    const [isFocused, setIsFocused] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    // Combine refs
    React.useImperativeHandle(ref, () => inputRef.current!);

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

    // Helper: Remove tag
    const removeTag = useCallback(
      (index: number) => {
        const newTags = tags.filter((_, i) => i !== index);
        onChange(newTags);
      },
      [tags, onChange]
    );

    // Handle input change - check for separators
    const handleInputChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;

        // Check if any separator was just typed
        const lastChar = newValue[newValue.length - 1];
        if (lastChar && separators.includes(lastChar)) {
          // Remove the separator and add the tag
          const tagValue = newValue.slice(0, -1);
          if (tagValue) {
            addTag(tagValue);
          }
          return;
        }

        // Check if value contains separator (paste scenario)
        const hasSeparator = separators.some((sep) => newValue.includes(sep));
        if (hasSeparator) {
          // Split by separators and add all tags
          const regex = new RegExp(
            `[${separators.map((s) => `\\${s}`).join('')}]`
          );
          const parts = newValue.split(regex).filter(Boolean);
          parts.forEach((part) => addTag(part));
          return;
        }

        setInputValue(newValue);
      },
      [separators, addTag, setInputValue]
    );

    // Handle key down - Enter and Backspace
    const handleKeyDown = useCallback(
      (e: KeyboardEvent<HTMLInputElement>) => {
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
      [inputValue, tags.length, addTag, removeTag]
    );

    // Handle blur - add current value as tag if not empty
    const handleBlur = useCallback(() => {
      if (inputValue.trim()) {
        addTag(inputValue);
      }
      setIsFocused(false);
    }, [inputValue, addTag]);

    const isDisabled = disabled || (maxTags ? tags.length >= maxTags : false);
    const showPlaceholder = tags.length === 0 && !inputValue;
    const hasPrefix = !!prefixIcon;
    const hasTrailing = !!trailingIcon;
    const isTrailingInteractive = !!onTrailingIconClick;

    return (
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
                interactive: false,
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
              onFocus={() => setIsFocused(true)}
              onBlur={handleBlur}
              placeholder={showPlaceholder ? placeholder : ''}
              disabled={isDisabled}
              className={cn(
                'min-w-24 min-h-6 flex-1 bg-transparent outline-none',
                'text-body-primary placeholder:text-body-placeholder',
                'disabled:text-body-disabled py-0 px-0 leading-[100%]'
              )}
              {...inputProps}
            />
          </div>

          {trailingIcon && (
            <div
              className={iconVariants({
                position: 'trailing',
                interactive: isTrailingInteractive,
              })}
              onClick={isTrailingInteractive ? onTrailingIconClick : undefined}
            >
              {renderIcon(trailingIcon, { size: trailingIconSize })}
            </div>
          )}
        </div>

        {/* Helper text - always takes up space to prevent layout jumps */}
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
  }
);

TagInput.displayName = 'TagInput';
