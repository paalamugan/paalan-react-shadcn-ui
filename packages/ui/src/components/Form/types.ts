import type { ColorVariant } from '@paalan/react-shared/system';
import type { ReactNode } from 'react';
import type {
  ControllerRenderProps,
  FieldValues,
  Path,
  SubmitErrorHandler,
  SubmitHandler,
  UseFormReset,
  UseFormReturn,
} from 'react-hook-form';
import type { ButtonProps } from '../Button';
import type { CheckboxProps } from '../Checkbox';
import type { CheckboxGroupProps } from '../CheckboxGroup/CheckboxGroup';
import type { ComboboxProps } from '../Combobox';
import type { DatePickerProps } from '../DatePicker';
import type { DateRangePickerProps } from '../DateRangePicker';
import type { Input } from '../Input';
import type { MultiSelectProps } from '../MultiSelect';
import type { NumberInputProps } from '../NumberInput/NumberInput';
import type { RadioGroupProps } from '../RadioGroup';
import type { SelectProps } from '../Select';
import type { SelectOption } from '../Select/types';
import type { TextareaProps } from '../Textarea';

interface CommonFormFieldItem<TData> {
  name: Path<TData>;
  label?: ReactNode;
  labelDescription?: ReactNode;
  description?: ReactNode;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  inline?: boolean;
  formItemClassName?: string;
  formLabelClassName?: string;
}

export type FormInputProps = Omit<
  React.ComponentPropsWithoutRef<typeof Input>,
  'inline' | 'label' | 'className' | 'disabled' | 'placeholder' | 'name' | 'required' | 'type'
>;
export interface FormFieldInputItem<TData>
  extends CommonFormFieldItem<TData>,
    Partial<Pick<FormInputProps, 'onValueChange' | 'onChange'>> {
  type: 'input';
  autoComplete?: 'off' | 'on';
  inputType?: React.ComponentPropsWithoutRef<'input'>['type'];
  inputProps?: Omit<FormInputProps, 'onValueChange' | 'onChange'>;
}

export interface FormFieldNumberInputItem<TData>
  extends CommonFormFieldItem<TData>,
    Partial<Pick<NumberInputProps, 'onValueChange'>> {
  type: 'number';
  autoComplete?: 'off' | 'on';
  numberInputProps?: Omit<NumberInputProps, 'label' | 'value' | 'onValueChange'>;
}

export interface FormFieldTextAreaItem<TData>
  extends CommonFormFieldItem<TData>,
    Partial<Pick<TextareaProps, 'onValueChange' | 'onChange'>> {
  type: 'textarea';
  autoComplete?: 'off' | 'on';
  textareaProps?: Omit<TextareaProps, 'label' | 'name' | 'onValueChange' | 'onChange'>;
}

export interface FormFieldSelectItem<TData>
  extends CommonFormFieldItem<TData>,
    Partial<Pick<SelectProps, 'onValueChange'>> {
  type: 'select';
  options: SelectOption[];
  triggerClassName?: string;
  contentClassName?: string;
  selectProps?: Omit<SelectProps, 'label' | 'placeholder' | 'name' | 'onValueChange'>;
}

export interface FormFieldCheckboxItem<TData>
  extends Omit<CommonFormFieldItem<TData>, 'placeholder'>,
    Partial<Pick<CheckboxProps, 'onChange' | 'onCheckedChange'>> {
  type: 'checkbox';
  variant?: ColorVariant;
  checkboxProps?: Omit<CheckboxProps, 'label' | 'name' | 'type' | 'onCheckedChange' | 'onChange'>;
}

export interface FormFieldCheckboxGroupItem<TData>
  extends Omit<CommonFormFieldItem<TData>, 'placeholder'>,
    Partial<Pick<CheckboxGroupProps, 'onSelectedValueChange'>> {
  type: 'checkbox-group';
  options: CheckboxGroupProps['options'];
  checkboxInline?: boolean;
  labelClassName?: string;
  swapRight?: boolean;
  variant?: ColorVariant;
  checkboxGroupProps?: Omit<CheckboxGroupProps, 'label' | 'name' | 'selectedValues' | 'onSelectedValueChange'>;
}

export interface FormFieldRadioGroupItem<TData>
  extends Omit<CommonFormFieldItem<TData>, 'placeholder'>,
    Partial<Pick<RadioGroupProps, 'onChange' | 'onValueChange'>> {
  type: 'radio-group';
  options: RadioGroupProps['options'];
  radioInline?: boolean;
  labelClassName?: string;
  swapRight?: boolean;
  variant?: ColorVariant;
  radioGroupProps?: Omit<RadioGroupProps, 'label' | 'name' | 'onValueChange' | 'onChange'>;
}

export interface FormFieldComboboxItem<TData>
  extends CommonFormFieldItem<TData>,
    Partial<Pick<ComboboxProps, 'onValueChange'>> {
  type: 'combobox';
  options: ComboboxProps['options'];
  comboboxProps?: Omit<ComboboxProps, 'label' | 'onValueChange'>;
}

export interface FormFieldMultiSelectItem<TData>
  extends CommonFormFieldItem<TData>,
    Partial<Pick<MultiSelectProps, 'onSelectedValueChange'>> {
  type: 'multi-select';
  options: MultiSelectProps['options'];
  triggerClassName?: MultiSelectProps['triggerClassName'];
  contentClassName?: MultiSelectProps['contentClassName'];
  commandClassName?: MultiSelectProps['commandClassName'];
  multiSelectProps?: Omit<MultiSelectProps, 'label' | 'selectedValues' | 'onSelectedValueChange'>;
}

export interface FormFieldDatePickerItem<TData>
  extends CommonFormFieldItem<TData>,
    Partial<Pick<DatePickerProps, 'onDateChange'>> {
  type: 'date-picker';
  datePickerProps?: Omit<DatePickerProps, 'label' | 'onDateChange'>;
}

export interface FormFieldDateRangePickerItem<TData>
  extends CommonFormFieldItem<TData>,
    Partial<Pick<DateRangePickerProps, 'onDateRangeChange'>> {
  type: 'date-range-picker';
  dateRangePickerProps?: Omit<DateRangePickerProps, 'label' | 'onDateRangeChange'>;
}

export interface FormFieldCustomItem<TData extends FieldValues> extends CommonFormFieldItem<TData> {
  type: 'custom';
  render: (props: { field: ControllerRenderProps<TData, Path<TData>> }) => ReactNode;
}

export type FormFieldItem<TData extends FieldValues> =
  | FormFieldInputItem<TData>
  | FormFieldNumberInputItem<TData>
  | FormFieldTextAreaItem<TData>
  | FormFieldSelectItem<TData>
  | FormFieldCheckboxItem<TData>
  | FormFieldMultiSelectItem<TData>
  | FormFieldRadioGroupItem<TData>
  | FormFieldCheckboxGroupItem<TData>
  | FormFieldComboboxItem<TData>
  | FormFieldDatePickerItem<TData>
  | FormFieldDateRangePickerItem<TData>
  | FormFieldCustomItem<TData>;

export interface FormComponentProps<TData extends FieldValues> extends React.PropsWithChildren {
  /**
   * The form object from react-hook-form
   */
  form: UseFormReturn<TData>;
  /**
   * The fields to render
   */
  fields: FormFieldItem<TData>[];
  /**
   * The callback will fired when the form is submitted
   */
  onSubmit: SubmitHandler<TData>;
  /**
   * The callback will fired when the form is submitted with error
   */
  onSubmitError?: SubmitErrorHandler<TData> | undefined;
  /**
   * The text to display on the submit button
   */
  submitText?: React.ReactNode;
  /**
   * The submit button component
   */
  SubmitButton?: React.ComponentType<{
    /**
     * Whether the form is submitting or not
     */
    isSubmitting: boolean;
    /**
     * You have to call this function to submit the form, If you do that then the form will be submitted and onSubmit callback will be called if there is no error
     * Only use this function when you want to submit the form manually or <Button type="button" />
     * @param e Event
     * @example <Button type="button" isLoading={isSubmitting} onClick={onFormSubmit}>Submit</Button>
     */
    onFormSubmit: React.FormEventHandler<HTMLFormElement>;
  }>;
  /**
   * The submit button variant
   */
  submitButtonVariant?: ButtonProps['variant'];
  /**
   * The submit button color
   */
  submitButtonColor?: ButtonProps['color'];
  /**
   * The class name for the submit button
   */
  submitClassName?: string;
  /**
   * Whether the form is submitting or not
   */
  isSubmitting?: boolean;
  /**
   * The callback will fired when the form is reset
   */
  onReset?: () => void;
  /**
   * The text to display on the reset button
   */
  resetText?: React.ReactNode;
  /**
   * The reset button component
   */
  ResetButton?: React.ComponentType<{ onFormReset: UseFormReset<TData> }>;
  /**
   * The reset button variant
   */
  resetButtonVariant?: ButtonProps['variant'];
  /**
   * The reset button color
   */
  resetButtonColor?: ButtonProps['color'];
  /**
   * The class name for the reset button
   */
  resetClassName?: string;
  /**
   * Whether the form is resetting or not
   */
  isResetting?: boolean;
  /**
   * The class name for the form element
   */
  className?: string;
  /**
   * The parent class name for reset and submit buttons
   */
  actionClassName?: string;
  /**
   * Whether to hide the reset button
   */
  hideResetButton?: boolean;
  /**
   * Whether to hide the submit button
   */
  hideSubmitButton?: boolean;
  /**
   * Whether to display the form inline
   */
  inline?: boolean;
  /**
   * The ref for the form element
   */
  formRef?: React.MutableRefObject<HTMLFormElement | null>;
  /**
   * The id for the form element
   */
  id?: string;
  /**
   * Whether support the browser native form validation or not (default is true)
   */
  noValidate?: boolean;
}
