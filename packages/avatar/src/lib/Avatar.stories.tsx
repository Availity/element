// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarProps } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;

export const _Avatar: StoryObj<typeof Avatar> = {
  render: (args: AvatarProps) => <Avatar {...args} />,
  args: {
    children: 'This text is a child of Avatar',
  },
};

export const _ImageAvatar: StoryObj<typeof Avatar> = {
  render: (args: AvatarProps) => <Avatar {...args} />,
  args: {
    src: 'https://avatars.githubusercontent.com/u/329985?s=100',
  },
};
