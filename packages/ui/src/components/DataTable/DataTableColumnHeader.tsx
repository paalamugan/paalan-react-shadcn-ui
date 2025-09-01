import { ArrowDownIcon, ArrowUpIcon, CaretSortIcon, EyeNoneIcon } from '@paalan/react-icons';
import { cn } from '@paalan/react-shared/lib';

import type { Column } from '@tanstack/react-table';
import type { ReactNode } from 'react';

import { Button } from '../Button/Button';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../DropdownMenu';

interface DataTableColumnHeaderProps<TData, TValue> extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  column: Column<TData, TValue>;
  title: ReactNode;
  isSimpleSort?: boolean;
}

export const DataTableColumnHeader = <TData, TValue>({
  column,
  title,
  className,
  isSimpleSort = true,
}: DataTableColumnHeaderProps<TData, TValue>) => {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  if (isSimpleSort) {
    return (
      <Button
        variant="ghost"
        size="sm"
        color="secondary"
        className={cn(
          '-ml-3 h-8 text-muted-foreground hover:text-secondary-foreground focus-visible:ring-0',
          className,
        )}
        onClick={() => column.toggleSorting()}
      >
        <span>{title}</span>
        {column.getIsSorted() === 'desc' ? (
          <ArrowDownIcon className="size-3.5" />
        ) : column.getIsSorted() === 'asc' ? (
          <ArrowUpIcon className="size-3.5" />
        ) : (
          <CaretSortIcon className="size-4" />
        )}
      </Button>
    );
  }

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <DropdownMenuRoot>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            color="secondary"
            className="-ml-3 h-8 text-muted-foreground hover:text-secondary-foreground focus-visible:ring-0 data-[state=open]:bg-accent"
          >
            <span>{title}</span>
            {column.getIsSorted() === 'desc' ? (
              <ArrowDownIcon className="size-3.5" />
            ) : column.getIsSorted() === 'asc' ? (
              <ArrowUpIcon className="size-3.5" />
            ) : (
              <CaretSortIcon className="size-4" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
            <ArrowUpIcon className="mr-2 size-3.5 text-muted-foreground/70" />
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
            <ArrowDownIcon className="mr-2 size-3.5 text-muted-foreground/70" />
            Desc
          </DropdownMenuItem>
          {column.getCanHide() && <DropdownMenuSeparator />}
          {column.getCanHide() && (
            <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
              <EyeNoneIcon className="mr-2 size-3.5 text-muted-foreground/70" />
              Hide
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenuRoot>
    </div>
  );
};
