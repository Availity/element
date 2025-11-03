// For bundling purposes, always use the direct import for an mui component, i.e. '@mui/material/xxx'
import MuiSnackbar, { SnackbarProps as MuiSnackbarProps, SnackbarCloseReason as MuiSnackbarCloseReason } from '@mui/material/Snackbar';

export type SnackbarProps = Omit<MuiSnackbarProps, 'action' | 'ContentProps' | 'message' | 'TransitionComponent' | 'transitionDuration'>;

export type SnackbarCloseReason = MuiSnackbarCloseReason;

export const Snackbar = (props: SnackbarProps): React.JSX.Element => {
  return <MuiSnackbar {...props}/>;
};
