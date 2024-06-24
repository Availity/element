// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import Avatar from '@mui/material/Avatar';
import { FolderIcon } from '@availity/mui-icon';
import { List, ListItem, ListItemAvatar, ListItemText, ListSubheader, ListSubheaderProps } from '..';

const meta: Meta<typeof ListSubheader> = {
  title: 'Components/List/ListSubheader',
  component: ListSubheader,
  tags: ['autodocs'],
};

export default meta;

export const _ListSubheader: StoryObj<typeof ListSubheader> = {
  render: (args: ListSubheaderProps) => <ListSubheader {...args} />,
  args: {
    children: 'This text is a child of List',
  },
};

export const _FolderList: StoryObj<typeof List> = {
  render: () => (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListSubheader>Subheader 1</ListSubheader>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <ListSubheader>Subheader 2</ListSubheader>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
    </List>
  )
};
