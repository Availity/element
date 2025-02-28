// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { HeartEmptyIcon } from '@availity/mui-icon';
import { Grid } from '@availity/mui-layout';
import { Typography } from '@availity/mui-typography';
import { List, ListItem, ListItemText, ListItemIcon, ListItemIconProps, ListItemButton } from '..';

const meta: Meta<typeof ListItemIcon> = {
  title: 'Components/List/ListItemIcon',
  component: ListItemIcon,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
    },
  },
};

export default meta;

export const _ListItemIcon: StoryObj<typeof ListItemIcon> = {
  render: (args: ListItemIconProps) => (
    <ListItemIcon {...args}>
      <HeartEmptyIcon />
    </ListItemIcon>
  ),
};

export const _FavoritesList: StoryObj<typeof List> = {
  render: () => (
    <Grid container spacing={8}>
      <Grid size={{ xs: 12, sm: 6 }} component="nav" aria-labelledby="favorites-default-spacing-header">
        <Typography variant="h6" component="div" id="favorites-default-spacing-header">
          Default Spacing
        </Typography>
        <List>
          {[0, 1, 2, 3].map((value) => (
            <ListItem key={value} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HeartEmptyIcon />
                </ListItemIcon>
                <ListItemText primary="List item" secondary="Secondary" />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }} component="nav" aria-labelledby="favorites-dense-spacing-header">
        <Typography variant="h6" component="div" id="favorites-dense-spacing-header">
          Dense Spacing
        </Typography>
        <List dense>
          {[4, 5, 6, 7].map((value) => (
            <ListItem key={value} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HeartEmptyIcon />
                </ListItemIcon>
                <ListItemText primary="List item" secondary="Secondary" />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  ),
};
