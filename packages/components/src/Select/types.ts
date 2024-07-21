import type { OptionType } from '@paalan/react-shared/types';

export interface SelectOptionGroupType {
  label?: string;
  options: OptionType[];
}

export type SelectOption = OptionType | SelectOptionGroupType | string | number;
