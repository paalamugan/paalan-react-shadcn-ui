import type { Meta, StoryObj } from '@storybook/react';

import { Box, Text } from '../../base';
import { Button } from '../Button';
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from '../ContextMenu';
import { Input } from '../Input';
import { Label } from '../Label';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from './Drawer';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Drawer>;

export const Basic: Story = {
  render: () => (
    <Drawer
      trigger={<Button variant="outline">Open Drawer</Button>}
      header={{
        title: 'Are you sure absolutely sure?',
        description:
          'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
      }}
    />
  ),
};

export const DrawerWithCloseButton: Story = {
  render: () => (
    <Drawer
      trigger={<Button variant="outline">Open Drawer</Button>}
      header={{
        title: 'Are you sure absolutely sure?',
        description:
          'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
      }}
      drawerCloseButton={<Button variant="outline">Close</Button>}
    />
  ),
};

export const EditProfile: Story = {
  render: () => (
    <Drawer
      trigger={<Button variant="outline">Edit Profile</Button>}
      contentClassName="sm:max-w-[425px]"
      header={{
        title: 'Edit profile',
        description: "Make changes to your profile here. Click save when you're done.",
      }}
      footer={{ content: <Button type="submit">Save changes</Button> }}
    >
      <Box className="grid gap-4 py-4">
        <Box className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input id="name" defaultValue="Paalamugan" className="col-span-3" />
        </Box>
        <Box className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Username
          </Label>
          <Input id="username" defaultValue="@paalamugan" className="col-span-3" />
        </Box>
      </Box>
    </Drawer>
  ),
  args: {},
};

export const ContextMenuNote: Story = {
  render: () => (
    <DrawerRoot>
      <ContextMenu>
        <ContextMenuTrigger>Right click</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Open</ContextMenuItem>
          <ContextMenuItem>Download</ContextMenuItem>
          <DrawerTrigger asChild>
            <ContextMenuItem>
              <Text as="span" fontSize="sm">
                Delete
              </Text>
            </ContextMenuItem>
          </DrawerTrigger>
        </ContextMenuContent>
      </ContextMenu>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you sure absolutely sure?</DrawerTitle>
          <DrawerDescription>
            This action cannot be undone. Are you sure you want to permanently delete this file from our servers?
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button type="submit">Confirm</Button>
        </DrawerFooter>
      </DrawerContent>
    </DrawerRoot>
  ),
};
