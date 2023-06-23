// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { CardContent, CardContentProps } from './CardContent';

const meta: Meta<typeof CardContent> = {
  title: 'Components/Card/CardContent',
  component: CardContent,
  tags: ['autodocs'],
};

export default meta;

export const _CardContent: StoryObj<typeof CardContent> = {
  render: (args: CardContentProps) => <CardContent {...args} />,
  args: {
    children: 'This text is a child of CardContent',
  },
};
