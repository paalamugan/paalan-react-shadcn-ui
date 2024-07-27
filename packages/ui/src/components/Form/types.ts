import type { ColorVariant } from '@paalan/react-shared/system';
import type { ReactNode } from 'react';
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

interface CommonFormItemField {
  name: string;
  label: string;
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
export interface FormItemInputField
  extends CommonFormItemField,
    Partial<Pick<FormInputProps, 'onValueChange' | 'onChange'>> {
  type: 'input';
  autoComplete?: 'off' | 'on';
  inputType?: React.ComponentPropsWithoutRef<'input'>['type'];
  inputProps?: Omit<FormInputProps, 'onValueChange' | 'onChange'>;
}

export interface FormItemNumberInputField
  extends CommonFormItemField,
    Partial<Pick<NumberInputProps, 'onValueChange'>> {
  type: 'number';
  autoComplete?: 'off' | 'on';
  numberInputProps?: Omit<NumberInputProps, 'label' | 'value' | 'onValueChange'>;
}

export interface FormItemTextAreaField
  extends CommonFormItemField,
    Partial<Pick<TextareaProps, 'onValueChange' | 'onChange'>> {
  type: 'textarea';
  autoComplete?: 'off' | 'on';
  textareaProps?: Omit<TextareaProps, 'label' | 'name' | 'onValueChange' | 'onChange'>;
}

export interface FormItemSelectField extends CommonFormItemField, Partial<Pick<SelectProps, 'onValueChange'>> {
  type: 'select';
  options: SelectOption[];
  triggerClassName?: string;
  contentClassName?: string;
  selectProps?: Omit<SelectProps, 'label' | 'placeholder' | 'name' | 'onValueChange'>;
}

export interface FormItemCheckboxField
  extends Omit<CommonFormItemField, 'placeholder'>,
    Partial<Pick<CheckboxProps, 'onChange' | 'onCheckedChange'>> {
  type: 'checkbox';
  variant?: ColorVariant;
  checkboxProps?: Omit<CheckboxProps, 'label' | 'name' | 'type' | 'onCheckedChange' | 'onChange'>;
}

export interface FormItemCheckboxGroupField
  extends Omit<CommonFormItemField, 'placeholder'>,
    Partial<Pick<CheckboxGroupProps, 'onSelectedValueChange'>> {
  type: 'checkbox-group';
  options: CheckboxGroupProps['options'];
  checkboxInline?: boolean;
  labelClassName?: string;
  swapRight?: boolean;
  variant?: ColorVariant;
  checkboxGroupProps?: Omit<CheckboxGroupProps, 'label' | 'name' | 'selectedValues' | 'onSelectedValueChange'>;
}

export interface FormItemRadioGroupField
  extends Omit<CommonFormItemField, 'placeholder'>,
    Partial<Pick<RadioGroupProps, 'onChange' | 'onValueChange'>> {
  type: 'radio-group';
  options: RadioGroupProps['options'];
  radioInline?: boolean;
  labelClassName?: string;
  swapRight?: boolean;
  variant?: ColorVariant;
  radioGroupProps?: Omit<RadioGroupProps, 'label' | 'name' | 'onValueChange' | 'onChange'>;
}

export interface FormItemComboboxField extends CommonFormItemField, Partial<Pick<ComboboxProps, 'onValueChange'>> {
  type: 'combobox';
  options: ComboboxProps['options'];
  comboboxProps?: Omit<ComboboxProps, 'label' | 'onValueChange'>;
}

export interface FormItemMultiSelectField
  extends CommonFormItemField,
    Partial<Pick<MultiSelectProps, 'onSelectedValueChange'>> {
  type: 'multi-select';
  options: MultiSelectProps['options'];
  triggerClassName?: MultiSelectProps['triggerClassName'];
  contentClassName?: MultiSelectProps['contentClassName'];
  commandClassName?: MultiSelectProps['commandClassName'];
  multiSelectProps?: Omit<MultiSelectProps, 'label' | 'selectedValues' | 'onSelectedValueChange'>;
}

export interface FormDatePickerField extends CommonFormItemField, Partial<Pick<DatePickerProps, 'onDateChange'>> {
  type: 'date-picker';
  datePickerProps?: Omit<DatePickerProps, 'label' | 'onDateChange'>;
}

export interface FormDateRangePickerField
  extends CommonFormItemField,
    Partial<Pick<DateRangePickerProps, 'onDateRangeChange'>> {
  type: 'date-range-picker';
  dateRangePickerProps?: Omit<DateRangePickerProps, 'label' | 'onDateRangeChange'>;
}

export type FormItemField =
  | FormItemInputField
  | FormItemNumberInputField
  | FormItemTextAreaField
  | FormItemSelectField
  | FormItemCheckboxField
  | FormItemMultiSelectField
  | FormItemRadioGroupField
  | FormItemCheckboxGroupField
  | FormItemComboboxField
  | FormDatePickerField
  | FormDateRangePickerField;
