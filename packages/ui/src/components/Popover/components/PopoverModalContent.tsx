import { useEffect, useMemo, useRef, useState } from 'react';

import { CheckIcon } from '@paalan/react-icons';
import { cn } from '@paalan/react-shared/lib';
import { isObject } from 'lodash-es';

import type { OptionType } from '@paalan/react-shared/types';
import type { FC, ReactNode } from 'react';
import type { CommandNoResultFoundProps } from '../../Command/types';

import { Box } from '../../../base';
import {
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandLoading,
  CommandModal,
  CommandNoResultFound,
} from '../../Command';
import { Loading } from '../../Loading';

export interface PopoverModalContentProps extends Omit<CommandNoResultFoundProps, 'optionsLength' | 'searchValue'> {
  /**
   * List of items to be displayed in the combobox
   */
  options: OptionType[];
  /**
   * Optional placeholder for the search input
   * @default Search...
   * */
  searchPlaceholder?: string;

  /**
   * Optional value for the combobox
   */
  value?: string;
  /**
   *
   * @param value the value to set
   * @returns void
   */
  onValueChange?: (value: string) => void;
  /**
   * Optional commandClassName for the combobox
   */
  commandClassName?: string;
  /**
   * Optional className for the CommandInput
   */
  commandInputClassName?: string;
  /**
   * Optional className for the CommandGroup
   */
  commandGroupClassName?: string;
  /**
   * Optional className for the CommandItem
   */
  commandItemClassName?: string;
  /**
   * Optional className for the CheckIcon
   */
  checkIconClassName?: (value: string) => string | string;
  /**
   * @param option  the option to filter
   * @param value  the value to filter by
   * @param index  the index of the option
   * @returns  boolean whether the option should be displayed
   */
  filter?: (option: OptionType, value: string, index: number) => boolean;
  /**
   * filterBy the option to filter by label, value, both, metadata or all
   * - "label" will filter by label key in the option
   * - "value" will filter by value key in the option
   * - "metadata" will filter by the metadata key in the option
   * - "all" will filter by label, value and metadata keys in the option
   * - "both" will filter by label and value keys in the option
   * @default label
   */
  filterBy?: 'label' | 'value' | 'both' | 'metadata' | 'all';
  /**
   * Whether the combobox is multi
   */
  isMulti?: boolean;
  /**
   * Whether the combobox is loading
   */
  isLoading?: boolean;
  /**
   * Optional loading message for the combobox
   * @default 'Loading...'
   */
  loadingText?: ReactNode;
  /**
   * Optional search value for the combobox
   */
  searchValue?: string;
  /**
   *
   * @param search the search value to set
   * @returns void
   */
  onSearchValueChange?: (search: string) => void;
  /**
   * Optional whether to show the check icon
   * @default true
   */
  showCheckIcon?: boolean;
}

export const PopoverModalContent: FC<PopoverModalContentProps> = ({
  searchPlaceholder = 'Search...',
  emptyOptionMessage,
  emptyOptionContent,
  options,
  value,
  onValueChange,
  onSearchValueChange,
  commandClassName,
  commandInputClassName,
  commandGroupClassName,
  commandItemClassName,
  checkIconClassName,
  filter,
  filterBy = 'label',
  isMulti,
  isLoading,
  loadingText = 'Loading...',
  searchValue: searchValueProp,
  initialSearchContent,
  showCheckIcon = true,
}) => {
  const [searchValue, setSearchValue] = useState(searchValueProp || '');
  const filterRef = useRef(filter);

  useEffect(() => {
    setSearchValue(searchValueProp || '');
  }, [searchValueProp]);

  useEffect(() => {
    filterRef.current = filter;
  }, [filter]);

  const filteredOptions = useMemo(() => {
    if (!searchValue) return options;
    if (typeof filterRef.current === 'function') {
      return options.filter((option, index) => filterRef.current?.(option, searchValue, index));
    }

    const filterKeys: (keyof OptionType)[] = [];
    if (filterBy === 'all') {
      filterKeys.push('label', 'value', 'metadata');
    } else if (filterBy === 'both') {
      filterKeys.push('label', 'value');
    } else {
      filterKeys.push(filterBy);
    }

    return options.filter((option) => {
      return filterKeys.some((key) => {
        const value = option[key];
        if (typeof value === 'string') {
          return value.toLowerCase().includes(searchValue.toLowerCase());
        } else if (key === 'metadata' && isObject(value)) {
          // If the value is an object, check if any of its string properties match the search value
          return Object.values(value).some((val) => {
            if (typeof val === 'string') {
              return val.toLowerCase().includes(searchValue.toLowerCase());
            }
            return false;
          });
        }
        return false;
      });
    });
  }, [searchValue, filterBy, options]);

  const sortedOptions = useMemo(() => {
    return filteredOptions.sort((a, b) => {
      return a.label.localeCompare(b.label);
    });
  }, [filteredOptions]);

  const checkIconClassNameFn = (value: string) => {
    return typeof checkIconClassName === 'function' ? checkIconClassName(value) : checkIconClassName;
  };

  const handleSearchValueChange = (search: string) => {
    setSearchValue(search);
    onSearchValueChange?.(search);
  };

  return (
    <CommandModal className={commandClassName} shouldFilter={false} loop>
      <CommandInput
        placeholder={searchPlaceholder}
        className={cn('border-transparent focus:border-transparent focus:ring-0', commandInputClassName)}
        value={searchValue}
        onValueChange={handleSearchValueChange}
      />
      {!isLoading && (
        <CommandNoResultFound
          emptyOptionMessage={emptyOptionMessage}
          emptyOptionContent={emptyOptionContent}
          optionsLength={sortedOptions.length}
          searchValue={searchValueProp ?? searchValue}
          initialSearchContent={initialSearchContent}
        />
      )}
      <CommandGroup className={cn('max-h-64 overflow-auto', commandGroupClassName)}>
        {isLoading ? (
          <CommandLoading>
            <Box className="p-3 text-center">
              <Loading boxSize="5" content={loadingText} />
            </Box>
          </CommandLoading>
        ) : (
          sortedOptions.map((option) => (
            <CommandItem
              key={option.key || option.value}
              value={option.value}
              className={cn('flex cursor-pointer', commandItemClassName, option.className)}
              disabled={option.disabled}
              onSelect={(currentValue) => {
                onValueChange?.(currentValue === value ? '' : currentValue);
              }}
            >
              {showCheckIcon && isMulti && (
                <CheckIcon className={cn('mr-2 h-4 w-4', checkIconClassNameFn(option.value))} />
              )}
              {option.labelContent || option.label}
              {showCheckIcon && !isMulti && (
                <CheckIcon
                  className={cn(
                    'ml-auto h-4 w-4',
                    value === option.value ? 'opacity-100' : 'opacity-0',
                    checkIconClassNameFn(option.value),
                  )}
                />
              )}
            </CommandItem>
          ))
        )}
      </CommandGroup>
    </CommandModal>
  );
};

PopoverModalContent.displayName = 'PopoverModalContent';
