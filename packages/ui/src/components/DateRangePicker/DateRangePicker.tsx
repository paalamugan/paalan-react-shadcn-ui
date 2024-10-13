import * as React from 'react';

import { CalendarIcon, XCircleIcon } from '@paalan/react-icons';
import { cn, isAriaInvalid } from '@paalan/react-shared/lib';
import { format } from 'date-fns';

import type { DateRange } from 'react-day-picker';

import { Box } from '../../base/Box';
import { Button } from '../Button';
import { Calendar } from '../Calendar';
import { ErrorMessage } from '../ErrorMessage';
import { Label } from '../Label';
import { PopoverContent, PopoverRoot, PopoverTrigger } from '../Popover';

export interface DateRangePickerProps {
  /**
   * The selected date.
   */
  dateRange?: DateRange;
  /**
   * Callback when the selected date changes.
   */
  onDateRangeChange?: (date: DateRange | undefined) => void;
  /**
   * Additional class names to apply to the date picker.
   */
  className?: string;
  /**
   * Label for the date picker.
   */
  label?: string;
  /**
   * Placeholder text for the date picker.
   */
  placeholder?: string;
  /**
   * Number of months to show in the calendar
   */
  numberOfMonths?: number;
  /**
   * Date format to use
   */
  dateFormat?: string;
  /**
   * required or not
   */
  required?: boolean;
  /**
   * Whether the checkbox is invalid.
   */
  'aria-invalid'?: boolean;
  /**
   * whether the checkbox is invalid
   */
  isInvalid?: boolean;
  /**
   *  id for the date picker
   */
  id?: string;
  /**
   * The error message for the checkbox
   */
  errorMessage?: string;
  /**
   * Parent class name for the date range picker
   */
  parentClassName?: string;
  /**
   * Whether the date range picker is disabled.
   */
  disabled?: boolean;
}

/**
 *  A date picker component with range and presets.
 */
export const DateRangePicker = React.forwardRef<HTMLButtonElement, DateRangePickerProps>(
  (
    {
      dateRange: range,
      onDateRangeChange: onRangeChange,
      label,
      placeholder = 'Pick a date',
      numberOfMonths = 2,
      dateFormat = 'MMM dd, yyyy',
      className,
      parentClassName,
      isInvalid: invalid,
      required,
      id,
      errorMessage,
      disabled,
      ...props
    },
    ref,
  ) => {
    const isInvalid = isAriaInvalid(props['aria-invalid']) || invalid;
    const labelId = id || label?.toLowerCase().replace(/\s/g, '-');
    const [date, setDate] = React.useState<DateRange | undefined>(undefined);

    React.useEffect(() => {
      setDate(range);
    }, [range]);

    const onSelect = React.useCallback(
      (range: DateRange | undefined) => {
        setDate(range);
        onRangeChange?.(range);
      },
      [onRangeChange],
    );

    return (
      <>
        <Box className={cn('flex flex-col gap-2', parentClassName)}>
          {label && (
            <Label htmlFor={labelId} required={required} isInvalid={isInvalid}>
              {label}
            </Label>
          )}
          <Box className={cn('grid gap-2', className)}>
            <PopoverRoot>
              <PopoverTrigger asChild>
                <Button
                  {...props}
                  disabled={disabled}
                  type="button"
                  variant={'outline'}
                  className={cn('min-w-[300px] justify-start text-left font-normal', {
                    'text-muted-foreground': !date,
                    'border-danger text-danger hover:bg-background hover:text-danger focus:ring-danger/40': isInvalid,
                  })}
                  wrapperClassName="justify-start"
                  ref={ref}
                  id={labelId}
                >
                  <CalendarIcon className="mr-2 size-4" />
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, dateFormat)} - {format(date.to, dateFormat)}
                      </>
                    ) : (
                      format(date.from, dateFormat)
                    )
                  ) : (
                    <Box as="span">{placeholder}</Box>
                  )}
                  {!!(date?.from || date?.to) && (
                    <XCircleIcon
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelect(undefined);
                      }}
                      title="Clear date range"
                      className={cn('ml-auto h-5 w-5 text-muted-foreground', {
                        'text-danger': isInvalid,
                      })}
                    />
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto min-w-fit p-0" align="start">
                <Calendar
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={onSelect}
                  numberOfMonths={numberOfMonths}
                  initialFocus
                />
              </PopoverContent>
            </PopoverRoot>
          </Box>
        </Box>
        {isInvalid && <ErrorMessage message={errorMessage} />}
      </>
    );
  },
);
