// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react-vite';
import { CardContent, CardContentProps } from './CardContent';
import { Card } from './Card';

const meta: Meta<typeof CardContent> = {
  title: 'Components/Card/CardContent',
  component: CardContent,
  tags: ['autodocs'],
};

export default meta;

export const _CardContent: StoryObj<typeof CardContent> = {
  render: (args: CardContentProps) => (
    <Card>
      <CardContent {...args} />
    </Card>
  ),
  args: {
    children: 'This text is a child of CardContent',
  },
};
