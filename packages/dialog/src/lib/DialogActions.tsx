import MuiDialogActions, { DialogActionsProps as MuiDialogActionsProps } from '@mui/material/DialogActions';

export interface DialogActionsProps extends MuiDialogActionsProps {
  children?: React.ReactNode;
}

export const DialogActions = ({ children, ...rest }: DialogActionsProps): React.JSX.Element => {
  return <MuiDialogActions {...rest}>{children}</MuiDialogActions>;
};
