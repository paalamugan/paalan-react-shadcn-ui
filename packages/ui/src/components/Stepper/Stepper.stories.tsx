import { Building, Star, User } from 'lucide-react';

import type { Meta, StoryObj } from '@storybook/react';
import type { StepItem } from './types';

import { Button } from '../Button';
import { Step, Stepper, useStepper } from './Stepper';

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Stepper>;

export const StepperClickableSteps: Story = {
  render: ({ steps, ...args }) => {
    const Footer = () => {
      const { nextStep, prevStep, resetSteps, isDisabledStep, hasCompletedAllSteps, isLastStep, isOptionalStep } =
        useStepper();
      return (
        <>
          {hasCompletedAllSteps && (
            <div className="my-2 flex h-40 items-center justify-center rounded-md border bg-secondary text-primary">
              <h1 className="text-xl">Woohoo! All steps completed! 🎉</h1>
            </div>
          )}
          <div className="flex w-full justify-end gap-2">
            {hasCompletedAllSteps ? (
              <Button size="sm" onClick={resetSteps}>
                Reset
              </Button>
            ) : (
              <>
                <Button disabled={isDisabledStep} onClick={prevStep} size="sm" variant="outline">
                  Prev
                </Button>
                <Button size="sm" onClick={nextStep}>
                  {isLastStep ? 'Finish' : isOptionalStep ? 'Skip' : 'Next'}
                </Button>
              </>
            )}
          </div>
        </>
      );
    };
    return (
      <div className="flex w-full flex-col gap-4">
        <Stepper
          steps={steps}
          onClickStep={(step, setStep) => {
            alert(`Step ${step + 1} clicked`);
            setStep(step);
          }}
          {...args}
        >
          {steps.map((stepProps, index) => {
            return (
              <Step key={stepProps.label} {...stepProps}>
                <div className="my-2 flex h-40 items-center justify-center rounded-md border bg-secondary text-primary">
                  <h1 className="text-xl">Step {index + 1}</h1>
                </div>
              </Step>
            );
          })}
          <Footer />
        </Stepper>
      </div>
    );
  },

  args: {
    steps: [{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }] satisfies StepItem[],
    initialStep: 0,
  },
};

export const StepperCustomIcons: Story = {
  render: ({ steps, ...args }) => {
    const Footer = () => {
      const { nextStep, prevStep, resetSteps, isDisabledStep, hasCompletedAllSteps, isLastStep, isOptionalStep } =
        useStepper();
      return (
        <>
          {hasCompletedAllSteps && (
            <div className="my-2 flex h-40 items-center justify-center rounded-md border bg-secondary text-primary">
              <h1 className="text-xl">Woohoo! All steps completed! 🎉</h1>
            </div>
          )}
          <div className="flex w-full justify-end gap-2">
            {hasCompletedAllSteps ? (
              <Button size="sm" onClick={resetSteps}>
                Reset
              </Button>
            ) : (
              <>
                <Button disabled={isDisabledStep} onClick={prevStep} size="sm" variant="outline">
                  Prev
                </Button>
                <Button size="sm" onClick={nextStep}>
                  {isLastStep ? 'Finish' : isOptionalStep ? 'Skip' : 'Next'}
                </Button>
              </>
            )}
          </div>
        </>
      );
    };
    return (
      <div className="flex w-full flex-col gap-4">
        <Stepper steps={steps} {...args}>
          {steps.map((stepProps, index) => {
            return (
              <Step key={stepProps.label} {...stepProps}>
                <div className="my-2 flex h-40 items-center justify-center rounded-md border bg-secondary text-primary">
                  <h1 className="text-xl">Step {index + 1}</h1>
                </div>
              </Step>
            );
          })}
          <Footer />
        </Stepper>
      </div>
    );
  },
  args: {
    steps: [
      { label: 'Step 1', icon: User },
      { label: 'Step 2', icon: Building },
      { label: 'Step 3', icon: Star },
    ] satisfies StepItem[],
    initialStep: 0,
  },
};
