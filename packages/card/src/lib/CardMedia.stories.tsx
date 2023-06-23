// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { CardMedia, CardMediaProps } from './CardMedia';

const meta: Meta<typeof CardMedia> = {
  title: 'Components/Card/CardMedia',
  component: CardMedia,
  tags: ['autodocs'],
};

export default meta;

export const _CardMedia: StoryObj<typeof CardMedia> = {
  render: (args: CardMediaProps) => <CardMedia {...args} />,
  args: {
    children: 'This text is a child of CardMedia',
  },
};
