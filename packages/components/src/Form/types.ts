import type { ColorVariant } from '@paalan/react-shared/constants';
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
export interface FormItemInputField extends CommonFormItemField, FormInputProps {
  type: 'input';
  autoComplete?: 'off' | 'on';
  inputType?: React.ComponentPropsWithoutRef<'input'>['type'];
}

export interface FormItemNumberInputField extends CommonFormItemField, Omit<NumberInputProps, 'label' | 'value'> {
  type: 'number';
  autoComplete?: 'off' | 'on';
}

export interface FormItemTextAreaField extends CommonFormItemField, Omit<TextareaProps, 'label' | 'name'> {
  type: 'textarea';
  autoComplete?: 'off' | 'on';
}

export interface FormItemCheckboxField
  extends Omit<CommonFormItemField, 'placeholder'>,
    Omit<CheckboxProps, 'label' | 'name' | 'type'> {
  type: 'checkbox';
  variant?: ColorVariant;
}
export interface FormItemRadioGroupField
  extends Omit<CommonFormItemField, 'placeholder'>,
    Omit<RadioGroupProps, 'label' | 'name'> {
  type: 'radio-group';
  options: RadioGroupProps['options'];
  radioInline?: boolean;
  labelClassName?: string;
  swapRight?: boolean;
  variant?: ColorVariant;
}
export interface FormItemCheckboxGroupField
  extends Omit<CommonFormItemField, 'placeholder'>,
    Omit<CheckboxGroupProps, 'label' | 'name' | 'selectedValues' | 'onSelectedValueChange'> {
  type: 'checkbox-group';
  options: CheckboxGroupProps['options'];
  checkboxInline?: boolean;
  labelClassName?: string;
  swapRight?: boolean;
  variant?: ColorVariant;
}

export interface FormItemSelectField
  extends Omit<CommonFormItemField, 'className'>,
    Omit<SelectProps, 'label' | 'placeholder' | 'name'> {
  type: 'select';
  options: SelectOption[];
  triggerClassName?: string;
  contentClassName?: string;
}
export interface FormItemMultiSelectField
  extends Omit<CommonFormItemField, 'className'>,
    Omit<MultiSelectProps, 'label' | 'selectedValues' | 'onSelectedValueChange'> {
  type: 'multi-select';
  options: MultiSelectProps['options'];
  triggerClassName?: MultiSelectProps['triggerClassName'];
  contentClassName?: MultiSelectProps['contentClassName'];
  commandClassName?: MultiSelectProps['commandClassName'];
}

export interface FormItemComboboxField extends Omit<CommonFormItemField, 'className'>, Omit<ComboboxProps, 'label'> {
  type: 'combobox';
  options: ComboboxProps['options'];
}

export interface FormDatePickerField extends CommonFormItemField, Omit<DatePickerProps, 'label'> {
  type: 'date-picker';
}

export interface FormDateRangePickerField extends CommonFormItemField, Omit<DateRangePickerProps, 'label'> {
  type: 'date-range-picker';
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
