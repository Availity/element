// Each exported component in the package should have its own stories file

import { SyntheticEvent, useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle } from '@availity/mui-alert';
import { Button } from '@availity/mui-button';
import { Box, Grid } from '@availity/mui-layout';
import { Collapse } from '@availity/mui-transitions';
import { Link } from '@mui/material';
import { Snackbar, SnackbarProps, SnackbarCloseReason } from './Snackbar';
import { styled } from '@mui/material/styles';

/**
 * Snackbars (also known as toasts) are used for brief notifications of processes that have been or will be performed.
 *
 * Availity does not currently use the Material `SnackbarContent` component for basic messages,
 * instead every `Snackbar` should contain an `Alert` to convey messages.
 */
const meta: Meta<typeof Snackbar> = {
  title: 'Components/Snackbar/Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
};

export default meta;

const SnackbarStoryPreview = styled('div', {
  name: 'MuiSnackbar',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})({});

export const _Snackbar: StoryObj<typeof Snackbar> = {
  render: (args: SnackbarProps) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(true);
    };

    const handleClose = (event: SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
      if (reason === 'clickaway') {
        return;
      }

      setOpen(false);
    };

    const action = (
      <Link component="button" onClick={handleClose}>
        Action
      </Link>
    );

    return (
      <Box sx={{ minHeight: '200px' }}>
        <Button onClick={handleClick}>Open Snackbar</Button>
        <Snackbar {...args} open={open}>
          <Alert icon={false} onClose={handleClose} action={action} severity="info">
            Alert Text
          </Alert>
        </Snackbar>
      </Box>
    );
  },
  args: {
    anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
    autoHideDuration: 6000,
  },
};

export const _Actions: StoryObj<typeof Snackbar> = {
  render: () => {
    const [visible, setVisible] = useState(true);

    const onClose = () => {
      setVisible(false);
      setTimeout(() => setVisible(true), 1000);
    };

    const actionButton = (
      <Link component="button" onClick={onClose}>
        Action Button
      </Link>
    );

    const actionLink = <Link href="#">Action Link</Link>;

    return (
      <Grid container spacing={1} maxWidth="620px">
        <Grid>
          <Collapse in={visible}>
            <SnackbarStoryPreview>
              <Alert severity="info" icon={false}>
                No Action, No Close
              </Alert>
            </SnackbarStoryPreview>
          </Collapse>
        </Grid>
        <Grid>
          <Collapse in={visible}>
            <SnackbarStoryPreview>
              <Alert severity="info" icon={false} onClose={onClose}>
                Close
              </Alert>
            </SnackbarStoryPreview>
          </Collapse>
        </Grid>
        <Grid>
          <Collapse in={visible}>
            <SnackbarStoryPreview>
              <Alert severity="info" icon={false} action={actionButton}>
                Action Button
              </Alert>
            </SnackbarStoryPreview>
          </Collapse>
        </Grid>
        <Grid>
          <Collapse in={visible}>
            <SnackbarStoryPreview>
              <Alert severity="info" icon={false} action={actionLink}>
                Action Link
              </Alert>
            </SnackbarStoryPreview>
          </Collapse>
        </Grid>
        <Grid>
          <Collapse in={visible}>
            <SnackbarStoryPreview>
              <Alert severity="info" icon={false} onClose={onClose} action={actionButton}>
                Action Button & Close
              </Alert>
            </SnackbarStoryPreview>
          </Collapse>
        </Grid>
      </Grid>
    );
  },
};

export const _Alerts: StoryObj<typeof Snackbar> = {
  render: () => {
    const [visible, setVisible] = useState(true);

    const onClose = () => {
      setVisible(false);
      setTimeout(() => setVisible(true), 1000);
    };

    return (
      <Grid container spacing={1} maxWidth="620px">
        <Grid>
          <Collapse in={visible}>
            <SnackbarStoryPreview>
              <Alert severity="info" onClose={onClose}>
                <AlertTitle>Info Alert Snackbar</AlertTitle>
                Additional text.
              </Alert>
            </SnackbarStoryPreview>
          </Collapse>
        </Grid>
        <Grid>
          <Collapse in={visible}>
            <SnackbarStoryPreview>
              <Alert severity="success" onClose={onClose}>
                <AlertTitle>Success Alert Snackbar</AlertTitle>
                Additional text.
              </Alert>
            </SnackbarStoryPreview>
          </Collapse>
        </Grid>
        <Grid>
          <Collapse in={visible}>
            <SnackbarStoryPreview>
              <Alert severity="warning" onClose={onClose}>
                <AlertTitle>Warning Alert Snackbar</AlertTitle>
                Additional text.
              </Alert>
            </SnackbarStoryPreview>
          </Collapse>
        </Grid>
        <Grid>
          <Collapse in={visible}>
            <SnackbarStoryPreview>
              <Alert severity="error" onClose={onClose}>
                <AlertTitle>Error Alert Snackbar</AlertTitle>
                Additional text. Don't make a snackbar more than a couple sentences!
              </Alert>
            </SnackbarStoryPreview>
          </Collapse>
        </Grid>
      </Grid>
    );
  },
};

interface SnackbarMessage {
  message: string;
  key: number;
}

/** This demo shows how to display multiple Snackbars without stacking them by using a consecutive animation. */
export const _ConsecutiveSnackbars: StoryObj<typeof Snackbar> = {
  render: () => {
    const [snackPack, setSnackPack] = useState<readonly SnackbarMessage[]>([]);
    const [open, setOpen] = useState(false);
    const [messageInfo, setMessageInfo] = useState<SnackbarMessage | undefined>(undefined);

    useEffect(() => {
      if (snackPack.length && !messageInfo) {
        // Set a new snack when we don't have an active one
        setMessageInfo({ ...snackPack[0] });
        setSnackPack((prev) => prev.slice(1));
        setOpen(true);
      } else if (snackPack.length && messageInfo && open) {
        // Close an active snack when a new one is added
        setOpen(false);
      }
    }, [snackPack, messageInfo, open]);

    const handleClick = (message: string) => () => {
      setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
    };

    const handleClose = (event: SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };

    const handleExited = () => {
      setMessageInfo(undefined);
    };

    return (
      <Box minHeight="250px" gap="8px">
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <Button onClick={handleClick('Message A')}>Show message A</Button>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Button onClick={handleClick('Message B')}>Show message B</Button>
          </Grid>
        </Grid>
        <Snackbar
          key={messageInfo ? messageInfo.key : undefined}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          TransitionProps={{ onExited: handleExited }}
        >
          <Alert severity="info" icon={false} onClose={handleClose}>
            {messageInfo?.message}
          </Alert>
        </Snackbar>
      </Box>
    );
  },
};
