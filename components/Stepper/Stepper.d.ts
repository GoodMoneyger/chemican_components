import { default as React } from '../../../node_modules/react';
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
export declare const Stepper: React.ForwardRefExoticComponent<StepperProps & React.RefAttributes<HTMLDivElement>>;
