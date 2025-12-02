// Each exported component in the package should have its own stories file

import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from '@availity/mui-avatar';
import { Collapse } from '@availity/mui-transitions';
import { FolderIcon, FolderTreeIcon, TriangleCollapseIcon, TriangleExpandIcon } from '@availity/mui-icon';
import { List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, ListProps, ListSubheader } from '..';

const meta: Meta<typeof List> = {
  title: 'Components/List/List',
  component: List,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false
    }
  }
};

export default meta;

export const _List: StoryObj<typeof List> = {
  render: (args: ListProps) => <List {...args}><ListItem><ListItemText>Child List Item</ListItemText></ListItem></List>,
};

export const _OrderedList: StoryObj<typeof List> = {
  render: () => (
    <List
    component='ol'
      sx={{ listStyleType: 'decimal', listStylePosition: 'inside', '.MuiListItem-root': { display: 'list-item' } }}
      disablePadding
    >
      <ListItem disableGutters disablePadding divider={false}>
        item
      </ListItem>
      <ListItem disableGutters disablePadding divider={false}>
        item
      </ListItem>
      <ListItem disableGutters disablePadding divider={false}>
        item
      </ListItem>
      <ListItem disableGutters disablePadding divider={false}>
        item
      </ListItem>
    </List>
  )
}

export const _UnorderedList: StoryObj<typeof List> = {
  render: () => (
    <List
      sx={{ listStyleType: 'disc', listStylePosition: 'inside', '.MuiListItem-root': { display: 'list-item' } }}
      disablePadding
    >
      <ListItem disableGutters disablePadding divider={false}>
        item
      </ListItem>
      <ListItem disableGutters disablePadding divider={false}>
        item
      </ListItem>
      <ListItem disableGutters disablePadding divider={false}>
        item
      </ListItem>
      <ListItem disableGutters disablePadding divider={false}>
        item
      </ListItem>
    </List>
  )
}

export const _NestedList: StoryObj<typeof List> = {
  render: () => {
    const [open, setOpen] = useState(true);

    const handleClick = () => {
      setOpen(!open);
    };

    return (
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        dense
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Nested List Items
          </ListSubheader>
        }
      >
        <ListItemButton>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary="Sent mail" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? <TriangleCollapseIcon /> : <TriangleExpandIcon />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <FolderTreeIcon />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    );
  }
}

export const _FolderList: StoryObj<typeof List> = {
  render: () => (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar size="m">
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar size="m">
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar size="m">
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
    </List>
  )
};
