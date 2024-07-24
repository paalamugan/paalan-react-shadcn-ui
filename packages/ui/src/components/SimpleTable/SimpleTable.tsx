import { forwardRef } from 'react';

import { cn } from '@paalan/react-shared/lib';
import { result } from '@paalan/react-shared/utils';

import type { ForwardedRef, ReactElement } from 'react';
import type { SimpleTableProps } from './types';

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../Table';

const SimpleTableComponent = <TRow extends Record<string, unknown>>(
  { caption, primaryKey, columns, rows, rowClassName, columnClassName, ...props }: SimpleTableProps<TRow>,
  ref?: ForwardedRef<React.ElementRef<'table'>>,
) => {
  return (
    <Table ref={ref} {...props}>
      {caption && <TableCaption>{caption}</TableCaption>}
      <TableHeader>
        <TableRow>
          {columns.map((column, index) => (
            <TableHead
              key={column.accessorKey}
              id={column.accessorKey}
              className={cn(columnClassName, column.className)}
            >
              {column.renderHeader ? column.renderHeader({ column, index }) : column.title}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={`${row[primaryKey] ? row[primaryKey] : index}`}>
            {columns.map((column) => (
              <TableCell key={column.accessorKey} className={cn(rowClassName, column.rowClassName)}>
                <>
                  {column.render
                    ? column.render({ value: result(row, column.accessorKey), row, column, index })
                    : (result(row, column.accessorKey) ?? column.rowEmptyValue ?? '-')}
                </>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

SimpleTableComponent.displayName = 'SimpleTable';

type ForwardRefFn<R> = <TRow extends Record<string, unknown>>(
  p: SimpleTableProps<TRow> & React.RefAttributes<R>,
) => ReactElement;

export const SimpleTable = forwardRef(SimpleTableComponent) as ForwardRefFn<HTMLTableElement>;
