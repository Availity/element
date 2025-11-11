import { default as MuiModal, ModalProps as MuiModalProps } from '@mui/material/Modal';

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

export const Modal = ({ children, ...rest }: ModalProps): React.JSX.Element => {
  return (
    <MuiModal {...rest} disablePortal>
      {children}
    </MuiModal>
  );
};
