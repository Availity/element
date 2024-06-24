// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import Avatar from '@mui/material/Avatar';
import { MailIcon, UserIcon } from '@availity/mui-icon';
import { List, ListItem, ListItemAvatar, ListItemText, ListItemAvatarProps, ListItemButton, ListSubheader } from '..';
import { Box } from '@mui/material';
import { IconButton } from '@availity/mui-button';

const meta: Meta<typeof ListItemAvatar> = {
  title: 'Components/List/ListItemAvatar',
  component: ListItemAvatar,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false
    }
  }
};

export default meta;

export const _ListItemAvatar: StoryObj<typeof ListItemAvatar> = {
  render: (args: ListItemAvatarProps) => <ListItemAvatar {...args}><Avatar><UserIcon /></Avatar></ListItemAvatar>,
};

export const _UserList: StoryObj<typeof List> = {
  render: () => (
    <Box display="inline-flex" width='100%' gap={8}>
      <List component="nav" aria-label="Normal users" sx={{ width: '50%', maxWidth: 360 }}>
        <ListSubheader>Default Spacing</ListSubheader>
        {[0, 1, 2, 3].map((value) => (
          <ListItem
            key={value}
            disablePadding
            secondaryAction={<IconButton title="message"><MailIcon/></IconButton>}
          >
          <ListItemButton>
            <ListItemAvatar>
              <Avatar>
                <UserIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="List item" secondary="Secondary"/>
          </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List component="nav" aria-label="Dense users" dense  sx={{ width: '50%', maxWidth: 360 }}>
        <ListSubheader>Dense Spacing</ListSubheader>
        {[4, 5, 6, 7].map((value) => (
          <ListItem
            key={value}
            disablePadding
            secondaryAction={<IconButton title="message"><MailIcon/></IconButton>}
          >
          <ListItemButton>
            <ListItemAvatar>
              <Avatar>
                <UserIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="List item" secondary="Secondary"/>
          </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
};
