import React, { useEffect, useState } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '../../utils';
import { useCompositionGuard } from '../../lib/hooks';

const textareaVariants = cva(
  `border-interactive-default bg-surface-primary px-md py-sm text-body-primary
  focus:border-interactive-selected disabled:border-interactive-disabled
  disabled:bg-surface-disabled disabled:text-body-disabled
  hover:border-interactive-hover h-12 min-h-30 rounded
  focus:ring-interactive-focused w-full border focus:ring-4 focus:outline-0`,
  {
    variants: {
      invalid: {
        false: '',
        true: `!border-shape-interactive-alert-default
        focus:ring-interactive-alert-focused`,
      },
    },
  }
);

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  invalid?: boolean;
  characterLimit?: number;
  showCharacterLimit?: boolean;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      invalid,
      className,
      characterLimit = 0,
      showCharacterLimit = true,
      ...props
    },
    ref
  ) => {
    const {
      onKeyDown,
      onKeyUp,
      onCompositionStart,
      onCompositionEnd,
      onChange,
      value: _value,
      ...textareaProps
    } = props;

    const [text, setText] = useState(props.value);

    useEffect(() => {
      setText(props.value);
    }, [props.value]);

    const { compositionHandlers, guardKeyHandler } =
      useCompositionGuard<HTMLTextAreaElement>();
    const handleCompositionStart: React.CompositionEventHandler<
      HTMLTextAreaElement
    > = (event) => {
      compositionHandlers.onCompositionStart(event);
      onCompositionStart?.(event);
    };
    const handleCompositionEnd: React.CompositionEventHandler<
      HTMLTextAreaElement
    > = (event) => {
      compositionHandlers.onCompositionEnd(event);
      onCompositionEnd?.(event);
    };

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (characterLimit && event.target.value.length > characterLimit) {
        event.preventDefault();
        return;
      }

      setText(event.target.value);
      if (onChange) {
        onChange(event);
      }
    };

    return (
      <div className="relative">
        <textarea
          ref={ref}
          className={cn(textareaVariants({ invalid }), className)}
          {...textareaProps}
          value={text}
          onChange={handleChange}
          onKeyDown={guardKeyHandler(onKeyDown)}
          onKeyUp={guardKeyHandler(onKeyUp)}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
        />
        {Boolean(characterLimit && showCharacterLimit) && (
          <div className="text-body-secondary text-sm text-right">
            {text?.toString().length || 0}/{characterLimit}
          </div>
        )}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';
