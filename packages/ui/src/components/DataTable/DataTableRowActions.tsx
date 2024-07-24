import { Fragment } from 'react';

import { DotsHorizontalIcon } from '@paalan/react-icons';

import type z from 'zod';
import type { DataTableActionItem, DataTableRow } from './types';

import { Button } from '../Button';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '../DropdownMenu';

interface DataTableRowActionsProps<TData> {
  row: DataTableRow<TData>;
  rowSchema: z.AnyZodObject;
  actionItems: DataTableActionItem[];
}

export const DataTableRowActions = <TData,>({ row, rowSchema, actionItems }: DataTableRowActionsProps<TData>) => {
  const rowData = rowSchema.parse(row.original);

  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex size-8 p-0 data-[state=open]:bg-muted">
          <DotsHorizontalIcon className="size-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        {actionItems.map((actionItem) => (
          <Fragment key={actionItem.label}>
            {!actionItem.subLabels?.length ? (
              <DropdownMenuItem onClick={(e) => actionItem.onClick?.(actionItem.value, e)}>
                {actionItem.label}
                {actionItem.icon && <DropdownMenuShortcut>{<actionItem.icon />}</DropdownMenuShortcut>}
              </DropdownMenuItem>
            ) : (
              <Fragment>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>{actionItem.label}</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuRadioGroup value={rowData.label}>
                      {actionItem.subLabels?.map((label) => (
                        <DropdownMenuRadioItem key={label.value} value={label.value}>
                          {label.icon && <label.icon className="mr-2 size-4 text-muted-foreground" />}
                          {label.label}
                        </DropdownMenuRadioItem>
                      ))}
                    </DropdownMenuRadioGroup>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
              </Fragment>
            )}
          </Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenuRoot>
  );
};
