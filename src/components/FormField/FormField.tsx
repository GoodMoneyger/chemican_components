import React from 'react';

import { cn } from '../../utils';

export interface FormFieldProps {
  label?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  name: string;
  error?: React.ReactNode;
  description?: React.ReactNode;
  optional?: boolean;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  children,
  className,
  name,
  error,
  description,
  optional,
}) => {
  const childWithProps = React.isValidElement(children)
    ? React.cloneElement(
        children as React.ReactElement<Record<string, unknown>>,
        {
          id: name,
          name: name,
        }
      )
    : children;

  return (
    <div className="flex flex-col">
      {label && (
        <label
          htmlFor={name}
          className={cn(
            `text-body-secondary gap-xxs pb-xs text-sm font-normal flex
            items-center leading-none`,
            className
          )}
        >
          <span>{label}</span>
          {optional && <span className="text-body-secondary">(任意)</span>}
        </label>
      )}
      {childWithProps}
      {error && (
        <div className="pt-xxs">
          <p className="text-body-alert text-sm font-normal leading-[1.5]">
            {error}
          </p>
        </div>
      )}
      {description && (
        <div className="pt-xxs">
          <p className="text-body-secondary text-sm font-normal leading-[1.5]">
            {description}
          </p>
        </div>
      )}
    </div>
  );
};
