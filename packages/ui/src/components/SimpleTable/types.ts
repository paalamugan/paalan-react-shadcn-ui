import type { ReactNode } from 'react';
import type { PaginationProps } from '../Pagination';
import type { TableProps } from '../Table';

export interface SimpleTableProps<TRow extends Record<string, unknown> = Record<string, unknown>> extends TableProps {
  /**
   * An array of objects that define the table headers.
   */
  columns: SimpleTableColumn<TRow>[];
  /**
   * An array of objects that define the table rows.
   */
  rows: TRow[];
  /**
   * The primary key of the table rows.
   */
  primaryKey: string;
  /**
   * The table caption.
   */
  caption?: React.ReactNode;
  /**
   * className is the class name of the table row. it is apply for all rows.
   */
  rowClassName?: string;
  /**
   * rowCellClassName is the class name of the table cell. it is apply for all cells.
   */
  rowCellClassName?: string;
  /**
   * columnClassName is the class name of the table header. it is apply for all headers.
   */
  columnClassName?: string;
  /**
   * className is the class name of the table.
   */
  className?: string;
  /**
   * enablePagination is the flag to enable the pagination.
   */
  enablePagination?: boolean;
  /**
   * paginationProps is the props of the pagination.
   */
  paginationProps?: Partial<PaginationProps>;
  /**
   * emptyTableContent is the content to display when the table is empty.
   * @default 'No data available'
   */
  emptyTableContent?: ReactNode;
  /**
   * emptyTableContentClassName is the class name of the empty table content.
   */
  emptyTableContentClassName?: string;
  /**
   * CustomTableRowComponent is the custom table row component.
   */
  CustomTableRowComponent?: React.ComponentType<{
    className?: string;
    row: TRow;
    index: number;
    primaryKey: string;
    children: React.ReactNode;
  }>;
  /**
   * theadClassName is the class name of the table head.
   */
  theadClassName?: string;
  /**
   * tbodyClassName is the class name of the table body.
   */
  tbodyClassName?: string;
}

export interface SimpleTableColumn<TRow extends Record<string, unknown> = Record<string, unknown>> {
  /**
   * accessorKey is the key of the row object.
   */
  accessorKey: string;
  /**
   * The header content.
   */
  title: ReactNode;
  /**
   * className is the class name of the table header.
   */
  className?: string;
  /**
   * rowCellClassName is the class name of the table cell.
   */
  rowCellClassName?: string;
  /**
   * rowEmptyValue is the value to display when the row value is empty.
   * @default '-'
   */
  rowEmptyValue?: ReactNode;
  /**
   *
   * @param props is the value of the row object and the column object.
   * @returns rowRender returns the row content.
   */
  render?: (props: { value: unknown; column: SimpleTableColumn<TRow>; row: TRow; index: number }) => ReactNode;
  /**
   * @param props is the column object and the index of the column.
   * @returns headerRender returns the header content.
   */
  renderHeader?: (props: { column: SimpleTableColumn<TRow>; index: number }) => ReactNode;
}
