// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';
import { CardHeader, CardHeaderProps } from './CardHeader';
import { IconButton } from '@availity/mui-button';
import { MoreVerticalIcon } from '@availity/mui-icon';
import { Avatar } from '@availity/mui-avatar';
import { CardActionArea } from './CardActionArea';

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

export const _CardHeaderAvatar: StoryObj<typeof CardHeader> = {
  render: (args: CardHeaderProps) => (
    <Card>
      <CardHeader {...args} />
    </Card>
  ),
  args: {
    title: 'Card header',
    subheader: 'Subheader',
    avatar: <Avatar size="m" />,
  },
};

export const _CardHeaderAvatarClickable: StoryObj<typeof CardHeader> = {
  render: (args: CardHeaderProps) => (
    <Card>
      <CardActionArea>
        <CardHeader {...args} />
      </CardActionArea>
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
    subheader: 'Subheader',
    avatar: <Avatar size="m" />,
    action: (
      <IconButton title="More" size="medium">
        <MoreVerticalIcon fontSize="xsmall" />
      </IconButton>
    ),
  },
};

export const _CardHeaderStatusChip: StoryObj<typeof CardHeader> = {
  render: (args: CardHeaderProps) => (
    <Card>
      <CardHeader {...args} />
    </Card>
  ),
  args: {
    title: 'Card header',
    subheader: 'Subheader',
    statusChipProps: {
      position: 'right',
      label: 'Approved',
      color: 'success',
    },
    avatar: <Avatar size="m" />,
    action: (
      <IconButton title="More" size="medium">
        <MoreVerticalIcon fontSize="xsmall" />
      </IconButton>
    ),
  },
};
