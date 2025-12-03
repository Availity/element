// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react-vite';
import { CircularProgress, CircularProgressProps } from './CircularProgress';

const meta: Meta<typeof CircularProgress> = {
  title: 'Components/Progress/CircularProgress',
  component: CircularProgress,
  tags: ['autodocs'],
};

export default meta;

export const _CircularProgress: StoryObj<typeof CircularProgress> = {
  render: (args: CircularProgressProps) => <CircularProgress {...args} />,
  args: {},
};
