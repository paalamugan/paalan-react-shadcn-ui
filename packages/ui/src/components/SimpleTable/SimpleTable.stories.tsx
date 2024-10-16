import type { Meta, StoryObj } from '@storybook/react';

import { SimpleTable } from './SimpleTable';

const meta: Meta<typeof SimpleTable> = {
  title: 'Components/SimpleTable',
  component: SimpleTable,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof SimpleTable>;

export const Basic: Story = {
  args: {
    primaryKey: 'invoice',
    columns: [
      {
        title: 'Invoice',
        accessorKey: 'invoice',
        className: 'w-[100px]',
        rowCellClassName: 'font-medium',
      },
      {
        title: 'Status',
        accessorKey: 'paymentStatus',
      },
      {
        title: 'Method',
        accessorKey: 'paymentMethod',
      },
      {
        title: 'Amount',
        accessorKey: 'totalAmount',
        className: 'text-right',
        rowCellClassName: 'text-right',
      },
    ],
    rows: [
      {
        invoice: 'INV001',
        paymentStatus: 'Paid',
        totalAmount: '$250.00',
        paymentMethod: 'Credit Card',
      },
      {
        invoice: 'INV002',
        paymentStatus: 'Pending',
        totalAmount: '$150.00',
        paymentMethod: 'PayPal',
      },
      {
        invoice: 'INV003',
        paymentStatus: 'Unpaid',
        totalAmount: '$350.00',
        paymentMethod: 'Bank Transfer',
      },
      {
        invoice: 'INV004',
        paymentStatus: 'Paid',
        totalAmount: '$450.00',
        paymentMethod: 'Credit Card',
      },
      {
        invoice: 'INV005',
        paymentStatus: 'Paid',
        totalAmount: '$550.00',
        paymentMethod: 'PayPal',
      },
      {
        invoice: 'INV006',
        paymentStatus: 'Pending',
        totalAmount: '$200.00',
        paymentMethod: 'Bank Transfer',
      },
      {
        invoice: 'INV007',
        paymentStatus: 'Unpaid',
        totalAmount: '$300.00',
        paymentMethod: 'Credit Card',
      },
    ],
    caption: '',
  },
};

export const WithCaption: Story = {
  args: {
    ...Basic.args,
    caption: 'A list of your recent invoices.',
  },
};

export const WithPagination: Story = {
  args: {
    ...Basic.args,
    enablePagination: true,
    paginationProps: {
      currentPage: 1,
      pageSize: 3,
      onPageChange: () => {},
      onPageSizeChange: () => {},
      showOnlyIfTotalGreaterThanPageSize: false,
    },
  },
};

export const WithNoData: Story = {
  args: {
    ...Basic.args,
    rows: [],
  },
};
