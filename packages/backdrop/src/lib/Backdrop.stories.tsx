// Each exported component in the package should have its own stories file
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@availity/mui-button';
import { CircularProgress } from '@mui/material';
import { Backdrop, BackdropProps } from './Backdrop';

const meta: Meta<typeof Backdrop> = {
  title: 'Components/Backdrop/Backdrop',
  component: Backdrop,
  tags: ['autodocs'],
};

export default meta;

export const _Backdrop: StoryObj<typeof Backdrop> = {
  render: (args: BackdropProps) => {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleOpen = () => {
      setOpen(true);
    };
    return (
      <div>
        <Button onClick={handleOpen}>Show backdrop</Button>
        <Backdrop {...args} open={open} onClick={handleClose} />
      </div>
    );
  },
  args: {
    children: <CircularProgress />,
  },
};
