import { Cross2Icon } from '@paalan/react-icons';
import { cn } from '@paalan/react-shared/lib';

import type { Table } from '@tanstack/react-table';
import type { DataTableCustomSearchFilter, DataTableFacetFilterColumn, DataTableSearchFilterColumn } from './types';

import { Button } from '../Button';
import { Input } from '../Input';
import { DataTableFacetedFilter } from './DataTableFacetedFilter';
import { DataTableViewOptions } from './DataTableViewOptions';

interface DataTableToolbarProps<TData> {
  /**
   * provide the table instance
   */
  table: Table<TData>;
  /**
   * provide the column accessorKey value to search the table
   */
  search?: DataTableSearchFilterColumn;
  /**
   * provide the column accessorKey value to filter the table
   */
  facetFilterColumns?: DataTableFacetFilterColumn<TData>[];
  /**
   * show the table toolbar
   */
  showTableConfigure?: boolean;
  /**
   * provide the right side content for the toolbar
   */
  toolbarRightSideContent?: React.ReactNode;
}

const isCustomSearchFilter = (search: DataTableSearchFilterColumn): search is DataTableCustomSearchFilter => {
  return 'customInput' in search;
};

export function DataTableToolbar<TData>({
  table,
  search,
  facetFilterColumns,
  showTableConfigure,
  toolbarRightSideContent,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  if (!search && !facetFilterColumns && !showTableConfigure && !toolbarRightSideContent) return null;
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center gap-2">
        {search &&
          (isCustomSearchFilter(search)
            ? search.enabled && search.customInput
            : search?.enabled && (
                <Input
                  placeholder={search.placeholder || `Search by ${search.accessorKey}...`}
                  value={(table.getColumn(search.accessorKey)?.getFilterValue() as string) ?? ''}
                  onChange={(event) => table.getColumn(search.accessorKey)?.setFilterValue(event.target.value)}
                  className={cn('w-[150px] lg:w-[250px]', search.className)}
                />
              ))}
        {facetFilterColumns?.map(
          ({ accessorKey, ...column }) =>
            table.getColumn(accessorKey) && (
              <DataTableFacetedFilter key={accessorKey} column={table.getColumn(accessorKey)} {...column} />
            ),
        )}
        {isFiltered && (
          <Button variant="ghost" onClick={() => table.resetColumnFilters()} className="px-2 lg:px-3">
            Reset
            <Cross2Icon className="size-3.5" />
          </Button>
        )}
      </div>
      {(showTableConfigure || toolbarRightSideContent) && (
        <div className="flex items-center justify-end gap-2">
          {showTableConfigure && <DataTableViewOptions table={table} />}
          {toolbarRightSideContent}
        </div>
      )}
    </div>
  );
}
