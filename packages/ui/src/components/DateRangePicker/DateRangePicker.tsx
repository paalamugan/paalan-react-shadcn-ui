import * as React from 'react';

import { CalendarIcon, XCircleIcon } from '@paalan/react-icons';
import { cn, isAriaInvalid } from '@paalan/react-shared/lib';
import { addDays, format } from 'date-fns';

import type { DateRange, DayPickerBase } from 'react-day-picker';

import { Box } from '../../base/Box';
import { Button } from '../Button';
import { Calendar } from '../Calendar';
import { ErrorMessage } from '../ErrorMessage';
import { Label } from '../Label';
import { PopoverContent, PopoverRoot, PopoverTrigger } from '../Popover';
import { SelectContent, SelectItem, SelectRoot, SelectTrigger, SelectValue } from '../Select';

export type DateRangePreset = {
  /**
   * Label for the preset picker.
   */
  label: string;

  /**
   * an integer, when added to today, represents start of date range
   */
  from: number;

  /**
   * an integer, when added to today, represents end of date range
   */
  to: number;
};

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
   * Placeholder text for the presets.
   */
  presetPlaceholder?: string;
  /**
   * Preset values to show.
   * value is the number of days to add to the current date.
   */
  presets?: DateRangePreset[];
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
   * Whether the date range picker is disabled or not
   */
  disabled?: boolean;
  /**
   * Additional props for the calendar component.
   */
  calendarProps?: DayPickerBase;
}

const DELIMITER = '::';
const PresetCalendar: React.FC<
  Pick<
    DateRangePickerProps,
    'presets' | 'presetPlaceholder' | 'dateRange' | 'onDateRangeChange' | 'numberOfMonths' | 'calendarProps'
  >
> = ({ presets, dateRange, onDateRangeChange, presetPlaceholder = 'Select', numberOfMonths, calendarProps }) => {
  return (
    <>
      <SelectRoot
        onValueChange={(value) => {
          const today = new Date();
          const dateRanges = value.split(DELIMITER);
          onDateRangeChange?.({
            from: addDays(today, parseInt(dateRanges[0] ?? '0')),
            to: addDays(today, parseInt(dateRanges[1] ?? '0')),
          });
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder={presetPlaceholder} />
        </SelectTrigger>
        <SelectContent position="popper">
          {(presets || []).map((preset) => {
            const value = `${preset.from}${DELIMITER}${preset.to}`;

            return (
              <SelectItem key={value} value={value}>
                {preset.label}
              </SelectItem>
            );
          })}
        </SelectContent>
      </SelectRoot>
      <div className="rounded-md border">
        <Calendar
          {...calendarProps}
          mode="range"
          defaultMonth={dateRange?.from}
          selected={dateRange}
          onSelect={onDateRangeChange}
          initialFocus
          numberOfMonths={numberOfMonths}
        />
      </div>
    </>
  );
};

/**
 *  A date picker component with range and presets.
 */
export const DateRangePicker = React.forwardRef<HTMLButtonElement, DateRangePickerProps>(
  (
    {
      dateRange: range,
      onDateRangeChange: onRangeChange,
      label,
      placeholder = 'Pick a date range',
      numberOfMonths = 2,
      dateFormat = 'MMM dd, yyyy',
      presetPlaceholder,
      presets,
      className,
      parentClassName,
      isInvalid: invalid,
      required,
      id,
      errorMessage,
      disabled,
      calendarProps,
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

    const isPreset = presets && presets.length > 0;

    return (
      <>
        <Box className={cn('flex flex-1 flex-col gap-2', parentClassName)}>
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
                  type="button"
                  variant={'outline'}
                  disabled={disabled}
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
              <PopoverContent
                className={cn('min-w-full', isPreset ? 'flex w-auto flex-col space-y-2 p-2' : 'w-auto p-0')}
                align="start"
              >
                {isPreset ? (
                  <PresetCalendar
                    presets={presets}
                    dateRange={date}
                    onDateRangeChange={onSelect}
                    presetPlaceholder={presetPlaceholder}
                    numberOfMonths={numberOfMonths}
                  />
                ) : (
                  <Calendar
                    {...calendarProps}
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={onSelect}
                    numberOfMonths={numberOfMonths}
                    initialFocus
                  />
                )}
              </PopoverContent>
            </PopoverRoot>
          </Box>
        </Box>
        {isInvalid && <ErrorMessage message={errorMessage} />}
      </>
    );
  },
);
