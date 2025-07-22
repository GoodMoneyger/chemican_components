import React from 'react';

import { cn } from '../../lib/utils';

export interface FormFieldProps {
  label?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  name: string;
  error?: string;
  description?: string;
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
  return (
    <div className="flex flex-col">
      {label && (
        <label
          htmlFor={name}
          className={cn(
            `text-body-secondary flex items-center gap-1 pb-2 text-xs
            leading-none font-normal`,
            className
          )}
        >
          <span>{label}</span>
          {optional && <span className="text-body-secondary">(任意)</span>}
        </label>
      )}
      {children}
      {error && (
        <div className="pt-1">
          <p className="text-body-alert text-xs leading-[1.5] font-normal">
            {error}
          </p>
        </div>
      )}
      {description && (
        <div className="pt-1">
          <p className="text-body-secondary text-xs leading-[1.5] font-normal">
            {description}
          </p>
        </div>
      )}
    </div>
  );
};
