import MuiDialogContent, { DialogContentProps as MuiDialogContentProps } from '@mui/material/DialogContent';

export interface DialogContentProps extends MuiDialogContentProps {
  children?: React.ReactNode;
}

export const DialogContent = ({ children, ...rest }: DialogContentProps): React.JSX.Element => {
  return <MuiDialogContent {...rest}>{children}</MuiDialogContent>;
};
