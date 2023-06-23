// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { CardActionArea, CardActionAreaProps } from './CardActionArea';

const meta: Meta<typeof CardActionArea> = {
  title: 'Components/Card/CardActionArea',
  component: CardActionArea,
  tags: ['autodocs'],
};

export default meta;

export const _Card: StoryObj<typeof CardActionArea> = {
  render: (args: CardActionAreaProps) => <CardActionArea {...args} />,
  args: {
    children: 'This text is a child of CardActionArea',
  },
};
