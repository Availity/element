// Each exported component in the package should have its own stories file

import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from '@availity/mui-alert';
import { Fade, FadeProps } from './Fade';

/** Expand from the start edge of the child element. */
const meta: Meta<typeof Fade> = {
  title: 'Components/Transitions/Fade',
  component: Fade,
  tags: ['autodocs'],
};

export default meta;

export const _Fade: StoryObj<typeof Fade> = {
  render: (args: FadeProps) => {
    const [visible, setVisible] = useState(true);

    const onClose = () => {
      setVisible(false);
      setTimeout(() => setVisible(true), 1000);
    };

    return (
      <Fade in={visible} {...args}>
        <div>
          <Alert onClose={onClose}>Dismissable Alert</Alert>
        </div>
      </Fade>
    );
  },
};
