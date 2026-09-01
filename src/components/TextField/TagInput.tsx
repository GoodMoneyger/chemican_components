import React, {
  useState,
  useCallback,
  useRef,
  type KeyboardEvent,
  type ChangeEvent,
} from 'react';

import type { IconProp } from '../../lib/utils';
import { cn, renderIcon } from '../../lib/utils';
import { useCompositionGuard } from '../../lib/hooks';
import { Tag } from '../Tag/Tag';

import { inputWrapperVariants, iconVariants } from './TextField';

export interface TagInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'onKeyDown'
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
  onValidateTag?: (tag: string) => { valid: boolean; error?: React.ReactNode };
  defaultValidationError?: React.ReactNode;
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
      onValidateTag,
      defaultValidationError = 'Invalid tag',
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

    const { compositionHandlers, guardKeyHandler } =
      useCompositionGuard<HTMLInputElement>();

    // Track validation error
    const [validationError, setValidationError] =
      useState<React.ReactNode>(null);

    const inputRef = useRef<HTMLInputElement>(null);

    React.useImperativeHandle(ref, () => inputRef.current!);

    const separatorRegex = React.useMemo(() => {
      const escapedSeparators = separators.map((s) =>
        s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      );
      return new RegExp(escapedSeparators.join('|'));
    }, [separators]);

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

        // Check built-in validation first
        if (!isTagValid(tag)) {
          return;
        }

        // Run custom validation if provided
        if (onValidateTag) {
          const validationResult = onValidateTag(tag);
          if (!validationResult.valid) {
            // Set error message (custom or default)
            setValidationError(
              validationResult.error ?? defaultValidationError
            );
            return;
          }
        }

        // All validation passed - add the tag and clear any errors
        onChange([...tags, tag]);
        setInputValue('');
        setValidationError(null);
      },
      [
        tags,
        onChange,
        isTagValid,
        setInputValue,
        onValidateTag,
        defaultValidationError,
      ]
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
      },
      [separators, separatorRegex, addTag, setInputValue]
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
      // Clear validation error on blur
      setValidationError(null);
    }, [inputValue, addTag]);

    const isDisabled = disabled || (maxTags ? tags.length >= maxTags : false);
    const showPlaceholder = tags.length === 0 && !inputValue;
    const hasPrefix = !!prefixIcon;
    const hasTrailing = !!trailingIcon;

    return (
      <>
        <div
          className={cn(
            inputWrapperVariants({ invalid }),
            'min-h-11.5 !h-auto max-h-[12.5rem] overflow-y-auto',
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
              onKeyDown={guardKeyHandler(handleKeyDown)}
              onFocus={() => setIsFocused(true)}
              onBlur={handleBlur}
              onCompositionStart={compositionHandlers.onCompositionStart}
              onCompositionEnd={compositionHandlers.onCompositionEnd}
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
              })}
            >
              {renderIcon(trailingIcon, { size: trailingIconSize })}
            </div>
          )}
        </div>

        {/* Helper text or error message - always takes up space to prevent layout jumps */}
        {(helperText || validationError) && (
          <p
            className={cn(
              'mt-xxs text-sm',
              validationError ? 'text-body-alert' : 'text-body-secondary',
              !validationError && !isFocused && 'invisible'
            )}
          >
            {validationError || helperText}
          </p>
        )}
      </>
    );
  }
);

TagInput.displayName = 'TagInput';
