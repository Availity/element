import { useState } from 'react';
import { Popover } from '@availity/mui-popover';
import { Button } from '@availity/mui-button';
import { Container, styled } from '@mui/material';
import { avLogMessagesApi } from '@availity/api-axios';
import { FeedbackForm } from './FeedbackForm';
import { FeedbackHeader } from './FeedbackHeader';

export interface FeedbackProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  analytics?: { info: (entries: any) => any };
  appName: string;
}

const FeedbackContainer = styled(Container, { name: 'AvFeedbackContainer', slot: 'root' })({});

export const Feedback = ({ analytics = avLogMessagesApi, appName }: FeedbackProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [sent, setSent] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Button onClick={handlePopoverOpen} color="secondary">
        Give Feedback
      </Button>
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        sx={{ marginTop: '4px' }}
        disableRestoreFocus
        onClose={handlePopoverClose}
        open={open}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <FeedbackContainer>
          <FeedbackHeader appName={appName} handleClose={handlePopoverClose} loading={loading} sent={sent} />
          <FeedbackForm
            analytics={analytics}
            appName={appName}
            handleClose={handlePopoverClose}
            loading={loading}
            sent={sent}
            setLoading={setLoading}
            setSent={setSent}
          />
        </FeedbackContainer>
      </Popover>
    </>
  );
};
