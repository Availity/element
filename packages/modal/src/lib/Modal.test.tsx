import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '@availity/mui-button';
import { Card } from '@availity/mui-card';

import { Modal } from './Modal';

const TestModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button data-testid="modal-button" onClick={handleOpen}>
        Open modal
      </Button>
      <Modal open={open} onClose={handleClose}>
        <div>
          <Card>Text in a modal</Card>
        </div>
      </Modal>
    </>
  );
};

describe('Modal', () => {
  test('should render successfully', () => {
    render(<TestModal />);

    userEvent.click(screen.getByTestId('modal-button'));

    expect(screen.getByText('Text in a modal')).toBeTruthy();
  });
});
