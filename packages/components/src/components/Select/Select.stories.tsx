import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    triggerClassName: 'w-[250px]',
  },
  argTypes: {
    onValueChange: {
      action: 'onValueChange',
      description: 'Callback when the value changes',
    },
    value: {
      description: 'The value of the select',
    },
    triggerClassName: {
      table: {
        disable: true,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Simple: Story = {
  args: {
    options: [
      { label: 'Apple', value: 'apple', key: 'apple' },
      { label: 'Banana', value: 'banana', key: 'banana' },
      { label: 'Blueberry', value: 'blueberry', key: 'blueberry' },
      { label: 'Grapes', value: 'grapes', key: 'grapes' },
      { label: 'Pineapple', value: 'pineapple', key: 'pineapple' },
    ],
  },
};

export const StringOptions: Story = {
  args: {
    options: ['apple', 'banana', 'blueberry', 'grapes', 'pineapple'],
  },
};

export const NumberOptions: Story = {
  args: {
    options: [1, 2, 3, 4, 5],
  },
};

export const WithLabel: Story = {
  args: {
    ...Simple.args,
    label: 'Select a fruit',
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

export const WithCustomPlaceholder: Story = {
  args: {
    ...Simple.args,
    placeholder: 'Select a fruit',
  },
};

export const SingleGroupWithLabel: Story = {
  args: {
    ...WithLabel.args,
    options: [
      {
        label: 'Fruits',
        options: [
          { label: 'Apple', value: 'apple', key: 'apple' },
          { label: 'Banana', value: 'banana', key: 'banana' },
          { label: 'Blueberry', value: 'blueberry', key: 'blueberry' },
          { label: 'Grapes', value: 'grapes', key: 'grapes' },
          { label: 'Pineapple', value: 'pineapple', key: 'pineapple' },
        ],
      },
    ],
  },
};

export const MultipleGroup: Story = {
  args: {
    options: [
      {
        label: 'Fruits',
        options: [
          { label: 'Apple', value: 'apple', key: 'apple' },
          { label: 'Banana', value: 'banana', key: 'banana' },
          { label: 'Blueberry', value: 'blueberry', key: 'blueberry' },
          { label: 'Grapes', value: 'grapes', key: 'grapes' },
          { label: 'Pineapple', value: 'pineapple', key: 'pineapple' },
        ],
      },
      {
        label: 'Vegetables',
        options: [
          { label: 'Aubergine', value: 'aubergine', key: 'aubergine' },
          { label: 'Broccoli', value: 'broccoli', key: 'broccoli' },
          { label: 'Carrot', value: 'carrot', key: 'carrot', disabled: true },
          { label: 'Courgette', value: 'courgette', key: 'courgette' },
          { label: 'Leek', value: 'leek', key: 'leek' },
        ],
      },
      {
        label: 'Meat',
        options: [
          { label: 'Beef', value: 'beef', key: 'beef' },
          { label: 'Chicken', value: 'chicken', key: 'chicken' },
          { label: 'Lamb', value: 'lamb', key: 'lamb' },
          { label: 'Pork', value: 'pork', key: 'pork' },
        ],
      },
    ],
  },
};

export const MultipleGroupWithLabel: Story = {
  args: {
    ...MultipleGroup.args,
    label: 'Select a fruit',
  },
};

export const ResetSelect: Story = {
  args: Simple.args,
  render: (args) => {
    const { options, ...rest } = args;
    const [value, setValue] = useState<string>('');
    const reset = () => setValue('');
    return (
      <>
        <Select {...rest} options={options} value={value} onValueChange={setValue} />
        <Button variant="outline" mt="4" onClick={reset}>
          Reset
        </Button>
      </>
    );
  },
};
