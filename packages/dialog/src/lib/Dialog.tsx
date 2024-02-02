import MuiDialog, { DialogProps as MuiDialogProps } from '@mui/material/Dialog';

export type DialogProps = Omit<
  MuiDialogProps,
  'BackdropComponent' | 'BackdropProps' | 'PaperComponent' | 'PaperProps' | 'TransitionComponent' | 'TransitionProps'
> & {
  children?: React.ReactNode;
};

export const Dialog = ({ children, ...rest }: DialogProps): JSX.Element => {
  return <MuiDialog {...rest}>{children}</MuiDialog>;
};
