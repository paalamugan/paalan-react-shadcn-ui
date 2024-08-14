import type { Meta, StoryObj } from '@storybook/react';

import { Breadcrumb } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Basic: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
    ],
    Link: ({ href, children, className }) => (
      <a href={href} className={className}>
        {children}
      </a>
    ),
    itemsToDisplay: 3,
  },
};

export const WithEllipsis: Story = {
  args: {
    ...Basic.args,
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Product 1', href: '/products/1' },
      { label: 'Product 2', href: '/products/2' },
      { label: 'Product 3', href: '/products/3' },
      { label: 'Product 4', href: '/products/4' },
      { label: 'Product 5' },
    ],
    itemsToDisplay: 5,
  },
};
