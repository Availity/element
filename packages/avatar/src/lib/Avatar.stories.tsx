// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarProps } from './Avatar';
import { HomeIcon } from '@availity/mui-icon';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;

export const _Avatar: StoryObj<typeof Avatar> = {
  render: (args: AvatarProps) => <Avatar {...args} />,
  args: {
    children: 'John Doe',
  },
};

export const _ImageAvatar: StoryObj<typeof Avatar> = {
  render: (args: AvatarProps) => <Avatar {...args} />,
  args: {
    src: 'https://avatars.githubusercontent.com/u/329985?s=100',
  },
};

export const _IconAvatar: StoryObj<typeof Avatar> = {
  render: (args: AvatarProps) => (
    <Avatar {...args}>
      <HomeIcon />
    </Avatar>
  ),
};
