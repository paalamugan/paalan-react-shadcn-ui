import type { Meta, StoryObj } from '@storybook/react';

import { Box } from '@paalan/react-layouts';

import { Skeleton, SkeletonContainer } from '.';

const meta: Meta<typeof SkeletonContainer> = {
  title: 'Components/Skeleton',
  component: SkeletonContainer,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof SkeletonContainer>;

export const SkeletonContainerBasic: Story = {
  args: {},
};

export const SkeletonContainerCircle: Story = {
  args: {
    circle: true,
  },
};

export const SkeletonContainerCount: Story = {
  args: {
    count: 3,
  },
};

export const SkeletonContainerFullWidthWithCount: Story = {
  args: {
    ...SkeletonContainerCount.args,
    isFullWidth: true,
  },
};

export const CustomSkeleton: Story = {
  render: () => (
    <Box className="flex items-center space-x-4">
      <Skeleton className="size-12 rounded-full" />
      <Box className="space-y-2">
        <Skeleton className="w-[250px]" h="4" />
        <Skeleton className="w-[200px]" h="4" />
      </Box>
    </Box>
  ),
  args: {},
};

export const SkeletonLoading: Story = {
  render: () => <Skeleton className="h-20 w-6/12" />,
  args: {},
};
