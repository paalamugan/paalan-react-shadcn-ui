import type { ReactNode } from 'react';
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
   * columnClassName is the class name of the table header. it is apply for all headers.
   */
  columnClassName?: string;
  /**
   * className is the class name of the table.
   */
  className?: string;
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
   * rowClassName is the class name of the table row.
   */
  rowClassName?: string;
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
