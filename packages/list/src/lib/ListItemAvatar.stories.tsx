// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconButton } from '@availity/mui-button';
import { Avatar } from '@availity/mui-avatar';
import { MailIcon, UserIcon } from '@availity/mui-icon';
import { Grid } from '@availity/mui-layout';
import { Typography } from '@availity/mui-typography';
import { List, ListItem, ListItemAvatar, ListItemText, ListItemAvatarProps, ListItemButton } from '..';

const meta: Meta<typeof ListItemAvatar> = {
  title: 'Components/List/ListItemAvatar',
  component: ListItemAvatar,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
    },
  },
};

export default meta;

export const _ListItemAvatar: StoryObj<typeof ListItemAvatar> = {
  render: (args: ListItemAvatarProps) => (
    <ListItemAvatar {...args}>
      <Avatar size="m">
        <UserIcon />
      </Avatar>
    </ListItemAvatar>
  ),
};

export const _UserList: StoryObj<typeof List> = {
  render: () => (
    <Grid container spacing={8}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Typography variant="h6" component="div" id="users-default-spacing-header">
          Default Spacing
        </Typography>
        <List aria-labelledby="users-default-spacing-header">
          {[0, 1, 2, 3].map((value) => (
            <ListItem
              key={value}
              disablePadding
              secondaryAction={
                <IconButton title="message">
                  <MailIcon />
                </IconButton>
              }
            >
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar size="m">
                    <UserIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="List item" secondary="Secondary" />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Typography variant="h6" component="div" id="users-dense-spacing-header">
          Dense Spacing
        </Typography>
        <List dense aria-labelledby="users-dense-spacing-header">
          {[4, 5, 6, 7].map((value) => (
            <ListItem
              key={value}
              disablePadding
              secondaryAction={
                <IconButton title="message">
                  <MailIcon />
                </IconButton>
              }
            >
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar size="m">
                    <UserIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="List item" secondary="Secondary" />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  ),
};
