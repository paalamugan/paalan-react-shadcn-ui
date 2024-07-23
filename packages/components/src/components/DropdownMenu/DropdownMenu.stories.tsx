import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from './DropdownMenu';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof DropdownMenu>;

export const Basic: Story = {
  args: {
    trigger: <Button variant="outline">Open</Button>,
    title: 'My Account',
    contentProps: { className: 'w-56' },
    items: [
      {
        label: 'Profile',
        shortcut: '⇧⌘P',
      },
      {
        label: 'Billing',
        shortcut: '⌘B',
      },
      {
        label: 'Settings',
        shortcut: '⌘S',
      },
      {
        label: 'Keyboard shortcuts',
        shortcut: '⌘K',
      },
      {
        separator: true,
      },
      {
        label: 'Team',
      },
      {
        label: 'Invite users',
        subItems: [
          {
            label: 'Email',
          },
          {
            label: 'Message',
          },
          {
            label: 'More...',
          },
        ],
      },
      {
        label: 'New Team',
        shortcut: '⌘+T',
      },
      {
        separator: true,
      },
      {
        label: 'GitHub',
      },
      {
        label: 'Support',
      },
      {
        label: 'API',
        disabled: true,
      },
      {
        separator: true,
      },
      {
        label: 'Log out',
        shortcut: '⇧⌘Q',
      },
    ],
  },
  parameters: {
    layout: 'padded',
  },
};
export const WithoutTitle: Story = {
  args: {
    trigger: <Button variant="outline">Open</Button>,
    contentProps: { className: 'w-56' },
    items: [
      {
        label: 'Profile',
        shortcut: '⇧⌘P',
      },
      {
        label: 'Billing',
        shortcut: '⌘B',
      },
      {
        label: 'Settings',
        shortcut: '⌘S',
      },
      {
        label: 'Keyboard shortcuts',
        shortcut: '⌘K',
      },
      {
        separator: true,
      },
      {
        label: 'Team',
      },
      {
        label: 'Invite users',
        subItems: [
          {
            label: 'Email',
          },
          {
            label: 'Message',
          },
          {
            label: 'More...',
          },
        ],
      },
      {
        label: 'New Team',
        shortcut: '⌘+T',
      },
      {
        separator: true,
      },
      {
        label: 'GitHub',
      },
      {
        label: 'Support',
      },
      {
        label: 'API',
        disabled: true,
      },
      {
        separator: true,
      },
      {
        label: 'Log out',
        shortcut: '⇧⌘Q',
      },
    ],
  },
  parameters: {
    layout: 'padded',
  },
};

export const WithRawDropdownMenu: Story = {
  render: () => (
    <DropdownMenuRoot>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuRoot>
  ),
  args: {},
  parameters: {
    layout: 'padded',
  },
};

export const Checkboxes: Story = {
  render: () => {
    const [showStatusBar, setShowStatusBar] = React.useState<boolean>(true);
    const [showActivityBar, setShowActivityBar] = React.useState<boolean>(false);
    const [showPanel, setShowPanel] = React.useState<boolean>(false);

    return (
      <DropdownMenuRoot>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
            Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={showActivityBar} onCheckedChange={setShowActivityBar} disabled>
            Activity Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
            Panel
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenuRoot>
    );
  },
};

export const RadioGroup: Story = {
  render: () => {
    const [position, setPosition] = React.useState('bottom');

    return (
      <DropdownMenuRoot>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenuRoot>
    );
  },
};
