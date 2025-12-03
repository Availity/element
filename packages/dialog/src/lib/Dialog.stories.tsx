// Each exported component in the package should have its own stories file
import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@availity/mui-button';
import { BlockUi } from '@availity/mui-block-ui';
import { SelectChangeEvent, FormControlLabel, Switch } from '@availity/mui-form-utils';
import { Box, Grid } from '@availity/mui-layout';
import { MenuItem } from '@availity/mui-menu';
import { TextField } from '@availity/mui-textfield';

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

const MockDialogProps = {
  disableAutoFocus: true,
  disableEnforceFocus: true,
  disableEscapeKeyDown: true,
  disablePortal: true,
  disableRestoreFocus: true,
  disableScrollLock: true,
  hideBackdrop: true,
  keepMounted: true,
  onClose: ()=>null,
  open: true,
  sx: {
    position: 'relative',
    '.MuiDialog-container': {
      alignItems: 'normal',
      justifyContent: 'normal'
    },
    '.MuiDialog-paper': {
      margin: 0
    },

  }
}

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
        <Dialog {...args} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title">
          <DialogTitle id="alert-dialog-title">
            Availity Dialog
          </DialogTitle>
          <DialogContent>
            <DialogContentText>{args.children}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Disagree
            </Button>
            <Button onClick={handleClose}>
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
export const _DialogDisplay: StoryObj<typeof Dialog> = {
  render: (args: DialogProps) => (
    <Dialog {...MockDialogProps} {...args}>
      <DialogTitle id="alert-dialog-title">
        Availity Dialog
      </DialogTitle>
      <DialogContent>
        <DialogContentText>Dialog Content Text</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={()=>null} color="secondary">
          Disagree
        </Button>
        <Button onClick={()=>null} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  ),
  args: {
    disableAutoFocus: true,
    disableScrollLock: true,
    hideBackdrop: true,
    onClose: ()=>null,
    open: true,
  }
};

export const _Sizes: StoryObj<typeof Dialog> = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [fullWidth, setFullWidth] = useState(true);
    const [maxWidth, setMaxWidth] = useState<DialogProps['maxWidth']>('sm');

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const handleMaxWidthChange = (event: SelectChangeEvent<typeof maxWidth>) => {
      setMaxWidth(
        // @ts-expect-error autofill of arbitrary value is not handled.
        event.target.value,
      );
    };

    const handleFullWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setFullWidth(event.target.checked);
    };

    return (
      <>
        <Button onClick={handleClickOpen}>
          Open max-width dialog
        </Button>
        <Dialog
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          open={open}
          onClose={handleClose}
        >
          <DialogTitle>Optional sizes</DialogTitle>
          <DialogContent>
            <DialogContentText>
              You can set my maximum width and whether to adapt or not.
            </DialogContentText>
            <Box
              component="form"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                m: 'auto',
                width: 'fit-content',
              }}
            >
              <FormControlLabel
                sx={{ mt: 1 }}
                control={
                  <Switch checked={fullWidth} onChange={handleFullWidthChange} />
                }
                label="Full width"
              />
              <TextField value={maxWidth} select SelectProps={{ onChange: handleMaxWidthChange }} label="max-width" name="max-width" margin="normal">
                  <MenuItem value={false as any}>false</MenuItem>
                  <MenuItem value="xs">xs</MenuItem>
                  <MenuItem value="sm">sm</MenuItem>
                  <MenuItem value="md">md</MenuItem>
                  <MenuItem value="lg">lg</MenuItem>
                  <MenuItem value="xl">xl</MenuItem>
              </TextField>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
};

/** The loader should only display over the central dialog content */
export const _Loading: StoryObj<typeof Dialog> = {
  render: () => (
    <Dialog {...MockDialogProps} fullWidth>
      <DialogTitle id="alert-dialog-title">
        Availity Dialog
      </DialogTitle>
      <DialogContent>
        <BlockUi blocking message="Loading">
          <DialogContentText>
            Dialog Content Text

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sem mauris, sollicitudin sit amet lacus vel, sollicitudin tincidunt mi. Mauris risus nisi, sagittis id augue sit amet, venenatis volutpat dui. Etiam commodo vel lectus eget ornare. Donec laoreet urna eu velit condimentum viverra. Curabitur ut pulvinar ipsum, vitae laoreet nulla. Nam in nisl sit amet leo dignissim tempor. Donec imperdiet est odio, ac aliquam libero eleifend at. Pellentesque tempor semper nulla vel fermentum. Pellentesque viverra, neque vel laoreet sollicitudin, massa lacus ultricies lectus, quis rutrum odio orci vitae turpis. Donec rhoncus dui nec ex porta, vel porta odio suscipit.
          </DialogContentText>
        </BlockUi>
      </DialogContent>
      <DialogActions>
        <Button onClick={()=>null} color="secondary">
          Disagree
        </Button>
        <Button onClick={()=>null} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  ),
};

export const _WithAlertIcons: StoryObj<typeof Dialog> = {
  render: () => (
    <Grid container direction="row" spacing={2} flexWrap="wrap">
      <Grid>
        <Dialog {...MockDialogProps}>
          <DialogTitle id="alert-dialog-title" icon="info">
            Info
          </DialogTitle>
          <DialogContent>
            <DialogContentText>Dialog Content Text</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>null} color="secondary">
              Disagree
            </Button>
            <Button onClick={()=>null} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
      <Grid>
        <Dialog {...MockDialogProps}>
          <DialogTitle id="alert-dialog-title" icon="success">
            Success
          </DialogTitle>
          <DialogContent>
            <DialogContentText>Dialog Content Text</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>null} color="secondary">
              Disagree
            </Button>
            <Button onClick={()=>null} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
      <Grid>
        <Dialog {...MockDialogProps}>
          <DialogTitle id="alert-dialog-title" icon="warning">
            Warning
          </DialogTitle>
          <DialogContent>
            <DialogContentText>Dialog Content Text</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>null} color="secondary">
              Disagree
            </Button>
            <Button onClick={()=>null} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
      <Grid>
        <Dialog {...MockDialogProps}>
          <DialogTitle id="alert-dialog-title" icon="error">
            Error
          </DialogTitle>
          <DialogContent>
            <DialogContentText>Dialog Content Text</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>null} color="secondary">
              Disagree
            </Button>
            <Button onClick={()=>null} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </Grid>
  ),
};
