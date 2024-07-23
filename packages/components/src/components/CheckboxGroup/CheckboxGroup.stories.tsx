import React from 'react';

import { COLOR_VARIANTS } from '@paalan/react-shared/system';

import type { Meta, StoryObj } from '@storybook/react';

import { CheckboxGroup } from './CheckboxGroup';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: COLOR_VARIANTS,
      control: { type: 'radio' },
    },
  },
};
export default meta;

type Story = StoryObj<typeof CheckboxGroup>;

export const Default: Story = {
  render: ({ ...args }) => {
    const [selectedValues, setSelectedValues] = React.useState(args.selectedValues);
    const onSelectedValueChange = (values: string[]) => {
      setSelectedValues(values);
      args.onSelectedValueChange(values);
    };
    return <CheckboxGroup {...args} selectedValues={selectedValues} onSelectedValueChange={onSelectedValueChange} />;
  },
  args: {
    variant: 'primary',
    options: [
      {
        key: 'recents',
        value: 'recents',
        label: 'Recents',
      },
      {
        key: 'favorites',
        value: 'home',
        label: 'Home',
      },
      {
        key: 'applications',
        value: 'applications',
        label: 'Applications',
      },
      {
        key: 'desktop',
        value: 'desktop',
        label: 'Desktop',
      },
      {
        key: 'downloads',
        value: 'downloads',
        label: 'Downloads',
      },
      {
        key: 'documents',
        value: 'documents',
        label: 'Documents',
      },
    ],
    selectedValues: ['home', 'desktop', 'downloads'],
  },
};

export const WithLabel: Story = {
  render: Default['render'],
  args: {
    ...Default.args,
    label: 'Select Folders',
  },
};

export const WithInvalidWithoutMessage: Story = {
  args: {
    ...WithLabel.args,
    isInvalid: true,
  },
};

export const WithErrorMessage: Story = {
  args: { ...WithInvalidWithoutMessage.args, errorMessage: 'This field is required.' },
};

export const WithLabelRequired: Story = {
  render: Default['render'],
  args: {
    ...WithLabel.args,
    required: true,
  },
};

export const WithLabelAndRequiredAndInvalid: Story = {
  render: Default['render'],
  args: {
    ...WithLabelRequired.args,
    isInvalid: true,
    selectedValues: [],
  },
};

export const WithSwapRight: Story = {
  render: Default['render'],
  args: {
    ...WithLabel.args,
    swapRight: true,
  },
};

export const WithInline: Story = {
  render: Default['render'],
  args: {
    ...WithLabel.args,
    inline: true,
  },
};

export const WithInlineRequired: Story = {
  render: Default['render'],
  args: {
    ...WithInline.args,
    required: true,
  },
};

export const WithInlineSwapRight: Story = {
  render: Default['render'],
  args: {
    ...WithInline.args,
    swapRight: true,
  },
};

export const WithInlineSwapRightRequired: Story = {
  render: Default['render'],
  args: {
    ...WithInlineSwapRight.args,
    required: true,
  },
};
