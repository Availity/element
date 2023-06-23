// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { CardHeader, CardHeaderProps } from './CardHeader';

const meta: Meta<typeof CardHeader> = {
  title: 'Components/Card/CardHeader',
  component: CardHeader,
  tags: ['autodocs'],
};

export default meta;

export const _CardHeader: StoryObj<typeof CardHeader> = {
  render: (args: CardHeaderProps) => <CardHeader {...args} />,
  args: {
    children: 'This text is a child of Card',
  },
};
