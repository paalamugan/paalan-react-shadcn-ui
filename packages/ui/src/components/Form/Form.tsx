import { cn } from '@paalan/react-shared/lib';

import type { FieldValues } from 'react-hook-form';
import type { FormComponentProps } from './types';

import { Box } from '../../base';
import { Button } from '../Button';
import { FormRoot } from './components';
import { FormFieldItems } from './FormFieldItems';

/**
 * Form component
 */
export const Form = <TData extends FieldValues>({
  form,
  onSubmit,
  onSubmitError,
  fields,
  className,
  submitText = 'Submit',
  SubmitButton,
  submitButtonVariant = 'solid',
  submitButtonColor = 'primary',
  submitClassName,
  resetText = 'Reset',
  ResetButton,
  resetButtonVariant = 'outline',
  resetButtonColor,
  resetClassName,
  actionClassName,
  hideResetButton = false,
  hideSubmitButton = false,
  noValidate = true,
  inline: formInline,
  formRef,
  id,
  isSubmitting: isFormSubmitting,
  isResetting,
  onReset,
  children,
}: FormComponentProps<TData>) => {
  const isSubmitting = isFormSubmitting ?? form.formState.isSubmitting;
  return (
    <FormRoot {...form}>
      <form
        id={id}
        ref={formRef}
        noValidate={noValidate}
        onSubmit={form.handleSubmit(onSubmit, onSubmitError)}
        className={cn('space-y-4', className)}
      >
        <FormFieldItems fields={fields} inline={formInline} control={form.control} />
        {children}
        <Box className={cn('flex gap-3 pt-2', actionClassName)}>
          {ResetButton ? (
            <ResetButton onFormReset={form.reset} />
          ) : (
            !hideResetButton && (
              <Button
                type="reset"
                variant={resetButtonVariant}
                color={resetButtonColor}
                disabled={isResetting}
                onClick={() => {
                  form.reset();
                  onReset?.();
                }}
                className={resetClassName}
              >
                {resetText}
              </Button>
            )
          )}
          {SubmitButton ? (
            <SubmitButton isSubmitting={isSubmitting} onFormSubmit={form.handleSubmit(onSubmit, onSubmitError)} />
          ) : (
            !hideSubmitButton && (
              <Button
                type="submit"
                variant={submitButtonVariant}
                color={submitButtonColor}
                isLoading={isSubmitting}
                className={submitClassName}
              >
                {submitText}
              </Button>
            )
          )}
        </Box>
      </form>
    </FormRoot>
  );
};

Form.displayName = 'Form';
