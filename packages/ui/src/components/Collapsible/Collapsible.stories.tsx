import { default as React, useEffect } from 'react';

import { ChevronDownIcon, ChevronUpIcon } from '@paalan/react-icons';

import type { Meta, StoryObj } from '@storybook/react';

import { Box } from '../../base';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './Collapsible';

const meta: Meta<typeof Collapsible> = {
  title: 'Components/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Collapsible>;

export const Closed: Story = {
  render: ({ open, ...args }) => {
    const [isOpen, setIsOpen] = React.useState(open);
    useEffect(() => {
      setIsOpen(!!open);
    }, [open]);
    return (
      <Collapsible {...args} open={isOpen} onOpenChange={setIsOpen} className="w-[400px] space-y-2">
        <Box className="rounded-md border border-slate-200 font-mono text-sm dark:border-slate-700">
          <CollapsibleTrigger className="w-full px-4  py-3 hover:bg-secondary">
            <Box className="flex items-center justify-between">
              <Box>Collapsible Trigger</Box>
              {isOpen ? <ChevronUpIcon className="size-4" /> : <ChevronDownIcon className="size-4" />}
            </Box>
          </CollapsibleTrigger>
          <CollapsibleContent className="px-4  py-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo minus, fuga inventore omnis consectetur
            dolorem debitis, odit, quos delectus vel quibusdam ipsam!
          </CollapsibleContent>
        </Box>
      </Collapsible>
    );
  },
  args: {
    open: false,
  },
};
export const Open: Story = {
  render: Closed.render,
  args: {
    open: true,
  },
};
