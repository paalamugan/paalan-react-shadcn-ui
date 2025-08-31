import { useControllableState } from '@paalan/react-hooks';
import { isDefinedValue, isPositiveFloat, isPositiveInteger } from '@paalan/react-shared/lib';
import { forwardRef } from '@paalan/react-shared/utils';

import type { ComponentWithAs } from '@paalan/react-shared/types';
import type * as React from 'react';
import type { InputProps } from '../Input';

import { Input } from '../Input';

export interface NumberInputProps extends Omit<InputProps, 'onValueChange' | 'value' | 'defaultValue'> {
  /**
   * value of number input
   */
  value?: string | number | null;
  /**
   * default value of number input(when uncontrolled)
   */
  defaultValue?: string | number | null;
  /**
   * zero will be treated as empty string
   */
  zeroAsEmptyString?: boolean;
  /**
   * If true, only positive integer is allowed
   */
  isPositiveInteger?: boolean;
  /**
   * If true, only positive float is allowed
   */
  isPositiveFloat?: boolean;
  /**
   * If true, only positive integer is allowed and starts with zero
   * @default false
   */
  isPositiveIntegerStartsWithZero?: boolean;
  /**
   * if true, only positive float is allowed and starts with zero
   * @default false
   */
  isPositiveFloatStartsWithZero?: boolean;
  /**
   *
   * @param value current value of the input
   */
  onValueChange?: (value: number | null) => void;
  /**
   * max length of the input
   */
  maxLength?: number;
}

export const NumberInput: ComponentWithAs<'input', NumberInputProps> = forwardRef<NumberInputProps, 'input'>(
  (
    {
      isPositiveInteger: isPositiveIntegerValue,
      isPositiveFloat: isPositiveFloatValue,
      onChange,
      onValueChange,
      value,
      defaultValue,
      isPositiveIntegerStartsWithZero,
      isPositiveFloatStartsWithZero,
      zeroAsEmptyString,
      maxLength,
      ...props
    },
    ref,
  ) => {
    const [localValue, setLocalValue] = useControllableState({
      value: isDefinedValue(value) ? `${zeroAsEmptyString ? value || '' : value}` : '',
      defaultValue: isDefinedValue(defaultValue) ? `${zeroAsEmptyString ? defaultValue || '' : ''}` : '',
      onChange: (value) => onValueChange?.(value ? +value : null),
    });

    const onChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      if (value === '') {
        setLocalValue(value);
        return onChange?.(event);
      }

      // Handle max length
      if (maxLength && value.length > maxLength) {
        setLocalValue(value.slice(0, maxLength));
        return onChange?.(event);
      }

      if (isPositiveIntegerValue && isPositiveInteger(value, 1)) {
        setLocalValue(value);
        onChange?.(event);
      } else if (isPositiveFloatValue && isPositiveFloat(value, 1)) {
        setLocalValue(value);
        onChange?.(event);
      } else if (isPositiveIntegerStartsWithZero && isPositiveInteger(value, 0)) {
        setLocalValue(value);
        onChange?.(event);
      } else if (isPositiveFloatStartsWithZero && isPositiveFloat(value, 0)) {
        setLocalValue(value);
        onChange?.(event);
      } else {
        setLocalValue(value);
        onChange?.(event);
      }
    };
    return <Input {...props} type="number" value={localValue} onChange={onChangeHandle} ref={ref} />;
  },
);
NumberInput.displayName = 'NumberInput';
