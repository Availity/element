import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, IconButton } from '@availity/mui-button';
import { Box } from '@availity/mui-layout';
import { ArrowsRotateIcon, ChartPieIcon, InboxIcon, SendIcon, SettingsIcon } from '@availity/mui-icon';
import { Checkbox } from '@availity/mui-checkbox';
import { FormControl, FormControlLabel, FormGroup, FormLabel } from '@availity/mui-form-utils';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@availity/mui-list';
import { Drawer, DrawerProps } from './Drawer';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer/Drawer',
  component: Drawer,
  tags: ['autodocs'],
};

export default meta;

export const _Drawer: StoryObj<typeof Drawer> = {
  render: (args: DrawerProps) => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
    };
    return (
      <Box height={args.variant === 'persistent' ? '200px' : undefined}>
        <Button onClick={toggleDrawer(!open)}>Toggle Drawer</Button>
        <Drawer {...args} onClose={toggleDrawer(!open)} open={open}></Drawer>
      </Box>
    );
  },
  args: {
    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
        beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.`,
    contentPadding: true,
    header: 'Drawer Header',
    actions: (
      <IconButton title="refresh drawer" aria-label="refresh drawer">
        <ArrowsRotateIcon />
      </IconButton>
    ),
  },
};

export const _NavDrawer: StoryObj<typeof Drawer> = {
  render: (args: DrawerProps) => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
    };
    return (
      <Box height={args.variant === 'persistent' ? '200px' : undefined}>
        <Button onClick={toggleDrawer(!open)}>Toggle Drawer</Button>
        <Drawer {...args} onClose={toggleDrawer(!open)} open={open}></Drawer>
      </Box>
    );
  },
  args: {
    anchor: 'left',
    children: (
      <List disablePadding>
        <ListItemButton divider>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText>Inbox</ListItemText>
        </ListItemButton>
        <ListItemButton divider>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText>Sent</ListItemText>
        </ListItemButton>
        <ListItemButton divider>
          <ListItemIcon>
            <ChartPieIcon />
          </ListItemIcon>
          <ListItemText>Reporting</ListItemText>
        </ListItemButton>
        <ListItemButton divider>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </ListItemButton>
      </List>
    ),
  },
};

export const _PersistentDrawer: StoryObj<typeof Drawer> = {
  render: (args: DrawerProps) => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
    };
    return (
      <Box height={args.variant === 'persistent' ? '200px' : undefined}>
        <Button onClick={toggleDrawer(!open)}>Toggle Drawer</Button>
        <Drawer {...args} onClose={toggleDrawer(!open)} open={open}></Drawer>
      </Box>
    );
  },
  args: {
    children: (
      <FormControl component="fieldset" variant="standard" required>
        <FormLabel component="legend">Group Label</FormLabel>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
          <FormControlLabel control={<Checkbox />} label="Label 2" />
          <FormControlLabel disabled control={<Checkbox />} label="Label 3" />
        </FormGroup>
      </FormControl>
    ),
    contentPadding: true,
    header: 'Filter',
    variant: 'persistent',
    slotProps: {
      paper: {
        variant: 'outlined',
      },
    },
    actions: (
      <IconButton title="refresh drawer" aria-label="refresh drawer">
        <ArrowsRotateIcon />
      </IconButton>
    ),
  },
};
