// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarProps } from './Avatar';
import { HomeIcon } from '@availity/mui-icon';
import Grid from '@mui/material/Grid2';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      // this guarantees the options display in the correct order
      options: ['xs', 's', 'm', 'l', 'xl'],
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const _Avatar: StoryObj<typeof Avatar> = {
  render: (args: AvatarProps) => <Avatar {...args} />,
};

export const _TextAvatar: StoryObj<typeof Avatar> = {
  render: (args: AvatarProps) => <Avatar {...args} />,
  args: {
    children: 'John Doe',
  },
};

export const _CustomSrcAvatar: StoryObj<typeof Avatar> = {
  render: (args: AvatarProps) => <Avatar {...args} />,
  args: {
    src: 'https://avatars.githubusercontent.com/u/329985?s=100',
    alt: 'Orange circle with interlocking AV logo',
  },
};

export const _IconAvatar: StoryObj<typeof Avatar> = {
  render: (args: AvatarProps) => (
    <Avatar {...args}>
      <HomeIcon />
    </Avatar>
  ),
};

export const _Sizes: StoryObj<typeof Avatar> = {
  render: (args: AvatarProps) => (
    <Grid container spacing={1}>
      <Grid size={{ xs: 2 }}>XSmall</Grid>
      <Grid size={{ xs: 10 }}>
        <Avatar {...args} size="xs" />
      </Grid>
      <Grid size={{ xs: 2 }}>Small</Grid>
      <Grid size={{ xs: 10 }}>
        <Avatar {...args} size="s" />
      </Grid>
      <Grid size={{ xs: 2 }}>Medium</Grid>
      <Grid size={{ xs: 10 }}>
        <Avatar {...args} size="m" />
      </Grid>
      <Grid size={{ xs: 2 }}>Large</Grid>
      <Grid size={{ xs: 10 }}>
        <Avatar {...args} size="l" />
      </Grid>
      <Grid size={{ xs: 2 }}>XLarge</Grid>
      <Grid size={{ xs: 10 }}>
        <Avatar {...args} size="xl" />
      </Grid>
    </Grid>
  ),
  args: {
    children: 'John Doe',
  },
  parameters: {
    controls: {
      include: 'children',
    },
  },
};
