import MuiDialogTitle, { DialogTitleProps as MuiDialogTitleProps } from '@mui/material/DialogTitle';

export interface DialogTitleProps extends MuiDialogTitleProps {
  children?: React.ReactNode;
}

export const DialogTitle = ({ children, ...rest }: DialogTitleProps): JSX.Element => {
  return <MuiDialogTitle {...rest}>{children}</MuiDialogTitle>;
};
