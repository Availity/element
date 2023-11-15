import { useState } from 'react';
import { Popover } from '@availity/mui-popover';
import { FeedbackForm } from './FeedbackForm';
import { FeedbackHeader } from './FeedbackHeader';
import { Button } from '@availity/mui-button';
import { Container, styled } from '@mui/material';

export interface FeedbackProps {
  appName: string;
  variant?: string;
}

const FeedbackContainer = styled(Container, { name: 'FeedbackContainer', slot: 'root' })({});

export const Feedback = ({ appName }: FeedbackProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  return (
    <>
      <Button onClick={handlePopoverOpen}>Give Feedback</Button>
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        disableRestoreFocus
        onClose={handlePopoverClose}
        open={open}
      >
        <FeedbackContainer>
          <FeedbackHeader appName={appName} handleClose={handlePopoverClose} />
          <FeedbackForm />
        </FeedbackContainer>
      </Popover>
    </>
  );
};
