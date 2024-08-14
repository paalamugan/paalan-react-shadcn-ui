import { forwardRef, Fragment, useMemo, useState } from 'react';

import { cn } from '@paalan/react-shared/lib';
import { result } from '@paalan/react-shared/utils';

import type { FC, ForwardedRef, ReactElement } from 'react';
import type { SimpleTableProps } from './types';

import { Stack } from '../../base';
import { Pagination } from '../Pagination';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../Table';

const DefaultTableRow: FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <TableRow className={className}>{children}</TableRow>
);

const SimpleTableComponent = <TRow extends Record<string, unknown>>(
  {
    caption,
    primaryKey,
    columns,
    rows,
    rowClassName,
    rowCellClassName,
    columnClassName,
    paginationProps,
    enablePagination,
    emptyTableContent = 'No data available',
    emptyTableContentClassName,
    CustomTableRowComponent,
    theadClassName,
    tbodyClassName,
    ...props
  }: SimpleTableProps<TRow>,
  ref?: ForwardedRef<React.ElementRef<'table'>>,
) => {
  const [pageSize, setPageSize] = useState<number>(paginationProps?.pageSize ?? 10);
  const [currentPage, setCurrentPage] = useState<number>(paginationProps?.currentPage ?? 1);

  const RenderTableRow = CustomTableRowComponent || DefaultTableRow;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    paginationProps?.onPageChange?.(page);
  };

  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
    paginationProps?.onPageSizeChange?.(size);
  };

  const startIndex = (currentPage - 1) * pageSize;

  const endIndex = Math.min(currentPage * pageSize, rows.length);

  const paginatedRows = useMemo(() => {
    if (!enablePagination) return rows;
    return rows.slice(startIndex, endIndex);
  }, [enablePagination, rows, startIndex, endIndex]);

  const localPaginationProps = {
    ...paginationProps,
    currentPage,
    pageSize,
    total: paginationProps?.total || rows.length,
    onPageChange: handlePageChange,
    onPageSizeChange: handlePageSizeChange,
  };

  return (
    <Stack gap="2">
      <Table ref={ref} {...props}>
        {caption && <TableCaption>{caption}</TableCaption>}
        <TableHeader className={theadClassName}>
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
        <TableBody className={tbodyClassName}>
          {!paginatedRows.length ? (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className={cn('py-6 text-center text-gray-500', emptyTableContentClassName)}
              >
                {emptyTableContent}
              </TableCell>
            </TableRow>
          ) : (
            paginatedRows.map((row, index) => (
              <Fragment key={`${row[primaryKey] ? row[primaryKey] : index}`}>
                <RenderTableRow className={rowClassName} row={row} index={index} primaryKey={primaryKey}>
                  {columns.map((column) => (
                    <TableCell key={column.accessorKey} className={cn(rowCellClassName, column.rowCellClassName)}>
                      <>
                        {column.render
                          ? column.render({ value: result(row, column.accessorKey), row, column, index })
                          : (result(row, column.accessorKey) ?? column.rowEmptyValue ?? '-')}
                      </>
                    </TableCell>
                  ))}
                </RenderTableRow>
              </Fragment>
            ))
          )}
        </TableBody>
      </Table>
      {enablePagination && !!paginatedRows.length && <Pagination {...localPaginationProps} />}
    </Stack>
  );
};

SimpleTableComponent.displayName = 'SimpleTable';

type ForwardRefFn<R> = <TRow extends Record<string, unknown>>(
  p: SimpleTableProps<TRow> & { ref?: React.Ref<R> | undefined | ((instance: R) => ReactElement | null) },
) => ReactElement;

export const SimpleTable = forwardRef(SimpleTableComponent) as ForwardRefFn<HTMLTableElement>;
