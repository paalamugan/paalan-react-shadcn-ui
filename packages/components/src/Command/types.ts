import type { ReactNode } from 'react';

export interface CommandGroupItem {
  /**
   * Optional icon to display for the command item
   */
  icon?: React.ReactNode;
  /**
   * The label for the command item
   */
  label: string;
  /**
   * Optional shortcut to display for the command item
   */
  shortcut?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Optional id for the command item
   */
  className?: string;
}

export interface CommandGroupList {
  /**
   * The heading for the command group
   */
  heading: string;
  /**
   * The items for the command group
   */
  items: CommandGroupItem[];
  /**
   * Optional className for the command group
   */
  className?: string;
}

export interface CommandNoResultFoundProps {
  /**
   * The number of options in the popover list
   */
  optionsLength: number;
  /**
   * Optional message to display when no results are found
   * @default 'No results found for "{search}".''
   * */
  emptyOptionMessage?: string;
  /**
   * Optional content to display when no results are found
   */
  emptyOptionContent?: ReactNode;
  /**
   * Optional search value
   */
  searchValue: string;
  /**
   * Optional initial search content when the search value is empty
   */
  initialSearchContent?: ReactNode;
}
