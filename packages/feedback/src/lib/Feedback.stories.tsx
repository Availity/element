// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Feedback, FeedbackProps } from './Feedback';

const meta: Meta<typeof Feedback> = {
  title: 'Components/Feedback/Feedback',
  component: Feedback,
  tags: ['autodocs'],
};

export default meta;

export const _Feedback: StoryObj<typeof Feedback> = {
  render: (args: FeedbackProps) => <Feedback {...args} />,
  args: {
    appName: 'This App',
  },
};
