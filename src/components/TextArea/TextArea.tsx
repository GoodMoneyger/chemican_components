import React, { useEffect, useState } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '../../utils';

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
    const [text, setText] = useState(props.value);

    useEffect(() => {
      setText(props.value);
    }, [props.value]);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(event.target.value);

      if (characterLimit && event.target.value.length > characterLimit) {
        event.preventDefault();
        return;
      }
      if (props.onChange) {
        props.onChange(event);
      }
    };

    return (
      <div className="relative">
        <textarea
          ref={ref}
          className={cn(textareaVariants({ invalid }), className)}
          {...props}
          value={text}
          onChange={handleChange}
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
