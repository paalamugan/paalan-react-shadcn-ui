import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { Building, Star, User } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import type { Meta, StoryObj } from '@storybook/react';
import type { StepItem, StepperProps } from './types';

import { Button } from '../Button';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, FormRoot } from '../Form';
import { Input } from '../Input';
import { Label } from '../Label';
import { RadioGroupRoot, RadioGroupRootItem } from '../RadioGroup';
import { toast } from '../Toast';
import { Step, Stepper, useStepper } from './Stepper';

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: {
        type: 'select',
        options: ['vertical', 'horizontal'],
      },
    },
  },
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
            <div className="my-2 flex h-40 items-center justify-center rounded-md border bg-secondary text-foreground">
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
                <div className="my-2 flex h-40 items-center justify-center rounded-md border bg-secondary text-foreground">
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
            <div className="my-2 flex h-40 items-center justify-center rounded-md border bg-secondary text-foreground">
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
                <div className="my-2 flex h-40 items-center justify-center rounded-md border bg-secondary text-foreground">
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

export const StepperCustomStyles: Story = {
  render: ({ steps, ...args }) => {
    const Footer = () => {
      const { nextStep, prevStep, resetSteps, isDisabledStep, hasCompletedAllSteps, isLastStep, isOptionalStep } =
        useStepper();
      return (
        <>
          {hasCompletedAllSteps && (
            <div className="my-2 flex h-40 items-center justify-center rounded-md border bg-secondary text-foreground">
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
          {...args}
          steps={steps}
          onClickStep={(step, setStep) => {
            alert(`Step ${step + 1} clicked`);
            setStep(step);
          }}
        >
          {steps.map((stepProps, index) => {
            return (
              <Step key={stepProps.label} {...stepProps}>
                <div className="my-2 flex h-40 items-center justify-center rounded-md border bg-secondary text-foreground">
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
  args: StepperClickableSteps.args,
};

export const StepperDemo: Story = {
  args: StepperClickableSteps.args,
  render: ({ steps, ...args }) => {
    const Footer = () => {
      const { nextStep, prevStep, resetSteps, hasCompletedAllSteps, isLastStep, isOptionalStep, isDisabledStep } =
        useStepper();
      return (
        <>
          {hasCompletedAllSteps && (
            <div className="my-2 flex h-40 items-center justify-center rounded-md border bg-secondary text-foreground">
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
        <Stepper {...args} steps={steps}>
          {steps.map((stepProps, index) => {
            return (
              <Step key={stepProps.label} {...stepProps}>
                <div className="my-2 flex h-40 items-center justify-center rounded-md border bg-secondary text-foreground">
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
};

export const StepperDescription: Story = {
  render: ({ steps, ...args }) => {
    const Footer = () => {
      const { nextStep, prevStep, resetSteps, hasCompletedAllSteps, isLastStep, isOptionalStep, isDisabledStep } =
        useStepper();
      return (
        <>
          {hasCompletedAllSteps && (
            <div className="my-2 flex h-40 items-center justify-center rounded-md border bg-secondary text-foreground">
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
                <div className="my-2 flex h-40 items-center justify-center rounded-md border bg-secondary text-foreground">
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
      { label: 'Step 1', description: 'This is the first step' },
      { label: 'Step 2', description: 'This is the second step' },
      { label: 'Step 3', description: 'This is the third step' },
    ] satisfies StepItem[],
    initialStep: 0,
  },
};

export const StepperFooterInside: Story = {
  render: ({ steps, ...args }) => {
    const StepButtons = () => {
      const { nextStep, prevStep, isLastStep, isOptionalStep, isDisabledStep } = useStepper();
      return (
        <div className="mb-4 flex w-full gap-2">
          <Button disabled={isDisabledStep} onClick={prevStep} size="sm" variant="outline">
            Prev
          </Button>
          <Button size="sm" onClick={nextStep}>
            {isLastStep ? 'Finish' : isOptionalStep ? 'Skip' : 'Next'}
          </Button>
        </div>
      );
    };

    const FinalStep = () => {
      const { hasCompletedAllSteps, resetSteps } = useStepper();

      if (!hasCompletedAllSteps) {
        return null;
      }

      return (
        <>
          <div className="flex h-40 items-center justify-center rounded-md border bg-secondary text-foreground">
            <h1 className="text-xl">Woohoo! All steps completed! 🎉</h1>
          </div>
          <div className="flex w-full justify-end gap-2">
            <Button size="sm" onClick={resetSteps}>
              Reset
            </Button>
          </div>
        </>
      );
    };
    return (
      <div className="flex w-full flex-col gap-4">
        <Stepper orientation="vertical" steps={steps} {...args}>
          {steps.map((stepProps, index) => {
            return (
              <Step key={stepProps.label} {...stepProps}>
                <div className="my-4 flex h-40 items-center justify-center rounded-md border bg-secondary text-foreground">
                  <h1 className="text-xl">Step {index + 1}</h1>
                </div>
                <StepButtons />
              </Step>
            );
          })}
          <FinalStep />
        </Stepper>
      </div>
    );
  },
  args: {
    ...StepperClickableSteps.args,
  },
};

export const StepperForm: Story = {
  render: ({ steps, ...args }) => {
    const FirstFormSchema = z.object({
      username: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
      }),
    });

    function FirstStepForm() {
      const { nextStep } = useStepper();

      const form = useForm<z.infer<typeof FirstFormSchema>>({
        resolver: zodResolver(FirstFormSchema),
        defaultValues: {
          username: '',
        },
      });

      function onSubmit(_data: z.infer<typeof FirstFormSchema>) {
        nextStep();
        toast('First step submitted!');
      }

      return (
        <FormRoot {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>This is your public display name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <StepperFormActions />
          </form>
        </FormRoot>
      );
    }

    const SecondFormSchema = z.object({
      password: z.string().min(8, {
        message: 'Password must be at least 8 characters.',
      }),
    });

    function SecondStepForm() {
      const { nextStep } = useStepper();

      const form = useForm<z.infer<typeof SecondFormSchema>>({
        resolver: zodResolver(SecondFormSchema),
        defaultValues: {
          password: '',
        },
      });

      function onSubmit(_data: z.infer<typeof SecondFormSchema>) {
        nextStep();
        toast('Second step submitted!');
      }

      return (
        <FormRoot {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormDescription>This is your private password.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <StepperFormActions />
          </form>
        </FormRoot>
      );
    }

    function StepperFormActions() {
      const { prevStep, resetSteps, isDisabledStep, hasCompletedAllSteps, isLastStep } = useStepper();

      return (
        <div className="flex w-full justify-end gap-2">
          {hasCompletedAllSteps ? (
            <Button size="sm" type="button" onClick={resetSteps}>
              Reset
            </Button>
          ) : (
            <>
              <Button disabled={isDisabledStep} onClick={prevStep} size="sm" variant="outline" type="button">
                Prev
              </Button>
              <Button size="sm" type="submit">
                {isLastStep ? 'Finish' : 'Next'}
              </Button>
            </>
          )}
        </div>
      );
    }

    function MyStepperFooter() {
      const { activeStep, resetSteps, steps } = useStepper();

      if (activeStep !== steps.length) {
        return null;
      }

      return (
        <div className="flex items-center justify-end gap-2">
          <Button onClick={resetSteps}>Reset Stepper with Form</Button>
        </div>
      );
    }
    return (
      <div className="flex w-full flex-col gap-4">
        <Stepper variant="circle-alt" steps={steps} {...args}>
          {steps.map((stepProps, index) => {
            if (index === 0) {
              return (
                <Step key={stepProps.label} {...stepProps}>
                  <FirstStepForm />
                </Step>
              );
            }
            return (
              <Step key={stepProps.label} {...stepProps}>
                <SecondStepForm />
              </Step>
            );
          })}
          <MyStepperFooter />
        </Stepper>
      </div>
    );
  },
  args: {
    steps: [
      { label: 'Step 1', description: 'Description 1' },
      { label: 'Step 2', description: 'Description 2' },
    ],
    initialStep: 0,
  },
};

export const StepperOptionalSteps: Story = {
  render: ({ steps, ...args }) => {
    const Footer = () => {
      const { nextStep, prevStep, resetSteps, isDisabledStep, hasCompletedAllSteps, isLastStep, isOptionalStep } =
        useStepper();
      return (
        <>
          {hasCompletedAllSteps && (
            <div className="my-2 flex h-40 items-center justify-center rounded-md border bg-secondary text-foreground">
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
                <div className="my-2 flex h-40 items-center justify-center rounded-md border bg-secondary text-foreground">
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
    steps: [{ label: 'Step 1' }, { label: 'Step 2', optional: true }, { label: 'Step 3' }] satisfies StepItem[],
    initialStep: 0,
  },
};

export const StepperOrientation: Story = {
  render: ({ steps, ...args }) => {
    const [orientation, setOrientation] = useState<StepperProps['orientation']>('vertical');

    const Footer = () => {
      const { nextStep, prevStep, resetSteps, isDisabledStep, hasCompletedAllSteps, isLastStep, isOptionalStep } =
        useStepper();
      return (
        <>
          {hasCompletedAllSteps && (
            <div className="flex h-40 items-center justify-center rounded-md border bg-secondary text-foreground">
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
        <RadioGroupRoot
          className="mb-2 flex"
          value={orientation}
          onValueChange={(value) => setOrientation(value as StepperProps['orientation'])}
        >
          <Label
            htmlFor="horizontal"
            className="flex w-fit flex-col gap-3 rounded-md border bg-background px-2 py-1 hover:bg-gray-300 [&:has([data-state=checked])]:border-primary"
          >
            <RadioGroupRootItem value="horizontal" id="horizontal" className="sr-only" />
            <h2 className="font-medium">Horizontal</h2>
          </Label>
          <Label
            htmlFor="vertical"
            className="flex w-fit flex-col gap-3 rounded-md border bg-background px-2 py-1 hover:bg-gray-300 [&:has([data-state=checked])]:border-primary"
          >
            <RadioGroupRootItem value="vertical" id="vertical" className="sr-only" />
            <h2 className="font-medium">Vertical</h2>
          </Label>
        </RadioGroupRoot>
        <Stepper orientation={orientation} steps={steps} {...args}>
          {steps.map((stepProps, index) => {
            return (
              <Step key={stepProps.label} {...stepProps}>
                <div className="mb-4 flex h-40 items-center justify-center rounded-md border bg-secondary text-foreground">
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

export const StepperVerticalTimeline: Story = {
  render: ({ steps, ...args }) => {
    const Footer = () => {
      const { nextStep, prevStep, resetSteps, isDisabledStep, hasCompletedAllSteps, isLastStep, isOptionalStep } =
        useStepper();
      return (
        <>
          {hasCompletedAllSteps && (
            <div className="my-2 flex h-40 items-center justify-center rounded-md border bg-secondary text-foreground">
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
                <div className="my-2 flex h-40 items-center justify-center rounded-md border bg-secondary text-foreground">
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
    ...StepperOrientation.args,
    orientation: 'vertical',
    steps: [
      { label: 'Step 1', description: 'Description 1' },
      { label: 'Step 2', description: 'Description 2' },
      { label: 'Step 3', description: 'Description 3' },
    ],
    timeline: true,
  },
};

export const StepperScrollTracking: Story = {
  render: ({ steps, ...args }) => {
    const StepButtons = () => {
      const { nextStep, prevStep, isLastStep, isOptionalStep, isDisabledStep } = useStepper();
      return (
        <div className="mb-4 flex w-full gap-2">
          <Button disabled={isDisabledStep} onClick={prevStep} size="sm" variant="outline">
            Prev
          </Button>
          <Button size="sm" onClick={nextStep}>
            {isLastStep ? 'Finish' : isOptionalStep ? 'Skip' : 'Next'}
          </Button>
        </div>
      );
    };

    const FinalStep = () => {
      const { hasCompletedAllSteps, resetSteps } = useStepper();

      if (!hasCompletedAllSteps) {
        return null;
      }

      return (
        <>
          <div className="flex h-40 items-center justify-center rounded-md border bg-secondary text-foreground">
            <h1 className="text-xl">Woohoo! All steps completed! 🎉</h1>
          </div>
          <div className="flex w-full justify-end gap-2">
            <Button size="sm" onClick={resetSteps}>
              Reset
            </Button>
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
                <div className="my-4 flex h-40 items-center justify-center rounded-md border bg-secondary text-foreground">
                  <h1 className="text-xl">Step {index + 1}</h1>
                </div>
                <StepButtons />
              </Step>
            );
          })}
          <FinalStep />
        </Stepper>
      </div>
    );
  },
  args: {
    steps: [
      { label: 'Step 1' },
      { label: 'Step 2' },
      { label: 'Step 3' },
      { label: 'Step 4' },
      { label: 'Step 5' },
      { label: 'Step 6' },
    ] satisfies StepItem[],
    initialStep: 0,
    scrollTracking: true,
    orientation: 'vertical',
  },
};

export const StepperSizes: Story = {
  render: ({ steps, size: sizeProp, ...args }) => {
    const [size, setSize] = useState<StepperProps['size']>(sizeProp);

    const Footer = () => {
      const { nextStep, prevStep, resetSteps, isDisabledStep, hasCompletedAllSteps, isLastStep, isOptionalStep } =
        useStepper();
      return (
        <>
          {hasCompletedAllSteps && (
            <div className="my-2 flex h-40 items-center justify-center rounded-md border bg-secondary text-foreground">
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
        <RadioGroupRoot
          className="mb-2 flex"
          value={size}
          onValueChange={(value) => setSize(value as StepperProps['size'])}
        >
          <Label
            htmlFor="sm"
            className="flex w-fit flex-col gap-3 rounded-md border bg-background px-2 py-1 hover:bg-gray-300 [&:has([data-state=checked])]:border-primary"
          >
            <RadioGroupRootItem value="sm" id="sm" className="sr-only" />
            <h2 className="font-medium">sm</h2>
          </Label>
          <Label
            htmlFor="md"
            className="flex w-fit flex-col gap-3 rounded-md border bg-background px-2 py-1 hover:bg-gray-300 [&:has([data-state=checked])]:border-primary"
          >
            <RadioGroupRootItem value="md" id="md" className="sr-only" />
            <h2 className="font-medium">md</h2>
          </Label>
          <Label
            htmlFor="lg"
            className="flex w-fit flex-col gap-3 rounded-md border bg-background px-2 py-1 hover:bg-gray-300 [&:has([data-state=checked])]:border-primary"
          >
            <RadioGroupRootItem value="lg" id="lg" className="sr-only" />
            <h2 className="font-medium">lg</h2>
          </Label>
        </RadioGroupRoot>
        <Stepper size={size} steps={steps} {...args}>
          {steps.map((stepProps, index) => {
            return (
              <Step key={stepProps.label} {...stepProps}>
                <div className="my-2 flex h-40 items-center justify-center rounded-md border bg-secondary text-foreground">
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
    size: 'md',
  },
};

export const StepperState: Story = {
  render: ({ steps, ...args }) => {
    const Footer = () => {
      const {
        nextStep,
        prevStep,
        resetSteps,
        isDisabledStep,
        hasCompletedAllSteps,
        isLastStep,
        isOptionalStep,
        isError,
      } = useStepper();
      return (
        <>
          {hasCompletedAllSteps && (
            <div className="my-2 flex h-40 items-center justify-center rounded-md border bg-secondary text-foreground">
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
                <Button disabled={isError} size="sm" onClick={nextStep}>
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
        <Stepper state="error" steps={steps} {...args}>
          {steps.map((stepProps, index) => {
            return (
              <Step key={stepProps.label} {...stepProps}>
                <div className="my-2 flex h-40 items-center justify-center rounded-md border bg-secondary text-foreground">
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
    state: 'error',
  },
};

export const StepperVariants: Story = {
  render: ({ steps, variant: variantProp, ...args }) => {
    const [variant, setVariant] = useState<StepperProps['variant']>(variantProp);

    const Footer = () => {
      const { nextStep, prevStep, resetSteps, isDisabledStep, hasCompletedAllSteps, isLastStep, isOptionalStep } =
        useStepper();
      return (
        <>
          {hasCompletedAllSteps && (
            <div className="my-2 flex h-40 items-center justify-center rounded-md border bg-secondary text-foreground">
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
        <RadioGroupRoot
          className="mb-2 flex"
          value={variant}
          onValueChange={(value) => setVariant(value as StepperProps['variant'])}
        >
          <Label
            htmlFor="circle"
            className="flex w-fit flex-col gap-3 rounded-md border bg-background px-2 py-1 hover:bg-gray-300 [&:has([data-state=checked])]:border-primary"
          >
            <RadioGroupRootItem value="circle" id="circle" className="sr-only" />
            <h2 className="font-medium">circle</h2>
          </Label>
          <Label
            htmlFor="circle-alt"
            className="flex w-fit flex-col gap-3 rounded-md border bg-background px-2 py-1 hover:bg-gray-300 [&:has([data-state=checked])]:border-primary"
          >
            <RadioGroupRootItem value="circle-alt" id="circle-alt" className="sr-only" />
            <h2 className="font-medium">circle-alt</h2>
          </Label>
          <Label
            htmlFor="line"
            className="flex w-fit flex-col gap-3 rounded-md border bg-background px-2 py-1 hover:bg-gray-300 [&:has([data-state=checked])]:border-primary"
          >
            <RadioGroupRootItem value="line" id="line" className="sr-only" />
            <h2 className="font-medium">line</h2>
          </Label>
        </RadioGroupRoot>
        <Stepper variant={variant} steps={steps} {...args}>
          {steps.map((stepProps, index) => {
            return (
              <Step key={stepProps.label} {...stepProps}>
                <div className="my-2 flex h-40 items-center justify-center rounded-md border bg-secondary text-foreground">
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
    variant: 'circle',
  },
};
