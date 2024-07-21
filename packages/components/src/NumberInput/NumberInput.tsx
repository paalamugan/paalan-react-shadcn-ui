import type { ComponentWithAs } from '@paalan/react-shared/types';
import type * as React from 'react';
import type { InputProps } from '../Input';

import { useControllableState } from '@paalan/react-hooks';
import { forwardRef, isDefinedValue, isPositiveFloat, isPositiveInteger } from '@paalan/react-shared/utils';

import { Input } from '../Input';

export interface NumberInputProps extends Omit<InputProps, 'onValueChange'> {
  /**
   * value of number input
   */
  value?: string | number | null;
  /**
   * default value of number input(when uncontrolled)
   */
  defaultValue?: string | number | null;
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
  positiveIntegerStartsWithZero?: boolean;
  /**
   * if true, only positive float is allowed and starts with zero
   * @default false
   */
  positiveFloatStartsWithZero?: boolean;
  /**
   *
   * @param value current value of the input
   */
  onValueChange?: (value: number) => void;
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
      positiveIntegerStartsWithZero = false,
      positiveFloatStartsWithZero = false,
      ...props
    },
    ref,
  ) => {
    const [localValue, setLocalValue] = useControllableState({
      value: isDefinedValue(value) ? `${value}` : '',
      defaultValue: isDefinedValue(defaultValue) ? `${defaultValue}` : '',
      onChange: (value) => onValueChange?.(+value),
    });

    const onChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      if (value === '') {
        setLocalValue(value);
        return onChange?.(event);
      }

      if (isPositiveIntegerValue) {
        if (isPositiveInteger(value, positiveIntegerStartsWithZero ? 0 : 1)) {
          setLocalValue(value);
          onChange?.(event);
        }
      } else if (isPositiveFloatValue) {
        if (isPositiveFloat(value, positiveFloatStartsWithZero ? 0 : 1)) {
          setLocalValue(value);
          onChange?.(event);
        }
      } else {
        setLocalValue(value);
        onChange?.(event);
      }
    };
    return <Input {...props} type="number" value={localValue} onChange={onChangeHandle} ref={ref} />;
  },
);
NumberInput.displayName = 'NumberInput';
