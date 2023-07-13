// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { CardHeader, CardHeaderProps } from './CardHeader';
import { IconButton } from '@availity/mui-button';
import { MoreVerticalIcon } from '@availity/mui-icon';

const meta: Meta<typeof CardHeader> = {
  title: 'Components/Card/CardHeader',
  component: CardHeader,
  tags: ['autodocs'],
};

export default meta;

export const _CardHeader: StoryObj<typeof CardHeader> = {
  render: (args: CardHeaderProps) => (
    <Card>
      <CardHeader {...args} />
    </Card>
  ),
  args: {
    title: 'Card header',
    subheader: 'Subheader',
  },
};

export const _CardHeaderAction: StoryObj<typeof CardHeader> = {
  render: (args: CardHeaderProps) => (
    <Card>
      <CardHeader {...args} />
    </Card>
  ),
  args: {
    title: 'Card header',
    // subheader: 'Subheader',
    action: (
      <IconButton color="primary" title="More" size="medium">
        <MoreVerticalIcon />
      </IconButton>
    ),
  },
};
