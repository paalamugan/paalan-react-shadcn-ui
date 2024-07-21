import type { Meta, StoryObj } from '@storybook/react';
import type { Task } from './data';

import { Button } from '../Button';
import { columns } from './columns';
import { priorities, statuses, tasks } from './data';
import { DataTable } from './DataTable';

const meta: Meta<typeof DataTable<Task, unknown>> = {
  title: 'Components/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof DataTable<Task, unknown>>;

export const Basic: Story = {
  args: {
    columns: columns,
    rows: tasks,
  },
};

export const Pagination: Story = {
  args: {
    ...Basic.args,
    pagination: {
      enabled: true,
      pageSize: 10,
    },
  },
};

export const Selectable: Story = {
  args: {
    ...Pagination.args,
    enableSelectableTable: true,
  },
};

export const Toolbar: Story = {
  args: {
    ...Basic.args,
    showTableConfigure: true,
    search: {
      accessorKey: 'id',
      placeholder: 'Search by task...',
    },
    facetFilterColumns: [
      {
        accessorKey: 'status',
        title: 'Status',
        options: statuses,
      },
      {
        accessorKey: 'priority',
        title: 'Priority',
        options: priorities,
      },
    ],
  },
};

export const FilterSearch: Story = {
  args: {
    ...Pagination.args,
    search: {
      accessorKey: 'id',
      placeholder: 'Search by task...',
    },
  },
};

export const ToolbarWithPagination: Story = {
  args: {
    ...Pagination.args,
    showTableConfigure: true,
    search: {
      accessorKey: 'id',
      placeholder: 'Search by task...',
    },
    facetFilterColumns: [
      {
        accessorKey: 'status',
        title: 'Status',
        options: statuses,
      },
      {
        accessorKey: 'priority',
        title: 'Priority',
        options: priorities,
      },
    ],
  },
};

export const ToolbarWithRightSideContent: Story = {
  args: {
    ...Pagination.args,
    showTableConfigure: true,
    search: {
      accessorKey: 'id',
      placeholder: 'Search by task...',
    },
    toolbarRightSideContent: (
      <Button color="primary" size="md">
        Create Task
      </Button>
    ),
    facetFilterColumns: [
      {
        accessorKey: 'status',
        title: 'Status',
        options: statuses,
      },
      {
        accessorKey: 'priority',
        title: 'Priority',
        options: priorities,
      },
    ],
  },
};

export const FacetFilter: Story = {
  args: {
    ...Basic.args,
    facetFilterColumns: [
      {
        accessorKey: 'status',
        title: 'Status',
        options: statuses,
      },
      {
        accessorKey: 'priority',
        title: 'Priority',
        options: priorities,
      },
    ],
  },
};

export const SearchWithFacetFilter: Story = {
  args: {
    ...Pagination.args,
    search: {
      accessorKey: 'id',
      placeholder: 'Search by task...',
    },
    facetFilterColumns: [
      {
        accessorKey: 'status',
        title: 'Status',
        options: statuses,
      },
      {
        accessorKey: 'priority',
        title: 'Priority',
        options: priorities,
      },
    ],
  },
};
