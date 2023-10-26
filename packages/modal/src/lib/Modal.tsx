import { Modal as MuiModal, ModalProps as MuiModalProps } from '@mui/material';

export type ModalProps = {
  children?: React.ReactNode;
} & MuiModalProps;

export const Modal = ({ children, ...rest }: ModalProps): JSX.Element => {
  return <MuiModal {...rest}>{children}</MuiModal>;
};
