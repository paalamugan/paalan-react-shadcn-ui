import { useEffect, useState } from 'react';

import { cn } from '@paalan/react-shared/lib';
import { forwardRef, isAriaInvalid } from '@paalan/react-shared/utils';

import type { BoxProps } from '@/base';
import type { ComponentWithAs } from '@paalan/react-shared/types';

import { Box } from '@/base';

import { ErrorMessage } from '../ErrorMessage';
import { Label } from '../Label';

export interface TextareaProps extends BoxProps, Omit<React.ComponentPropsWithoutRef<'textarea'>, 'color'> {
  /**
   * whether the textarea is invalid
   */
  isInvalid?: boolean;
  /**
   * label for the input
   */
  label?: string;
  /**
   * inline input or not
   */
  inline?: boolean;
  /**
   * textarea class name for styling
   */
  className?: string;
  /**
   * parent class name for styling
   */
  parentClassName?: string;
  /**
   * error message for the textarea
   */
  errorMessage?: string;
  /**
   * value for the textarea
   */
  value?: string;
  /**
   * on value change callback
   */
  onValueChange?: (value: string) => void;
}

const BoxTextarea = Box.withComponent('textarea');
const Textarea: ComponentWithAs<'textarea', TextareaProps> = forwardRef<TextareaProps, 'textarea'>(
  (
    {
      className,
      isInvalid: invalid,
      label,
      inline,
      parentClassName,
      required,
      id,
      errorMessage,
      value,
      onValueChange,
      defaultValue,
      ...props
    },
    ref,
  ) => {
    const [localValue, setLocalValue] = useState(value ?? defaultValue);

    useEffect(() => {
      setLocalValue(value);
    }, [value]);

    const isInvalid = isAriaInvalid(props['aria-invalid']) || invalid;
    const labelId = id || props.name || label;

    return (
      <>
        <Box
          className={cn(
            'flex w-full flex-col gap-2',
            {
              'flex-row items-center': inline,
            },
            parentClassName,
          )}
        >
          {label && (
            <Label
              htmlFor={labelId}
              required={required}
              className={cn({
                'text-danger': isInvalid,
              })}
            >
              {label}
            </Label>
          )}
          <BoxTextarea
            {...props}
            className={cn(
              'flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
              {
                'border-danger placeholder:text-danger focus-visible:ring-danger/40': isInvalid,
                'bg-muted/40 read-only:focus-visible:ring-0': props.readOnly,
              },
              className,
            )}
            ref={ref}
            id={labelId}
            required={required}
            value={localValue}
            onChange={(e) => {
              onValueChange?.(e.target.value);
              props.onChange?.(e);
            }}
          />
        </Box>
        {isInvalid && <ErrorMessage message={errorMessage} />}
      </>
    );
  },
);
Textarea.displayName = 'Textarea';

export { Textarea };
