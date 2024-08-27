import { useImperativeHandle, useState } from 'react';

import { cn } from '@paalan/react-shared/lib';
import {
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import type { ColumnFiltersState, SortingState, VisibilityState } from '@tanstack/react-table';
import type { MutableRefObject, ReactNode } from 'react';
import type {
  DataTableColumnDef,
  DataTableFacetFilterColumn,
  DataTableInstance,
  DataTablePaginationOption,
  DataTableSearchFilterColumn,
} from './types';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../Table';
import { getSelectColumn } from './constants';
import { DataTablePagination } from './DataTablePagination';
import { DataTableToolbar } from './DataTableToolbar';

export interface DataTableProps<TRow, TValue = unknown> {
  /**
   * provide the columns to render in the table
   */
  columns: DataTableColumnDef<TRow, TValue>[];
  /**
   * provide the data to render in the table
   */
  rows: TRow[];
  /**
   * enable the selectable checkbox input in the table header
   */
  enableSelectableTable?: boolean;
  /**
   * provide the column accessorKey value to search the table
   */
  search?: DataTableSearchFilterColumn;
  /**
   * provide the column accessorKey value to filter the table
   */
  facetFilterColumns?: DataTableFacetFilterColumn[];
  /**
   * show the table toolbar
   */
  showTableConfigure?: boolean;
  /**
   * provide the pagination options
   */
  pagination?: DataTablePaginationOption;
  /**
   * additional class name to apply to the component
   */
  className?: string;
  /**
   * additional class name to apply to the table container
   */
  tableContainerClassName?: string;
  /**
   * provide the message to display when no results are found in the table
   * @default 'No results.'
   * @type React.ReactNode
   * @example <DataTable noResultsMessage="No tasks found." />
   * @example <DataTable noResultsMessage={<span>No tasks found.</span>} />
   */
  noResultsMessage?: ReactNode;
  /**
   * ref to the table instance
   */
  tableInstanceRef?: MutableRefObject<DataTableInstance<TRow> | undefined>;
  /**
   * additional content to render on the right side of the table
   */
  toolbarRightSideContent?: ReactNode;

  defaultSorting?: SortingState;
}

/**
 * The DataTable component is used to display data in a tabular format.
 * It is a wrapper around the react-table component.
 */
export const DataTable = <TRow, TValue>({
  columns,
  rows,
  enableSelectableTable,
  search,
  facetFilterColumns,
  showTableConfigure,
  pagination,
  className,
  tableContainerClassName,
  noResultsMessage = 'No results.',
  tableInstanceRef,
  toolbarRightSideContent,
  defaultSorting = [],
}: DataTableProps<TRow, TValue>) => {
  const [rowSelection, setRowSelection] = useState({});
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>(defaultSorting);
  const tableColumns = enableSelectableTable ? [getSelectColumn<TRow>(), ...columns] : columns;
  const paginationEnabled = pagination?.enabled ?? false;

  const table = useReactTable({
    data: rows,
    columns: tableColumns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    enableHiding: showTableConfigure ?? false,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: paginationEnabled ? getPaginationRowModel() : undefined,
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  useImperativeHandle(tableInstanceRef, () => table, [table]);
  return (
    <div className={cn('flex w-full flex-col gap-4', className)}>
      <DataTableToolbar
        table={table}
        search={search}
        facetFilterColumns={facetFilterColumns}
        showTableConfigure={showTableConfigure}
        toolbarRightSideContent={toolbarRightSideContent}
      />
      <div className={cn('rounded-md border', tableContainerClassName)}>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow className="hover:bg-transparent">
                <TableCell colSpan={columns.length} className="p-6 text-center text-base text-muted-foreground">
                  {noResultsMessage}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {paginationEnabled && (
        <DataTablePagination table={table} pagination={pagination} enableSelectableTable={enableSelectableTable} />
      )}
    </div>
  );
};
