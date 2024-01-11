import type { StoryObj } from '@storybook/react';
import { Grid } from '@availity/mui-layout';
import { SearchIcon } from '@availity/mui-icon';
import { IconButton, IconButtonProps } from './IconButton';
import React from 'react';

/** Icon only button with built-in tooltip */
export default {
  title: 'Components/Button/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  args: {
    title: 'title text',
  },
};

export const _IconButton: StoryObj<typeof IconButton> = {
  render: ({ ...args }: IconButtonProps) => (
    <IconButton {...args}>
      <SearchIcon />
    </IconButton>
  ),
};

export const _Variants: StoryObj<typeof IconButton> = {
  render: () => (
    <Grid container spacing={1}>
      <Grid xs={3}>Text</Grid>
      <Grid xs={9}>
        <IconButton title="search" variant="text">
          <SearchIcon />
        </IconButton>
      </Grid>
      <Grid xs={3}>Outlined</Grid>
      <Grid xs={9}>
        <IconButton title="search" variant="outlined">
          <SearchIcon />
        </IconButton>
      </Grid>
    </Grid>
  ),
};

export const _Colors: StoryObj<typeof IconButton> = {
  render: () => (
    <Grid container spacing={1}>
      <Grid xs={2}>Primary</Grid>
      <Grid xs={2}>
        <IconButton title="search" variant="text" color="primary">
          <SearchIcon />
        </IconButton>
      </Grid>
      <Grid xs={8}>
        <IconButton title="search" variant="outlined" color="primary">
          <SearchIcon />
        </IconButton>
      </Grid>
      <Grid xs={2}>Secondary</Grid>
      <Grid xs={2}>
        <IconButton title="search" variant="text" color="secondary">
          <SearchIcon />
        </IconButton>
      </Grid>
      <Grid xs={8}>
        <IconButton title="search" variant="outlined" color="secondary">
          <SearchIcon />
        </IconButton>
      </Grid>
    </Grid>
  ),
};

/** For additional sizes, specify `fontSize` on the child `Icon` */
export const _Sizes: StoryObj<typeof IconButton> = {
  render: () => (
    <Grid container spacing={1}>
      <Grid xs={2}>xsmall icon</Grid>
      <Grid xs={2}>
        <IconButton title="search">
          <SearchIcon fontSize="xsmall" />
        </IconButton>
      </Grid>
      <Grid xs={8}>
        <IconButton title="search" variant="outlined">
          <SearchIcon fontSize="xsmall" />
        </IconButton>
      </Grid>
      <Grid xs={2}>small icon</Grid>
      <Grid xs={2}>
        <IconButton title="search">
          <SearchIcon fontSize="small" />
        </IconButton>
      </Grid>
      <Grid xs={8}>
        <IconButton title="search" variant="outlined">
          <SearchIcon fontSize="small" />
        </IconButton>
      </Grid>
      <Grid xs={2}>medium icon</Grid>
      <Grid xs={2}>
        <IconButton title="search">
          <SearchIcon fontSize="medium" />
        </IconButton>
      </Grid>
      <Grid xs={8}>
        <IconButton title="search" variant="outlined">
          <SearchIcon fontSize="medium" />
        </IconButton>
      </Grid>
      <Grid xs={2}>large icon</Grid>
      <Grid xs={2}>
        <IconButton title="search">
          <SearchIcon fontSize="large" />
        </IconButton>
      </Grid>
      <Grid xs={8}>
        <IconButton title="search" variant="outlined">
          <SearchIcon fontSize="large" />
        </IconButton>
      </Grid>
    </Grid>
  ),
};
