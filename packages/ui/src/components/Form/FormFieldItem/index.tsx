import { cn } from '@paalan/react-shared/lib';

import type { FieldValues } from 'react-hook-form';
import type { FormComponentProps, FormFieldItem } from '../types';

import { Checkbox } from '../../Checkbox';
import { CheckboxGroup } from '../../CheckboxGroup/CheckboxGroup';
import { Combobox } from '../../Combobox';
import { DatePicker } from '../../DatePicker';
import { DateRangePicker } from '../../DateRangePicker';
import { Input } from '../../Input';
import { MultiSelect } from '../../MultiSelect';
import { NumberInput } from '../../NumberInput/NumberInput';
import { RadioGroup } from '../../RadioGroup';
import { Select } from '../../Select';
import { Textarea } from '../../Textarea';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../components';

export type FormFieldItemProps<TData extends FieldValues> = Pick<FormComponentProps<TData>, 'inline'> & {
  control: FormComponentProps<TData>['form']['control'];
  field: FormFieldItem<TData>;
};

export const FormFieldItemComponent = <TData extends FieldValues>({
  inline: formInline,
  control,
  field: parentField,
}: FormFieldItemProps<TData>) => {
  const { required, label, labelDescription, inline, formItemClassName, formLabelClassName, ...item } = parentField;
  const inlineTypes = ['checkbox'];
  return (
    <FormField
      control={control}
      name={item.name}
      render={({ field }) => (
        <FormItem className={formItemClassName}>
          <div
            className={cn('flex flex-col gap-2', {
              'flex-row items-center': inline || formInline || inlineTypes.includes(item.type),
            })}
          >
            {label && (
              <FormLabel
                required={required}
                htmlFor={field.name}
                className={cn(
                  {
                    'break-word w-[9rem] shrink-0': formInline && !inlineTypes.includes(item.type),
                    'order-1': inlineTypes.includes(item.type),
                  },
                  formLabelClassName,
                )}
                labelDescription={labelDescription}
              >
                {label}
              </FormLabel>
            )}

            <>
              {item.type === 'custom' && <FormControl>{item.render?.({ field })}</FormControl>}
              {item.type === 'input' && (
                <FormControl>
                  <Input
                    {...field}
                    id={field.name}
                    autoComplete={item.autoComplete}
                    placeholder={item.placeholder}
                    disabled={item.disabled}
                    className={item.className}
                    type={item.inputType || 'text'}
                    {...item?.inputProps}
                    inputType={undefined}
                    onChange={(event) => {
                      field.onChange(event.currentTarget.value);
                      item.onValueChange?.(event.currentTarget.value);
                      item.onChange?.(event);
                    }}
                  />
                </FormControl>
              )}
              {item.type === 'number' && (
                <FormControl>
                  <NumberInput
                    {...field}
                    id={field.name}
                    value={field.value ?? ''}
                    autoComplete={item.autoComplete}
                    placeholder={item.placeholder}
                    disabled={item.disabled}
                    className={item.className}
                    {...item?.numberInputProps}
                    onChange={(event) => {
                      const value = event.currentTarget.valueAsNumber;
                      field.onChange(Number.isNaN(value) ? undefined : value);
                      item.onValueChange?.(Number.isNaN(value) ? null : value);
                    }}
                  />
                </FormControl>
              )}
              {item.type === 'textarea' && (
                <FormControl>
                  <Textarea
                    {...field}
                    id={field.name}
                    autoComplete={item.autoComplete}
                    placeholder={item.placeholder}
                    disabled={item.disabled}
                    className={item.className}
                    {...item?.textareaProps}
                    onChange={(event) => {
                      field.onChange(event.currentTarget.value);
                      item.onValueChange?.(event.currentTarget.value);
                      item.onChange?.(event);
                    }}
                  />
                </FormControl>
              )}
              {item.type === 'select' && (
                <FormControl>
                  <Select
                    {...field}
                    id={field.name}
                    placeholder={item.placeholder}
                    disabled={item.disabled}
                    className={item.className}
                    triggerClassName={item.triggerClassName}
                    contentClassName={item.contentClassName}
                    options={item.options}
                    {...item?.selectProps}
                    onValueChange={(value) => {
                      field.onChange(value || undefined);
                      item.onValueChange?.(value);
                    }}
                  />
                </FormControl>
              )}
              {item.type === 'checkbox' && (
                <FormControl>
                  <Checkbox
                    {...field}
                    id={field.name}
                    disabled={item.disabled}
                    className={item.className}
                    variant={item.variant}
                    type={'button'}
                    {...item?.checkboxProps}
                    onChange={item?.onChange}
                    onCheckedChange={(checked) => {
                      field.onChange(checked);
                      item.onCheckedChange?.(checked);
                    }}
                  />
                </FormControl>
              )}
              {item.type === 'checkbox-group' && (
                <FormControl>
                  <CheckboxGroup
                    {...field}
                    inline={item.checkboxInline}
                    className={item.className}
                    options={item.options}
                    labelClassName={item.labelClassName}
                    swapRight={item.swapRight}
                    variant={item.variant}
                    {...item?.checkboxGroupProps}
                    selectedValues={field.value?.length ? field.value : undefined}
                    onSelectedValueChange={(values) => {
                      field.onChange(values.length ? values : undefined);
                      item.onSelectedValueChange?.(values);
                    }}
                  />
                </FormControl>
              )}
              {item.type === 'radio-group' && (
                <FormControl>
                  <RadioGroup
                    {...field}
                    id={field.name}
                    inline={item.radioInline}
                    className={item.className}
                    options={item.options}
                    labelClassName={item.labelClassName}
                    swapRight={item.swapRight}
                    variant={item.variant}
                    disabled={item.disabled}
                    {...item?.radioGroupProps}
                    onChange={item?.onChange}
                    onValueChange={(value) => {
                      field.onChange(value || undefined);
                      item.onValueChange?.(value);
                    }}
                  />
                </FormControl>
              )}
              {item.type === 'combobox' && (
                <FormControl>
                  <Combobox
                    {...field}
                    options={item.options}
                    placeholder={item.placeholder}
                    disabled={item.disabled}
                    className={item.className}
                    {...item?.comboboxProps}
                    onValueChange={(value) => {
                      field.onChange(value || undefined);
                      item.onValueChange?.(value);
                    }}
                  />
                </FormControl>
              )}
              {item.type === 'multi-select' && (
                <FormControl>
                  <MultiSelect
                    {...field}
                    options={item.options}
                    placeholder={item.placeholder}
                    disabled={item.disabled}
                    className={item.className}
                    triggerClassName={item.triggerClassName}
                    contentClassName={item.contentClassName}
                    commandClassName={item.commandClassName}
                    {...item?.multiSelectProps}
                    selectedValues={field.value?.length ? field.value : undefined}
                    onSelectedValueChange={(values) => {
                      field.onChange(values.length ? values : undefined);
                      item.onSelectedValueChange?.(values);
                    }}
                  />
                </FormControl>
              )}
              {item.type === 'date-picker' && (
                <FormControl>
                  <DatePicker
                    {...field}
                    date={field.value}
                    placeholder={item.placeholder}
                    disabled={item.disabled}
                    className={item.className}
                    {...item?.datePickerProps}
                    onDateChange={(value) => {
                      field.onChange(value || undefined);
                      item.onDateChange?.(value);
                    }}
                  />
                </FormControl>
              )}
              {item.type === 'date-range-picker' && (
                <FormControl>
                  <DateRangePicker
                    {...field}
                    dateRange={field.value}
                    placeholder={item.placeholder}
                    disabled={item.disabled}
                    className={item.className}
                    {...item?.dateRangePickerProps}
                    onDateRangeChange={(value) => {
                      field.onChange(value || undefined);
                      item.onDateRangeChange?.(value);
                    }}
                  />
                </FormControl>
              )}
            </>
          </div>
          {item.description && (
            <FormDescription
              className={cn({
                'pl-[9.5rem]': formInline,
              })}
            >
              {item.description}
            </FormDescription>
          )}
          <FormMessage
            className={cn({
              'pl-[9.5rem]': formInline,
            })}
          />
        </FormItem>
      )}
    />
  );
};
