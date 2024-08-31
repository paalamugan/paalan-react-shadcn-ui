import { User2Icon } from 'lucide-react';

import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Basic: Story = {
  args: {
    src: 'https://bit.ly/uchiha-itachi',
    className: 'h-52 w-52',
  },
};

export const Fallback: Story = {
  render: (args) => <Avatar {...args} />,
  args: {
    ...Basic.args,
    src: 'https://invalid-url',
    fallback: <User2Icon className="size-52" />,
  },
};

export const WithAlt: Story = {
  render: (args) => <Avatar {...args} />,
  args: {
    ...Basic.args,
    alt: 'Uchiha Itachi',
  },
};
