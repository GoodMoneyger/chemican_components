import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react';
import { Dialog as RadixDialog } from 'radix-ui';

import { Button } from '../Button';
import type { ButtonProps } from '../Button';

// Context for step management
interface MultiStepDialogContextValue {
  currentStep: number;
  totalSteps: number;
  goToStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

const MultiStepDialogContext = createContext<
  MultiStepDialogContextValue | undefined
>(undefined);

const useMultiStepDialog = () => {
  const context = useContext(MultiStepDialogContext);
  if (!context) {
    throw new Error(
      'MultiStepDialog components must be used within MultiStepDialog.Root'
    );
  }
  return context;
};

// Root component props
export interface MultiStepDialogRootProps {
  isOpen: boolean;
  onClose: (value?: unknown) => void;
  children: ReactNode;
  initialStep?: number;
  onStepChange?: (step: number) => void;
}

// Root component
const Root: React.FC<MultiStepDialogRootProps> = ({
  isOpen,
  onClose,
  children,
  initialStep = 0,
  onStepChange,
}) => {
  const [currentStep, setCurrentStep] = useState(initialStep);

  // Count total steps from children
  const steps = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === Step
  );
  const totalSteps = steps.length;

  const goToStep = (step: number) => {
    if (step >= 0 && step < totalSteps) {
      setCurrentStep(step);
      onStepChange?.(step);
    }
  };

  const nextStep = () => goToStep(currentStep + 1);
  const prevStep = () => goToStep(currentStep - 1);

  const contextValue: MultiStepDialogContextValue = {
    currentStep,
    totalSteps,
    goToStep,
    nextStep,
    prevStep,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === totalSteps - 1,
  };

  // Reset step on close
  const handleClose = (value?: unknown) => {
    setCurrentStep(initialStep);
    onClose(value);
  };

  return (
    <MultiStepDialogContext.Provider value={contextValue}>
      <RadixDialog.Root open={isOpen} onOpenChange={handleClose}>
        <RadixDialog.Overlay
          className="bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
            w-full"
        />
        <RadixDialog.Content
          className="bg-surface-primary rounded-lg z-dialog max-w-screen-sm
            min-w-96 fixed top-1/2 left-1/2 w-2/3 -translate-x-1/2
            -translate-y-1/2 transform"
        >
          {steps[currentStep]}
        </RadixDialog.Content>
      </RadixDialog.Root>
    </MultiStepDialogContext.Provider>
  );
};

// Step component
export interface MultiStepDialogStepProps {
  children: ReactNode;
  onEnter?: () => void | Promise<void>;
  onLeave?: () => boolean | Promise<boolean>; // Return false to prevent navigation
}

const Step: React.FC<MultiStepDialogStepProps> = ({ children }) => {
  return <div className="flex flex-col">{children}</div>;
};

// Header component
export interface MultiStepDialogHeaderProps {
  children: ReactNode;
}

const Header: React.FC<MultiStepDialogHeaderProps> = ({ children }) => {
  return (
    <div className="px-xl py-lg flex items-center justify-between">
      <RadixDialog.Title
        className="text-xxl text-body-primary font-bold h-4.5 flex items-center"
      >
        {children}
      </RadixDialog.Title>
    </div>
  );
};

// Body component
export interface MultiStepDialogBodyProps {
  children: ReactNode;
  className?: string;
}

const Body: React.FC<MultiStepDialogBodyProps> = ({ children, className }) => {
  return (
    <div
      className={`border-divider-default bg-surface-secondary px-xl py-lg
        text-body-primary min-h-40 flex-grow-0 border-y-1 ${className || ''}`}
    >
      {children}
    </div>
  );
};

// Footer component
export interface MultiStepDialogFooterProps {
  children?: ReactNode;
  showNavigation?: boolean;
  showCancel?: boolean;
  showBack?: boolean; // Control back button visibility separately
  cancelLabel?: ReactNode;
  backLabel?: ReactNode;
  nextLabel?: ReactNode;
  backButtonProps?: Partial<ButtonProps>; // Additional props for back button
  onCancel?: () => void;
  onNext?: () => void | boolean | Promise<void | boolean>; // Return false to prevent navigation
  onBack?: () => void | boolean | Promise<void | boolean>;
}

const Footer: React.FC<MultiStepDialogFooterProps> = ({
  children,
  showNavigation = true,
  showCancel = true,
  showBack,
  cancelLabel = 'キャンセル',
  backLabel = '戻る',
  nextLabel = '次へ',
  backButtonProps,
  onCancel,
  onNext,
  onBack,
}) => {
  const { isFirstStep, isLastStep, nextStep, prevStep } = useMultiStepDialog();

  const handleNext = async () => {
    if (onNext) {
      const result = await onNext();
      if (result === false) return;
    }
    if (!isLastStep) {
      nextStep();
    }
  };

  const handleBack = async () => {
    if (onBack) {
      const result = await onBack();
      if (result === false) return;
    }
    if (!isFirstStep) {
      prevStep();
    }
  };

  // Determine if back button should be shown
  const shouldShowBack =
    showBack !== undefined ? showBack : showNavigation && !isFirstStep;

  return (
    <div className="px-md py-lg flex justify-between">
      <div className="gap-xs flex">
        {showCancel && (
          <RadixDialog.Close asChild>
            <Button intent="tertiary" onClick={onCancel}>
              {cancelLabel}
            </Button>
          </RadixDialog.Close>
        )}
        {shouldShowBack && (
          <Button intent="secondary" onClick={handleBack} {...backButtonProps}>
            {backLabel}
          </Button>
        )}
      </div>
      {children ? (
        <div className="gap-xs ml-auto flex">{children}</div>
      ) : (
        showNavigation && (
          <div className="gap-xs ml-auto flex">
            <Button intent="primary" onClick={handleNext}>
              {isLastStep ? '完了' : nextLabel}
            </Button>
          </div>
        )
      )}
    </div>
  );
};

// Navigation helpers passed to action callbacks
export interface NavigationHelpers {
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  currentStep: number;
  totalSteps: number;
  isFirstStep: boolean;
  isLastStep: boolean;
}

// Action component for custom footer actions
export interface MultiStepDialogActionProps extends Omit<ButtonProps, 'value'> {
  label: ReactNode;
  onAction?: (
    helpers: NavigationHelpers
  ) => void | unknown | Promise<void | unknown>;
  value?: unknown; // Value to pass to onClose
  closeOnAction?: boolean; // Whether to close dialog after action
}

const Action: React.FC<MultiStepDialogActionProps> = ({
  label,
  onAction,
  value,
  closeOnAction = false,
  ...buttonProps
}) => {
  const context = useMultiStepDialog();

  const navigationHelpers: NavigationHelpers = {
    nextStep: context.nextStep,
    prevStep: context.prevStep,
    goToStep: context.goToStep,
    currentStep: context.currentStep,
    totalSteps: context.totalSteps,
    isFirstStep: context.isFirstStep,
    isLastStep: context.isLastStep,
  };

  const handleClick = async () => {
    if (onAction) {
      await onAction(navigationHelpers);
    }
  };

  if (closeOnAction) {
    return (
      <RadixDialog.Close asChild>
        <Button {...buttonProps} onClick={handleClick}>
          {label}
        </Button>
      </RadixDialog.Close>
    );
  }

  return (
    <Button {...buttonProps} onClick={handleClick}>
      {label}
    </Button>
  );
};

// Export as namespace
export const MultiStepDialog = {
  Root,
  Step,
  Header,
  Body,
  Footer,
  Action,
  useMultiStepDialog,
};
