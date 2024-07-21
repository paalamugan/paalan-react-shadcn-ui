import type { DropdownMenuProps as LocalDropdownMenuProps } from '@radix-ui/react-dropdown-menu';
import type { DropdownMenuContent, DropdownMenuItem } from './DropdownMenu';

export interface CustomDropdownMenuItem extends React.ComponentPropsWithoutRef<typeof DropdownMenuItem> {
  /**
   * The label to display for the item.
   */
  label?: React.ReactNode;
  /**
   * The shortcut to display for the item.
   */
  shortcut?: React.ReactNode;
  /**
   * Whether the item is disabled.
   */
  disabled?: boolean;
  /**
   * Whether the item is a separator.
   */
  separator?: boolean;
}

export interface CustomDropdownMenuItemWithSubItem extends CustomDropdownMenuItem {
  /**
   * The sub items to display for the item.
   */
  label: React.ReactNode;
  /**
   * The sub items to display for the item.
   */
  subItems: CustomDropdownMenuItem[];
}

export interface DropdownMenuProps extends LocalDropdownMenuProps {
  /**
   * The trigger element that will open the dropdown menu.
   */
  trigger: React.ReactNode;
  /**
   * The items to display in the dropdown menu.
   */
  items: Array<CustomDropdownMenuItem | CustomDropdownMenuItemWithSubItem>;
  /**
   * The title heading for the dropdown menu.
   */
  title?: React.ReactNode;
  /**
   * The dropdown menu content props.
   */
  contentProps?: React.ComponentPropsWithoutRef<typeof DropdownMenuContent>;
  /**
   * The class name for the trigger of the dropdown menu.
   */
  triggerClassName?: string;
}
