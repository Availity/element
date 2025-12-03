// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react-vite';
import { CardMedia, CardMediaProps } from './CardMedia';
import { Card } from './Card';

const meta: Meta<typeof CardMedia> = {
  title: 'Components/Card/CardMedia',
  component: CardMedia,
  tags: ['autodocs'],
};

export default meta;

export const _CardMedia: StoryObj<typeof CardMedia> = {
  render: (args: CardMediaProps) => (
    <Card>
      <CardMedia {...args} />
    </Card>
  ),
  args: {
    image: 'https://avatars.githubusercontent.com/u/329985?s=200&v=4',
    sx: { height: '100px' },
    'aria-label': 'Orange rectangle with interlocking AV logo',
  },
};
