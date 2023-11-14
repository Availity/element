// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { CircularProgress, CircularProgressProps } from './CircularProgress';

const meta: Meta<typeof CircularProgress> = {
  title: 'Components/Progress/Progress',
  component: CircularProgress,
  tags: ['autodocs'],
};

export default meta;

export const _Progress: StoryObj<typeof CircularProgress> = {
  render: (args: CircularProgressProps) => <CircularProgress {...args} />,
  args: {},
};
