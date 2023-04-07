import React, { useState } from 'react';
import type { StoryObj } from '@storybook/react';
import Collapse from '@mui/material/Collapse';
import { Alert } from './Alert';
import { AlertTitle } from './AlertTitle';

export default {
  title: 'Components/Alert/AlertTitle',
  component: AlertTitle,
  tags: ['autodocs'],
  args: {
    children: 'This text is inside the AlertTitle',
  }
};

export const _AlertTitle: StoryObj<typeof AlertTitle> = {
  render: (args ) => (
    <Alert severity="info">
      <AlertTitle {...args}/>
      This text is inside the Alert
    </Alert>
  )
};

export const _InDismissableAlert: StoryObj<typeof AlertTitle> = {
  render: (args ) =>  {
    const [visible, setVisible] = useState(true);

    const onClose = () => {
      setVisible(false);
      setTimeout(() => setVisible(true), 1000);
    };

    return (
      <Collapse in={visible}>
        <Alert severity="info" onClose={onClose}>
          <AlertTitle {...args}/>
          This text is inside the Alert
        </Alert>
      </Collapse>
    );
  }
};
