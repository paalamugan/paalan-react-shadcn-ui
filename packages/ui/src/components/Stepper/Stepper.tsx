import * as React from 'react';

import { cn } from '@paalan/react-shared/lib';

import type { StepperProps } from './types';

import { StepperProvider } from './context';
import { Step } from './step';
import { useMediaQuery } from './use-media-query';
import { useStepper } from './use-stepper';

const TimelineContainer: React.FC<
  React.PropsWithChildren<{
    className?: string;
  }>
> = ({ children, className }) => {
  return <div className={cn('flex flex-row gap-5 md:gap-10 lg:gap-20', className)}>{children}</div>;
};
const VARIABLE_SIZES = {
  sm: '36px',
  md: '40px',
  lg: '44px',
};

const Stepper = React.forwardRef<HTMLDivElement, StepperProps>((props, ref: React.Ref<HTMLDivElement>) => {
  const {
    className,
    children,
    orientation: orientationProp = 'horizontal',
    state,
    responsive = true,
    checkIcon,
    errorIcon,
    onClickStep,
    mobileBreakpoint,
    expandVerticalSteps = false,
    initialStep = 0,
    size = 'md',
    steps,
    variant,
    styles,
    variables,
    scrollTracking = false,
    timeline,
    timelineContainerClassName,
    timelineContentClassName,
    ...rest
  } = props;

  const childArr = React.Children.toArray(children);

  const items = [] as React.ReactElement[];

  const footer = childArr.map((child, _index) => {
    if (!React.isValidElement(child)) {
      throw new Error('Stepper children must be valid React elements.');
    }
    if (child.type === Step) {
      items.push(child);
      return null;
    }

    return child;
  });

  const stepCount = items.length;

  const isMobile = useMediaQuery(`(max-width: ${mobileBreakpoint || '768px'})`);

  const clickable = !!onClickStep;

  const orientation = isMobile && responsive ? 'vertical' : orientationProp;

  const isVertical = orientation === 'vertical';
  const isVerticalTimeline = isVertical && (isMobile ? false : (timeline ?? false));
  const Container = isVerticalTimeline ? TimelineContainer : React.Fragment;
  return (
    <StepperProvider
      value={{
        initialStep,
        orientation,
        state,
        size,
        responsive,
        checkIcon,
        errorIcon,
        onClickStep,
        clickable,
        stepCount,
        isVertical,
        isVerticalTimeline,
        variant: variant || 'circle',
        expandVerticalSteps,
        steps,
        scrollTracking,
        styles,
      }}
    >
      <Container className={timelineContainerClassName}>
        <div
          ref={ref}
          className={cn(
            'stepper__main-container',
            'flex w-full flex-wrap',
            stepCount === 1 ? 'justify-end' : 'justify-between',
            orientation === 'vertical' || isVerticalTimeline ? 'flex-col' : 'flex-row',
            variant === 'line' && orientation === 'horizontal' && 'gap-4',
            isVerticalTimeline && 'w-auto justify-start md:max-w-56',
            className,
            styles?.['main-container'],
          )}
          style={
            {
              '--step-icon-size': variables?.['--step-icon-size'] || `${VARIABLE_SIZES[size || 'md']}`,
              '--step-gap': variables?.['--step-gap'] || isVerticalTimeline ? '0px' : '8px',
            } as React.CSSProperties
          }
          {...rest}
        >
          <VerticalContent>{items}</VerticalContent>
        </div>
        {orientation === 'horizontal' && <HorizontalContent>{items}</HorizontalContent>}
        {isVerticalTimeline && (
          <div className={cn('flex flex-grow flex-col gap-2', timelineContentClassName)}>
            <HorizontalContent>{items}</HorizontalContent>
            {footer}
          </div>
        )}
        {!isVerticalTimeline && footer}
      </Container>
    </StepperProvider>
  );
});

const VerticalContent = ({ children }: { children: React.ReactNode }) => {
  const { activeStep } = useStepper();

  const childArr = React.Children.toArray(children);
  const stepCount = childArr.length;

  return (
    <>
      {React.Children.map(children, (child, i) => {
        const isCompletedStep = (React.isValidElement(child) && child.props.isCompletedStep) ?? i < activeStep;
        const isLastStep = i === stepCount - 1;
        const isCurrentStep = i === activeStep;

        const stepProps = {
          index: i,
          isCompletedStep,
          isCurrentStep,
          isLastStep,
        };

        if (React.isValidElement(child)) {
          return React.cloneElement(child, stepProps);
        }
        return null;
      })}
    </>
  );
};

const HorizontalContent = ({ children }: { children: React.ReactNode }) => {
  const { activeStep } = useStepper();
  const childArr = React.Children.toArray(children);

  if (activeStep > childArr.length) {
    return null;
  }

  return (
    <>
      {React.Children.map(childArr[activeStep], (node) => {
        if (!React.isValidElement(node)) {
          return null;
        }
        return React.Children.map(node.props.children, (childNode) => childNode);
      })}
    </>
  );
};

export { Stepper, Step, useStepper };
