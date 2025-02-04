import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames';
import { Primitive } from '@radix-ui/react-primitive';

// Define button styles with CVA
const buttonStyles = cva(
  'inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      intent: {
        primary:
          'bg-button-primary-default text-button-primary-default hover:bg-blue-600 focus:ring-primary',
        secondary:
          'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
        outline: 'border border-gray-300 text-gray-800 hover:bg-gray-100',
      },
      size: {
        sm: 'px-3 py-1 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'md',
    },
  }
);

// Button props extending Radix Primitive
export interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof Primitive.button>,
    VariantProps<typeof buttonStyles> {}

export const Button = React.forwardRef<
  React.ElementRef<typeof Primitive.button>,
  ButtonProps
>(({ intent, size, className, ...props }, ref) => {
  return (
    <Primitive.button
      ref={ref}
      className={classNames(buttonStyles({ intent, size }), className)}
      {...props}
    />
  );
});

Button.displayName = 'Button';
