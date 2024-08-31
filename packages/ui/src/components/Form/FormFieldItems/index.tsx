import type { FieldValues } from 'react-hook-form';
import type { FormComponentProps } from '../types';

import { FormFieldItemComponent } from '../FormFieldItem';

export type FormFieldItemsProps<TData extends FieldValues> = Pick<FormComponentProps<TData>, 'fields' | 'inline'> & {
  control: FormComponentProps<TData>['form']['control'];
};
export const FormFieldItems = <TData extends FieldValues>({ fields, ...props }: FormFieldItemsProps<TData>) => {
  return (
    <>
      {fields.map((field) => (
        <FormFieldItemComponent key={field.name} field={field} {...props} />
      ))}
    </>
  );
};
