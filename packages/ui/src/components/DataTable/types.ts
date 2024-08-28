import type { Column, ColumnDef, Row, Table } from '@tanstack/react-table';
import type { ReactNode } from 'react';

export type DataTableInstance<TRow> = Table<TRow>;

export interface DataTableFacetFilterOption {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface DataTableFacetFilterProps<TData, TValue> {
  options: DataTableFacetFilterOption[];
  title: ReactNode;
  column?: Column<TData, TValue>;
  emptyResultMessage?: ReactNode;
  className?: string;
  searchPlaceholder?: string;
}

export interface DataTableFacetFilterColumn<TData, TValue = unknown> extends DataTableFacetFilterProps<TData, TValue> {
  accessorKey: string;
}

export interface DataTableActionItem extends DataTableFacetFilterOption {
  label: string;
  value: string;
  onClick?: (value: string, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  subLabels?: DataTableFacetFilterOption[];
}

export interface DataTablePaginationType {
  enabled: boolean;
  currentPage?: number;
  pageSize?: number;
  sizes?: number[];
}

export interface DataTableSearchFilter {
  enabled: boolean;
  accessorKey: string;
  placeholder?: string;
  className?: string;
}

export interface DataTableCustomSearchFilter {
  enabled: boolean;
  customInput: ReactNode;
}

export type DataTableSearchFilterColumn = DataTableSearchFilter | DataTableCustomSearchFilter;

export type DataTableColumnDef<TData, TValue = unknown> = ColumnDef<TData, TValue>;
export type DataTableRow<TData> = Row<TData>;
