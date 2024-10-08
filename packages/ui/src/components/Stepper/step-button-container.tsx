import { cn } from '@paalan/react-shared/lib';

import type * as React from 'react';
import type { StepSharedProps } from './types';

import { Button } from '../Button';
import { useStepper } from './use-stepper';

type StepButtonContainerProps = StepSharedProps & {
  children?: React.ReactNode;
};

const StepButtonContainer = ({
  isCurrentStep,
  isCompletedStep,
  children,
  isError,
  isLoading: isLoadingProp,
  onClickStep,
}: StepButtonContainerProps) => {
  const { clickable, isLoading: isLoadingContext, variant, styles } = useStepper();

  const currentStepClickable = clickable || !!onClickStep;

  const isLoading = isLoadingProp || isLoadingContext;

  if (variant === 'line') {
    return null;
  }

  return (
    <Button
      variant="ghost"
      type="button"
      tabIndex={currentStepClickable ? 0 : -1}
      className={cn(
        'stepper__step-button-container',
        'pointer-events-none rounded-full p-0',
        'h-[var(--step-icon-size)] w-[var(--step-icon-size)]',
        'flex shrink-0 items-center justify-center rounded-full border-2 text-foreground',
        'data-[clickable=true]:pointer-events-auto',
        'data-[active=true]:border-primary data-[active=true]:bg-primary data-[active=true]:text-primary-foreground',
        'data-[current=true]:border-primary data-[current=true]:bg-secondary',
        'data-[invalid=true]:border-danger data-[invalid=true]:bg-danger data-[invalid=true]:text-danger-foreground',
        styles?.['step-button-container'],
      )}
      aria-current={isCurrentStep ? 'step' : undefined}
      data-current={isCurrentStep}
      data-invalid={isError && (isCurrentStep || isCompletedStep)}
      data-active={isCompletedStep}
      data-clickable={currentStepClickable}
      data-loading={isLoading && (isCurrentStep || isCompletedStep)}
    >
      {children}
    </Button>
  );
};

export { StepButtonContainer };
