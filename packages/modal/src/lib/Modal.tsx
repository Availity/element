import { Modal as MuiModal, ModalProps as MuiModalProps } from '@mui/material';

export type ModalProps = {
  children?: React.ReactNode;
} & Omit<
  MuiModalProps,
  | 'BackdropComponent'
  | 'BackdropProps'
  | 'component'
  | 'components'
  | 'componentsProps'
  | 'disableAutoFocus'
  | 'disableEnforceFocus'
  | 'disablePortal'
  | 'onBackdropClick'
>;

export const Modal = ({ children, ...rest }: ModalProps): JSX.Element => {
  return (
    <MuiModal {...rest} disablePortal>
      {children}
    </MuiModal>
  );
};
