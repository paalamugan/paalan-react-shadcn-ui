import { useEffect, useState } from 'react';

import { CalendarIcon, EnvelopeClosedIcon, FaceIcon, GearIcon, PersonIcon, RocketIcon } from '@paalan/react-icons';

import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '../../base';
import { Command } from './Command';

const meta: Meta<typeof Command> = {
  title: 'Components/Command',
  component: Command,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Command>;

export const Basic: Story = {
  render: (args) => {
    const [open, setOpen] = useState(args.open);

    useEffect(() => {
      const down = (e: KeyboardEvent) => {
        if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          setOpen((open) => !open);
        }
      };

      document.addEventListener('keydown', down);
      return () => document.removeEventListener('keydown', down);
    }, []);

    return (
      <>
        <Text className="text-sm text-muted-foreground">
          Press{' '}
          <Text
            as="kbd"
            className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100"
          >
            <Text as="span" className="text-xs">
              ⌘
            </Text>
            J
          </Text>
        </Text>
        <Command {...args} open={open} onOpenChange={setOpen} />
      </>
    );
  },
};

Basic.args = {
  open: false,
  inputOptions: {
    placeholder: 'Type a command or search...',
  },
  emptyResultContent: 'No results found.',
  groups: [
    {
      heading: 'Suggestions',
      items: [
        {
          icon: <CalendarIcon className="size-4" />,
          label: 'Calendar',
        },
        {
          icon: <FaceIcon className="size-4" />,
          label: 'Search Emoji',
        },
        {
          icon: <RocketIcon className="size-4" />,
          label: 'Launch',
        },
      ],
    },
    {
      heading: 'Settings',
      items: [
        {
          icon: <PersonIcon className="size-4" />,
          label: 'Profile',
          shortcut: '⌘P',
        },
        {
          icon: <EnvelopeClosedIcon className="size-4" />,
          label: 'Mail',
          shortcut: '⌘B',
        },
        {
          icon: <GearIcon className="size-4" />,
          label: 'Settings',
          shortcut: '⌘S',
        },
      ],
    },
  ],
};
