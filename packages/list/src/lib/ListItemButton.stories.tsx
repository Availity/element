// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from '@availity/mui-button';
import { DeleteIcon, FolderIcon, MailIcon, MoreVerticalIcon } from '@availity/mui-icon';
import { List, ListItem, ListItemText, ListItemButton, ListItemButtonProps, ListItemIcon, ListItemStatusCard } from '..';
import { Box, Checkbox } from '@mui/material';
import { StatusChip } from '@availity/mui-chip';
import { useState } from 'react';

const meta: Meta<typeof ListItemButton> = {
  title: 'Components/List/ListItemButton',
  component: ListItemButton,
  tags: ['autodocs'],
  argTypes: {
    centerRipple: {
      table: {
        disable: true,
      },
    },
    disableRipple: {
      table: {
        disable: true,
      },
    },
    disableTouchRipple: {
      table: {
        disable: true,
      },
    },
    focusRipple: {
      table: {
        disable: true,
      },
    },
    TouchRippleProps: {
      table: {
        disable: true,
      },
    },
    touchRippleRef: {
      table: {
        disable: true,
      },
    },
  }
};

export default meta;

export const _ListItemButton: StoryObj<typeof ListItemButton> = {
  render: (args: ListItemButtonProps) => <ListItemButton {...args} />,
  args: {
    children: 'This text is a child of ListItemButton',
  },
};

export const _States: StoryObj<typeof List> = {
  render: () => (
    <Box>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Default" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton selected>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Selected" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton className="Mui-focusVisible">
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary="Focused" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton disabled>
            <ListItemText primary="Disabled" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
};

export const _FolderList: StoryObj<typeof List> = {
  render: () => (
    <Box component="nav" aria-label="mailbox folders" sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Trash" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#folder-list">
            <ListItemText primary="Spam" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
};

export const _Selectable: StoryObj<typeof List> = {
  render: () => {
    const [checked, setChecked] = useState([0]);

    const handleToggle = (value: number) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      setChecked(newChecked);
    };

    return (
      <Box display="inline-flex" width='100%' gap={8}>
        <List aria-label="Default size" sx={{ width: '50%', maxWidth: 360 }}>
          {[0, 1, 2, 3].map((value) => {
            const labelId = `checkbox-list-label-${value}`;

            return (
              <ListItem
                key={value}
                disablePadding
                secondaryAction={
                  <IconButton edge="end" title="delete">
                    <DeleteIcon fontSize="xsmall" />
                  </IconButton>
                }
              >
                <ListItemButton role={undefined} onClick={handleToggle(value)} selected={checked.indexOf(value) !== -1}>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={`List item ${value + 1}`} secondary="Secondary" />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        <List aria-label="Dense size" sx={{ width: '50%', maxWidth: 360 }} dense>
          {[4, 5, 6, 7].map((value) => {
            const labelId = `checkbox-list-label-${value}`;

            return (
              <ListItem
                key={value}
                disablePadding
                secondaryAction={
                  <IconButton edge="end" title="delete">
                    <DeleteIcon fontSize="xsmall" />
                  </IconButton>
                }
              >
                <ListItemButton role={undefined} onClick={handleToggle(value)} selected={checked.indexOf(value) !== -1}>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={`List item ${value + 1}`} secondary="Secondary" />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
  )}
};

export const _InteractiveStatusCards: StoryObj<typeof List> = {
  render: () => (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <List aria-label="list">
        <ListItemStatusCard
          disablePadding
          secondaryAction={
            <IconButton title="More Actions">
              <MoreVerticalIcon fontSize='xsmall'/>
            </IconButton>
          }
        >
          <ListItemButton >
            <ListItemText>Item</ListItemText>
            <StatusChip color="success" label="Approved"/>
          </ListItemButton>
        </ListItemStatusCard>
        <ListItemStatusCard
          disablePadding
          secondaryAction={
            <IconButton title="More Actions">
              <MoreVerticalIcon fontSize='xsmall'/>
            </IconButton>
          }
        >
          <ListItemButton>
            <ListItemText>Item</ListItemText>
            <StatusChip color="warning" label="Pending"/>
          </ListItemButton>
        </ListItemStatusCard>
        <ListItemStatusCard
          disablePadding
          secondaryAction={
            <IconButton title="More Actions">
              <MoreVerticalIcon fontSize='xsmall'/>
            </IconButton>
          }
        >
          <ListItemButton >
            <ListItemText>Item</ListItemText>
            <StatusChip color="error" label="Denied"/>
          </ListItemButton>
        </ListItemStatusCard>
        <ListItemStatusCard
          disablePadding
          secondaryAction={
            <IconButton title="More Actions">
              <MoreVerticalIcon fontSize='xsmall'/>
            </IconButton>
          }
        >
          <ListItemButton >
            <ListItemText>Item</ListItemText>
            <StatusChip color="success" label="Approved"/>
          </ListItemButton>
        </ListItemStatusCard>
      </List>
    </Box>
  )
};
