import React from 'react';
import { IconCheck } from '@tabler/icons-react';

import { cn } from '../../lib/utils';

export type StepStatus = 'completed' | 'active' | 'upcoming';

export interface Step {
  id: string;
  label: string;
  status: StepStatus;
  title?: string; // For radial variant - step title
  description?: string; // For radial variant - step description
}

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: Step[];
  currentStep?: number;
  showLabels?: boolean;
  variant?: 'linear' | 'radial';
}

export const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      className,
      steps,
      currentStep,
      showLabels = true,
      variant = 'linear',
      ...props
    },
    ref
  ) => {
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

    if (variant === 'radial') {
      return (
        <RadialStepper
          ref={ref}
          className={className}
          steps={processedSteps}
          currentStep={currentStep}
          showLabels={showLabels}
          {...props}
        />
      );
    }

    return (
      <div ref={ref} className={cn('px-xxl w-full', className)} {...props}>
        {/* Step indicators */}
        <div className="gap-sm flex items-center">
          {processedSteps.map((step, index) => (
            <React.Fragment key={step.id}>
              {/* Step dot */}
              <div className="relative flex flex-col items-center">
                <div
                  className="size-8 flex flex-col items-center justify-center"
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
                        ? 'bg-status-neutral text-body-primary size-2.5'
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
                      `mt-xs max-w-20 absolute top-full min-w-max text-center
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

const RadialStepper = React.forwardRef<
  HTMLDivElement,
  {
    steps: Step[];
    currentStep?: number | undefined;
    showLabels?: boolean | undefined;
  } & React.HTMLAttributes<HTMLDivElement>
>(({ className, steps, currentStep, ...props }, ref) => {
  // Calculate progress based on current step position
  const totalSteps = steps.length;
  const currentStepIndex =
    currentStep !== undefined
      ? currentStep
      : steps.findIndex((step) => step.status === 'active');
  const safeCurrentIndex = Math.max(
    0,
    Math.min(currentStepIndex, totalSteps - 1)
  );

  // Find active step for display
  const activeStep = steps[safeCurrentIndex] || steps[0];

  // Calculate progress percentage for the circle - based on current step position
  // Progress shows current step completion (e.g., step 3 of 4 = 75%)
  const progressPercentage =
    totalSteps > 0 ? ((safeCurrentIndex + 1) / totalSteps) * 100 : 0;
  const circumference = 2 * Math.PI * 24; // radius = 24 for a 52x52 SVG with stroke-width 4
  const strokeDasharray = circumference;
  const strokeDashoffset =
    circumference - (progressPercentage / 100) * circumference;

  return (
    <div ref={ref} className={cn('space-y-6', className)} {...props}>
      {/* Radial Progress Section */}
      <div className="gap-md px-xxl mb-28 flex items-center">
        {/* Circular Progress */}
        <div className="h-13 w-13 flex flex-shrink-0">
          <div className="relative h-full w-full">
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              className="-rotate-90 transform"
            >
              {/* Background circle */}
              <circle
                cx="26"
                cy="26"
                r="24"
                fill="none"
                className="stroke-shape-accent-gray-soft stroke-[4]"
              />
              {/* Progress circle */}
              <circle
                cx="26"
                cy="26"
                r="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="text-interactive-primary-default ease-in-out
                  transition-all duration-500"
              />
            </svg>

            {/* Center content - step counter */}
            <div className="inset-0 absolute flex items-center justify-center">
              <div className="flex items-center justify-center">
                <svg
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Dynamic current step number */}
                  <text
                    x="5"
                    y="9"
                    fill="currentColor"
                    dominantBaseline="central"
                    textAnchor="middle"
                    className="text-interactive-primary-default text-lg
                      font-bold"
                  >
                    {safeCurrentIndex + 1}
                  </text>

                  {/* Static diagonal slash separator*/}
                  <path
                    d="M17.5 6.5L11 18"
                    stroke="currentColor"
                    className="text-shape-accent-gray-soft stroke-1"
                  />

                  {/* Dynamic total steps number*/}
                  <text
                    x="19.5"
                    y="14"
                    fill="currentColor"
                    dominantBaseline="central"
                    textAnchor="middle"
                    className="text-body-secondary text-sm font-normal"
                  >
                    {totalSteps}
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Step Information */}
        <div
          className="gap-xxxs flex w-auto flex-col items-start justify-center"
        >
          {activeStep && (
            <>
              <span
                className="text-lg font-bold text-body-primary leading-[1.2]"
              >
                {activeStep.title || activeStep.label}
              </span>
              {activeStep.description && (
                <p
                  className="text-md font-normal text-body-primary
                    leading-[1.5]"
                >
                  {activeStep.description}
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
});

RadialStepper.displayName = 'RadialStepper';

Stepper.displayName = 'Stepper';
