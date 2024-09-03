import type { Meta, StoryObj } from '@storybook/react';
import { LinearProgress, LinearProgressProps } from './LinearProgress';

const meta: Meta<typeof LinearProgress> = {
  title: 'Components/Progress/LinearProgress',
  component: LinearProgress,
  tags: ['autodocs'],
};

export default meta;

export const _LinearProgress: StoryObj<typeof LinearProgress> = {
  render: (args: LinearProgressProps) => <LinearProgress {...args} />,
  args: {
    value: 50,
  },
};
