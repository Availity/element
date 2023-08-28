// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { Typography, TypographyProps } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography/Typography',
  component: Typography,
  tags: ['autodocs'],
};

export default meta;

export const _Typography: StoryObj<typeof Typography> = {
  render: (args: TypographyProps) => <Typography {...args} />,
  args: {
    children: 'This text is a child of Typography',
  },
};
