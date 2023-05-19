import React from 'react';
import type { StoryObj } from '@storybook/react';
import { HomeIcon } from '@availity/mui-icon';
import { Badge, BadgeProps } from './Badge';

export default {
  title: 'Components/Badge/Badge',
  component: Badge,
  tags: ['autodocs'],
};

export const _Badge: StoryObj<typeof Badge> = {
  render: (args: BadgeProps) => <Badge {...args} />,
  args: {
    children: <HomeIcon fontSize="large" />,
    badgeContent: 3,
    variant: 'standard',
    anchorOrigin: { horizontal: 'right', vertical: 'top' },
  },
};
