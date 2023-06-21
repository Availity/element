// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardProps } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;

export const _Card: StoryObj<typeof Card> = {
  render: (args: CardProps) => <Card {...args} />,
  args: {
    children: 'This text is a child of Card',
  },
};
