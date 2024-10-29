import React, { useState } from 'react';
import type { StoryObj } from '@storybook/react';
import Collapse from '@mui/material/Collapse';
import { Alert } from './Alert';
import { AlertTitle } from './AlertTitle';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { SystemPropsList } from '../../../../data/MuiSystemProperties';

// The AlertTitle type pulled in all the Typography props as well
const excludedProps = [
  ...SystemPropsList,
  'align',
  'className',
  'component',
  'gutterBottom',
  'noWrap',
  'paragraph',
  'style',
  'variant',
  'variantMapping',
];

export default {
  title: 'Components/Alert/AlertTitle',
  component: AlertTitle,
  parameters: {
    docs: {
      controls: {
        exclude: excludedProps,
      },
    },
    canvas: {
      controls: {
        exclude: excludedProps,
      },
    },
  },
  tags: ['autodocs'],
  args: {
    children: 'This text is inside the AlertTitle',
  },
};

export const _AlertTitle: StoryObj<typeof AlertTitle> = {
  render: (args) => (
    <Alert severity="info">
      <AlertTitle {...args} />
      This text is inside the Alert
    </Alert>
  ),
};

export const _InDismissableAlert: StoryObj<typeof AlertTitle> = {
  render: (args) => {
    const [visible, setVisible] = useState(true);

    const onClose = () => {
      setVisible(false);
      setTimeout(() => setVisible(true), 1000);
    };

    return (
      <Collapse in={visible}>
        <Alert severity="info" onClose={onClose}>
          <AlertTitle {...args} />
          This text is inside the Alert
        </Alert>
      </Collapse>
    );
  },
};
