// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { CircularProgress } from '@mui/material';
import { Backdrop, BackdropProps } from './Backdrop';

const meta: Meta<typeof Backdrop> = {
  title: 'Components/Backdrop/Backdrop',
  component: Backdrop,
  tags: ['autodocs'],
};

export default meta;

export const _Backdrop: StoryObj<typeof Backdrop> = {
  render: (args: BackdropProps) => <Backdrop {...args} />,
  args: {
    children: <CircularProgress />,
    open: false,
  },
};
