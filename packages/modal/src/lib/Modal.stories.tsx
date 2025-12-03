// Each exported component in the package should have its own stories file
import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@availity/mui-button';
import { Typography } from '@availity/mui-typography';
import { Card } from '@availity/mui-card';

import { Modal, ModalProps } from './Modal';

/** If you are creating a modal dialog, you probably want to use the `Dialog` component rather than directly using `Modal`. `Modal` is a lower-level construct that is leveraged by components like `Dialog` and `Menu`. */
const meta: Meta<typeof Modal> = {
  title: 'Components/Modal/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export default meta;

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  padding: '8px 12px',
};

export const _Modal: StoryObj<typeof Modal> = {
  render: (args: ModalProps) => {
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
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          {...args}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Card style={style}>
            <Typography id="modal-modal-title" variant="h6" component="h1">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Card>
        </Modal>
      </>
    );
  },
  args: {
    open: false,
  },
};
