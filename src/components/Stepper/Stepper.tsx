import React from 'react';
import { IconCheck } from '@tabler/icons-react';

import { cn } from '../../lib/utils';

export type StepStatus = 'completed' | 'active' | 'upcoming';

export interface Step {
  id: string;
  label: string;
  status: StepStatus;
}

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: Step[];
  currentStep?: number;
  showLabels?: boolean;
}

export const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  ({ className, steps, currentStep, showLabels = true, ...props }, ref) => {
    // Auto-determine step statuses based on currentStep if provided
    const processedSteps = React.useMemo(() => {
      if (currentStep !== undefined) {
        return steps.map((step, index) => ({
          ...step,
          status: (index < currentStep
            ? 'completed'
            : index === currentStep
              ? 'active'
              : 'upcoming') as StepStatus,
        }));
      }
      return steps;
    }, [steps, currentStep]);

    return (
      <div ref={ref} className={cn('w-full px-8', className)} {...props}>
        {/* Step indicators */}
        <div className="gap-sm flex items-center">
          {processedSteps.map((step, index) => (
            <React.Fragment key={step.id}>
              {/* Step dot */}
              <div className="relative flex flex-col items-center">
                <div
                  className="flex size-8 flex-col items-center justify-center"
                >
                  <div
                    className={cn(
                      `relative box-content flex items-center justify-center
                      rounded-full transition-colors`,
                      step.status === 'completed'
                        ? `bg-shape-interactive-primary-default
                          text-interactive-inverse size-4.5`
                        : undefined,
                      step.status === 'active'
                        ? `bg-interactive-primary-default
                          text-interactive-inverse
                          ring-shape-interactive-primary-active/20 size-2.5
                          ring-4`
                        : undefined,
                      step.status === 'upcoming'
                        ? `bg-shape-accent-gray-soft text-body-secondary
                          size-2.5`
                        : undefined
                    )}
                  >
                    {/* Render a checkmark icon for done items */}
                    {step.status === 'completed' && (
                      <IconCheck
                        className="text-interactive-inverse h-2.5 w-2.5"
                      />
                    )}
                  </div>
                </div>

                {/* Step label */}
                {showLabels && (
                  <div
                    className={cn(
                      `mt-xs absolute top-full max-w-20 min-w-max text-center
                      break-words transition-colors`,
                      step.status === 'completed' || step.status === 'active'
                        ? 'text-body-primary font-medium'
                        : undefined,
                      step.status === 'upcoming'
                        ? 'text-body-secondary'
                        : undefined
                    )}
                  >
                    {step.label}
                  </div>
                )}
              </div>

              {/* Connector line */}
              {index < processedSteps.length - 1 && (
                <div
                  className={cn(
                    'h-0.25 flex-1 transition-colors',
                    step.status === 'completed'
                      ? 'bg-interactive-primary-default'
                      : 'bg-shape-accent-gray-soft'
                  )}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Add spacing for labels if shown */}
        {showLabels && <div className="h-8" />}
      </div>
    );
  }
);

Stepper.displayName = 'Stepper';
