import React from 'react';
import type { StoryObj } from '@storybook/react';
import { Alert } from '../Alert';
import { AlertTitle } from '../AlertTitle';

export default {
  title: 'Components/Alert/AlertTitle',
  component: AlertTitle,
  tags: ['autodocs']
};

export const Default: StoryObj<typeof AlertTitle> = {
  render: (args ) => (
    <Alert>
      <AlertTitle {...args}/>
      This text is inside the Alert
    </Alert>
  ),
  args: {
    children: 'This text is inside the AlertTitle',
  }
};
