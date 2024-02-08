// Each exported component in the package should have its own stories file
import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@availity/mui-button';

import { Dialog, DialogProps } from './Dialog';
import { DialogActions } from './DialogActions';
import { DialogContent } from './DialogContent';
import { DialogContentText } from './DialogContentText';
import { DialogTitle } from './DialogTitle';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog/Dialog',
  component: Dialog,
  tags: ['autodocs'],
};

export default meta;

export const _Dialog: StoryObj<typeof Dialog> = {
  render: (args: DialogProps) => {
    const [open, setOpen] = useState(args.open);

    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
        <Button onClick={handleOpen}>Open Dialog</Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle id="alert-dialog-title">Availity Dialog</DialogTitle>
          <DialogContent>
            <DialogContentText>{args.children}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Disagree
            </Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  },
  args: {
    children: 'Here is some text in the dialog box.',
    open: false,
  },
};
