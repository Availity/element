import MuiDialogContentText, {
  DialogContentTextProps as MuiDialogContentTextProps,
} from '@mui/material/DialogContentText';

export interface DialogContentTextProps extends MuiDialogContentTextProps {
  children?: React.ReactNode;
}

export const DialogContentText = ({ children, ...rest }: DialogContentTextProps): React.JSX.Element => <MuiDialogContentText {...rest}>{children}</MuiDialogContentText>;
