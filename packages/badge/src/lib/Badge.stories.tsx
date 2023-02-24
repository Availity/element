import React from 'react';
import type { StoryObj } from '@storybook/react';
import Badge, { BadgeProps } from './Badge';

export default {
  title: 'Components/Badge/Badge',
  component: Badge,
  tags: ['autodocs']
};

export const _Badge: StoryObj<typeof Badge> = {
  render: (args: BadgeProps) => (
    <Badge {...args} />
  ),
  args: {
    children: 'This text is a child of the badge',
    badgeContent: 'badge content'
  }
};
