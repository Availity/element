// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import Avatar from '@mui/material/Avatar';
import { FolderIcon } from '@availity/mui-icon';
import { List, ListItem, ListItemAvatar, ListItemText, ListItemProps } from '..';

const meta: Meta<typeof ListItem> = {
  title: 'Components/List/ListItem',
  component: ListItem,
  tags: ['autodocs'],
  argTypes: {
    secondaryAction: {
      description: "Absolutely positioned subcomponent. Used with `ListItemButton` to handle overlapping action areas."
    }
  }
};

export default meta;

export const _ListItem: StoryObj<typeof ListItem> = {
  render: (args: ListItemProps) => <ListItem {...args} />,
  args: {
    children: 'This text is a child of ListItem',
  },
};

export const _FolderList: StoryObj<typeof List> = {
  render: () => (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
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
