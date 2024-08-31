import { UserX2Icon } from 'lucide-react';

import type { Meta, StoryObj } from '@storybook/react';

import { AvatarUpload } from './AvatarUpload';

const meta: Meta<typeof AvatarUpload> = {
  title: 'Components/AvatarUpload',
  component: AvatarUpload,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof AvatarUpload>;

export const Basic: Story = {
  render: (args) => <AvatarUpload {...args} />,
  args: {
    src: 'https://bit.ly/uchiha-itachi',
  },
};

export const CustomAvatarImage: Story = {
  render: (args) => <AvatarUpload {...args} />,
  args: {
    ...Basic.args,
    src: '/naruto-uzumaki.jpg',
    avatarImage: <img />,
  },
};

export const Fallback: Story = {
  render: (args) => <AvatarUpload {...args} />,
  args: {
    ...Basic.args,
    src: 'https://invalid-url',
  },
};

export const CustomAvatarFallbackIcon: Story = {
  render: (args) => <AvatarUpload {...args} />,
  args: {
    ...Basic.args,
    src: 'https://invalid-url',
    avatarFallbackIcon: <UserX2Icon className="size-1/2" />,
  },
};

export const Loading: Story = {
  render: (args) => <AvatarUpload {...args} />,
  args: {
    ...Basic.args,
    isLoading: true,
  },
};

export const NonEditable: Story = {
  render: (args) => <AvatarUpload {...args} />,
  args: {
    ...Basic.args,
    onAvatarChange: undefined,
  },
};
