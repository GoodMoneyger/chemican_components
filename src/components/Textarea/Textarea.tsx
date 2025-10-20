import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '../../utils';

const textareaVariants = cva(
  `border-interactive-default bg-surface-primary px-md py-sm
  focus:border-interactive-selected disabled:border-interactive-disabled
  disabled:bg-surface-disabled disabled:text-body-disabled
  hover:border-interactive-hover h-12 min-h-30 rounded w-full border
  focus:ring-4 focus:outline-0`,
  {
    variants: {
      invalid: {
        false: 'text-body-primary focus:ring-interactive-focused',
        true: `border-shape-interactive-alert-default!
        focus:ring-interactive-alert-focused`,
      },
    },
  }
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  invalid?: boolean;
  characterLimit?: number;
  showCharacterLimit?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
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
    const [value, setValue] = React.useState(props.value || '');

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (characterLimit && event.target.value.length > characterLimit) {
        event.preventDefault();
        return;
      }
      setValue(event.target.value);
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
          value={value}
          onChange={handleChange}
        />
        {Boolean(characterLimit && showCharacterLimit) && (
          <div className="text-body-secondary text-sm text-right">
            {value.toString().length}/{characterLimit}
          </div>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
