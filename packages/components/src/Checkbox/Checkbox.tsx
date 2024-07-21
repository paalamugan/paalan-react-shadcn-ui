import * as React from 'react';

import type { VariantProps } from 'class-variance-authority';

import { CheckIcon } from '@paalan/react-icons';
import { MinusIcon } from '@paalan/react-icons/solid';
import { Box } from '@paalan/react-layouts';
import { cn } from '@paalan/react-shared/lib';
import { isAriaInvalid } from '@paalan/react-shared/utils';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { cva } from 'class-variance-authority';

import { ErrorMessage } from '../ErrorMessage';
import { Label } from '../Label';

const checkboxVariants = cva(
  'peer size-4 shrink-0 rounded-sm border border-gray-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
        secondary:
          'data-[state=checked]:border-secondary data-[state=checked]:bg-secondary data-[state=checked]:text-secondary-foreground',
        tertiary:
          'data-[state=checked]:border-tertiary data-[state=checked]:bg-tertiary data-[state=checked]:text-tertiary-foreground',
        info: 'data-[state=checked]:border-info data-[state=checked]:bg-info data-[state=checked]:text-info-foreground',
        success:
          'data-[state=checked]:border-success data-[state=checked]:bg-success data-[state=checked]:text-success-foreground',
        warning:
          'data-[state=checked]:border-warning data-[state=checked]:bg-warning data-[state=checked]:text-warning-foreground',
        danger:
          'data-[state=checked]:border-danger data-[state=checked]:bg-danger data-[state=checked]:text-danger-foreground',
        accent:
          'data-[state=checked]:border-accent data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

const CheckboxRoot = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    variant?: CheckboxProps['variant'];
    indeterminate?: boolean;
  }
>(({ className, variant, indeterminate, ...props }, ref) => (
  <CheckboxPrimitive.Root ref={ref} className={cn(checkboxVariants({ variant }), className)} {...props}>
    <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center text-current')}>
      {indeterminate ? <MinusIcon className="size-full pb-0.5" /> : <CheckIcon className="size-[15px]" />}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
CheckboxRoot.displayName = CheckboxPrimitive.Root.displayName;

export interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  /** Label for the checkbox */
  label?: React.ReactNode;
  /** Whether the checkbox is checked or not */
  checked?: boolean;
  /** Whether the checkbox is disabled or not */
  disabled?: boolean;
  /** Callback when the checkbox value changes */
  onCheckedChange?: (checked: boolean) => void;
  /** Variant of the checkbox */
  variant?: VariantProps<typeof checkboxVariants>['variant'];
  /**
   * Whether the checkbox is swapped to the right or not
   */
  swapRight?: boolean;
  /**
   * The class name for the checkbox label
   */
  labelClassName?: string;
  /**
   * Whether the checkbox is invalid.
   */
  'aria-invalid'?: boolean;
  /**
   * whether the checkbox is invalid
   */
  isInvalid?: boolean;
  /**
   * The error message for the checkbox
   */
  errorMessage?: string;
  /**
   * Whether the checkbox is indeterminate or not
   */
  indeterminate?: boolean;
  /**
   * The class name for the checkbox root container
   */
  rootClassName?: string;
}

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  (
    {
      label,
      className,
      rootClassName,
      swapRight,
      labelClassName,
      isInvalid: invalid,
      errorMessage,
      indeterminate,
      checked,
      ...props
    },
    ref,
  ) => {
    const isInvalid = isAriaInvalid(props['aria-invalid']) || invalid;
    const id = props.id || props.name || label?.toString() || '';
    return (
      <>
        <Box className={cn('flex items-center gap-2', rootClassName)}>
          <CheckboxRoot
            ref={ref}
            {...props}
            id={id}
            checked={indeterminate ? true : checked}
            indeterminate={indeterminate}
            className={cn(
              {
                'order-1': swapRight,
                'border-danger data-[state=checked]:bg-danger data-[state=checked]:text-danger-foreground': isInvalid,
              },
              className,
            )}
          />
          {label && (
            <Label
              htmlFor={id}
              text={label}
              required={props.required}
              isInvalid={isInvalid}
              className={cn('cursor-pointer', labelClassName)}
            />
          )}
        </Box>
        {isInvalid && <ErrorMessage message={errorMessage} />}
      </>
    );
  },
);
Checkbox.displayName = 'Checkbox';

export { Checkbox, CheckboxRoot };
