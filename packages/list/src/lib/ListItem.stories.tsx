// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '@availity/mui-avatar';
import { FolderIcon, MailIcon, UserIcon } from '@availity/mui-icon';
import { Grid } from '@availity/mui-layout';
import { Typography } from '@availity/mui-typography';
import { List, ListItem, ListItemAvatar, ListItemText, ListItemProps, ListItemIcon } from '..';

const meta: Meta<typeof ListItem> = {
  title: 'Components/List/ListItem',
  component: ListItem,
  tags: ['autodocs'],
  argTypes: {
    secondaryAction: {
      description: 'Absolutely positioned subcomponent. Used with `ListItemButton` to handle overlapping action areas.',
    },
  },
};

export default meta;

export const _ListItem: StoryObj<typeof ListItem> = {
  render: (args: ListItemProps) => (
    <List>
      <ListItem {...args} />
    </List>
  ),
  args: {
    children: 'This text is a child of ListItem',
  },
};

export const _Text: StoryObj<typeof List> = {
  render: () => (
    <Grid container spacing={8}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Typography variant="h6" component="div" id="text-default-spacing-header">
          Default Spacing
        </Typography>
        <List aria-labelledby="text-default-spacing-header">
          <ListItem>
            <ListItemText primary="Single-line item" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Single-line item" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Single-line item" />
          </ListItem>
        </List>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Typography variant="h6" component="div" id="text-dense-spacing-header">
          Dense Spacing
        </Typography>
        <List dense aria-labelledby="text-dense-spacing-header">
          <ListItem>
            <ListItemText primary="Single-line item" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Single-line item" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Single-line item" />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  ),
};

export const _IconWithText: StoryObj<typeof List> = {
  render: () => (
    <Grid container spacing={8}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Typography variant="h6" component="div" id="icon-text-default-spacing-header">
          Default Spacing
        </Typography>
        <List aria-labelledby="icon-text-default-spacing-header">
          <ListItem>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary="Single-line item" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary="Single-line item" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary="Single-line item" />
          </ListItem>
        </List>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Typography variant="h6" component="div" id="icon-text-dense-spacing-header">
          Dense Spacing
        </Typography>
        <List dense aria-labelledby="icon-text-dense-spacing-header">
          <ListItem>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary="Single-line item" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary="Single-line item" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary="Single-line item" />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  ),
};

export const _AvatarWithText: StoryObj<typeof List> = {
  render: () => (
    <Grid container spacing={8}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Typography variant="h6" component="div" id="avatar-text-default-spacing-header">
          Default Spacing
        </Typography>
        <List aria-labelledby="avatar-text-default-spacing-header">
          <ListItem>
            <ListItemAvatar>
              <Avatar size="m">
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>Single-line item</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar size="m">
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>Single-line item</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar size="m">
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>Single-line item</ListItemText>
          </ListItem>
        </List>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Typography variant="h6" component="div" id="avatar-text-dense-spacing-header">
          Dense Spacing
        </Typography>
        <List dense aria-labelledby="avatar-text-dense-spacing-header">
          <ListItem>
            <ListItemAvatar>
              <Avatar size="m">
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>Single-line item</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar size="m">
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>Single-line item</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar size="m">
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>Single-line item</ListItemText>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  ),
};

export const _AvatarWithTextAndIcon: StoryObj<typeof List> = {
  render: () => (
    <Grid container spacing={8}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Typography variant="h6" component="div" id="avatar-icon-text-default-spacing-header">
          Default Spacing
        </Typography>
        <List aria-labelledby="avatar-icon-text-default-spacing-header">
          <ListItem>
            <ListItemAvatar>
              <Avatar size="m">
                <UserIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Single-line item" />
            <MailIcon fontSize="medium" color="secondary" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar size="m">
                <UserIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Single-line item" />
            <MailIcon fontSize="medium" color="secondary" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar size="m">
                <UserIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Single-line item" />
            <MailIcon fontSize="medium" color="secondary" />
          </ListItem>
        </List>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Typography variant="h6" component="div" id="avatar-icon-text-dense-spacing-header">
          Dense Spacing
        </Typography>
        <List dense aria-labelledby="avatar-icon-text-dense-spacing-header">
          <ListItem>
            <ListItemAvatar>
              <Avatar size="m">
                <UserIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Single-line item" />
            <MailIcon fontSize="medium" color="secondary" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar size="m">
                <UserIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Single-line item" />
            <MailIcon fontSize="medium" color="secondary" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar size="m">
                <UserIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Single-line item" />
            <MailIcon fontSize="medium" color="secondary" />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  ),
};

export const _FolderList: StoryObj<typeof List> = {
  render: () => (
    <Grid container spacing={8}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Typography variant="h6" component="div" id="folders-default-spacing-header">
          Default Spacing
        </Typography>
        <List aria-labelledby="folders-default-spacing-header">
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
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Typography variant="h6" component="div" id="folders-dense-spacing-header">
          Dense Spacing
        </Typography>
        <List dense aria-labelledby="folders-dense-spacing-header">
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
      </Grid>
    </Grid>
  ),
};
