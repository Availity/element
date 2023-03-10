import type { StoryObj } from '@storybook/react';
import { Alert, AlertProps } from './Alert';

export default {
  title: 'Components/Alert/Alert',
  component: Alert,
  tags: ['autodocs']
};

export const _Alert: StoryObj<typeof Alert> = {
  render: (args: AlertProps) => (
    <Alert {...args} />
  ),
  args: {
    children: 'This text is inside the alert',
  }
};
