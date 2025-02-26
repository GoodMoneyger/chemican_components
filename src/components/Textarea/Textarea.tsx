import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

const textareaVariants = cva(
  'h-12 min-h-30 w-full rounded border border-input-default bg-surface-primary px-md py-sm hover:bg-surface-secondary focus:border-input-focused focus:border-transparent focus:ring-3 focus:ring-input-focused focus:outline-0 disabled:border-input-disabled disabled:bg-surface-disabled disabled:text-body-disabled',
  {
    variants: {
      invalid: {
        false: 'text-body-primary focus:ring-input-focused',
        true: 'border-input-alert focus:ring-input-alert',
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
          className={classNames(
            twMerge(textareaVariants({ invalid }), className)
          )}
          {...props}
          value={value}
          onChange={handleChange}
        />
        {Boolean(characterLimit && showCharacterLimit) && (
          <div className="p1 text-right text-sm text-body-secondary">
            {value.toString().length}/{characterLimit}
          </div>
        )}
      </div>
    );
  }
);
