import React from 'react';

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
    <div className={className}>
      {label && (
        <label
          htmlFor={name}
          className="text-body-secondary gap-xxs pb-xs text-sm font-normal flex
            items-center leading-none"
        >
          <span>{label}</span>
          {optional && <span className="text-body-secondary">(任意)</span>}
        </label>
      )}
      {childWithProps}
      {error && (
        <p className="mt-xxs text-body-alert text-sm font-normal leading-[1.5]">
          {error}
        </p>
      )}
      {description && (
        <p
          className="mt-xxs text-body-secondary text-sm font-normal
            leading-[1.5]"
        >
          {description}
        </p>
      )}
    </div>
  );
};
