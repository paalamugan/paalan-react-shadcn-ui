import type { Meta, StoryObj } from '@storybook/react';

import { Grid, GridItem } from '.';
import boxStories from '../Box/Box.stories';

const meta: Meta<typeof Grid> = {
  title: 'Layouts/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    ...boxStories.argTypes,
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => (
    <Grid {...args} gap="3" className="grid-cols-4">
      {Array.from({ length: 10 }).map((_, i) => (
        <GridItem key={i} className="bg-blue-600 text-white" p="4" gridColumn="auto">
          Grid Item {i + 1}
        </GridItem>
      ))}
    </Grid>
  ),
};
