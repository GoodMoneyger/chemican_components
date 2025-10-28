import { default as React, ReactNode } from '../../../node_modules/react';
import { ButtonProps } from '../Button';
interface MultiStepDialogContextValue {
    currentStep: number;
    totalSteps: number;
    goToStep: (step: number) => void;
    nextStep: () => void;
    prevStep: () => void;
    isFirstStep: boolean;
    isLastStep: boolean;
}
export interface MultiStepDialogRootProps {
    isOpen: boolean;
    onClose: (value?: unknown) => void;
    children: ReactNode;
    initialStep?: number;
    onStepChange?: (step: number) => void;
}
export interface MultiStepDialogStepProps {
    children: ReactNode;
    onEnter?: () => void | Promise<void>;
    onLeave?: () => boolean | Promise<boolean>;
}
export interface MultiStepDialogHeaderProps {
    children: ReactNode;
}
export interface MultiStepDialogBodyProps {
    children: ReactNode;
    className?: string;
}
export interface MultiStepDialogFooterProps {
    children?: ReactNode;
    showNavigation?: boolean;
    showCancel?: boolean;
    showBack?: boolean;
    cancelLabel?: ReactNode;
    backLabel?: ReactNode;
    nextLabel?: ReactNode;
    backButtonProps?: Partial<ButtonProps>;
    onCancel?: () => void;
    onNext?: () => void | boolean | Promise<void | boolean>;
    onBack?: () => void | boolean | Promise<void | boolean>;
}
export interface NavigationHelpers {
    nextStep: () => void;
    prevStep: () => void;
    goToStep: (step: number) => void;
    currentStep: number;
    totalSteps: number;
    isFirstStep: boolean;
    isLastStep: boolean;
}
export interface MultiStepDialogActionProps extends Omit<ButtonProps, 'value'> {
    label: ReactNode;
    onAction?: (helpers: NavigationHelpers) => void | unknown | Promise<void | unknown>;
    value?: unknown;
    closeOnAction?: boolean;
}
export declare const MultiStepDialog: {
    Root: React.FC<MultiStepDialogRootProps>;
    Step: React.FC<MultiStepDialogStepProps>;
    Header: React.FC<MultiStepDialogHeaderProps>;
    Body: React.FC<MultiStepDialogBodyProps>;
    Footer: React.FC<MultiStepDialogFooterProps>;
    Action: React.FC<MultiStepDialogActionProps>;
    useMultiStepDialog: () => MultiStepDialogContextValue;
};
export {};
