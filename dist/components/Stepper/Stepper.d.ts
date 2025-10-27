import { default as React } from 'react';
export type StepStatus = 'completed' | 'active' | 'upcoming';
export interface Step {
    id: string;
    label: string;
    status: StepStatus;
    title?: string;
    description?: string;
}
export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
    steps: Step[];
    currentStep?: number;
    showLabels?: boolean;
    variant?: 'linear' | 'radial';
}
export declare const Stepper: React.ForwardRefExoticComponent<StepperProps & React.RefAttributes<HTMLDivElement>>;
