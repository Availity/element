import MuiDialogContentText, {
  DialogContentTextProps as MuiDialogContentTextProps,
} from '@mui/material/DialogContentText';

export interface DialogContentTextProps extends MuiDialogContentTextProps {
  children?: React.ReactNode;
}

export const DialogContentText = ({ children, ...rest }: DialogContentTextProps): JSX.Element => {
  return <MuiDialogContentText {...rest}>{children}</MuiDialogContentText>;
};
