import { useState } from 'react';
import { Popover } from '@availity/mui-popover';
import { Button } from '@availity/mui-button';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { avLogMessagesApiV2 } from '@availity/api-axios';
import { FeedbackForm } from './FeedbackForm';
import { FeedbackHeader } from './FeedbackHeader';
import { CommentsIcon } from '@availity/mui-icon';

export interface FeedbackProps {
  analytics?: { info: (entries: Record<string, unknown>) => void };
  appName: string;
  buttonVariant?: 'secondary' | 'tertiary';
}

const FeedbackContainer = styled(Container, { name: 'AvFeedbackContainer', slot: 'root' })({});

const FeedbackButton = styled(Button, { name: 'AvFeedbackButton', slot: 'root' })({});

export const Feedback = ({
  analytics = avLogMessagesApiV2,
  appName,
  buttonVariant = 'secondary',
}: FeedbackProps): React.JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [sent, setSent] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setSent(false);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <FeedbackButton onClick={handlePopoverOpen} color={buttonVariant} startIcon={<CommentsIcon />}>
        Feedback
      </FeedbackButton>
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
