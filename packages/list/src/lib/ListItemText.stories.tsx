// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from '@availity/mui-avatar';
import { FolderIcon } from '@availity/mui-icon';
import { List, ListItem, ListItemAvatar, ListItemText, ListItemTextProps } from '..';

const meta: Meta<typeof ListItemText> = {
  title: 'Components/List/ListItemText',
  component: ListItemText,
  tags: ['autodocs'],
};

export default meta;

export const _ListItemText: StoryObj<typeof ListItemText> = {
  render: (args: ListItemTextProps) => <ListItemText {...args} />,
  args: {
    children: 'This text is a child of List',
  },
};

export const _FolderList: StoryObj<typeof List> = {
  render: () => (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar size="m">
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Primary" secondary="Secondary" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar size="m">
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Primary" secondary="Secondary" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar size="m">
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Primary" secondary="Secondary" />
      </ListItem>
    </List>
  )
};
