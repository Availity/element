import MuiDialog, { DialogProps as MuiDialogProps } from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import { IconButton, IconButtonProps } from '@availity/mui-button';
import { CloseIcon } from '@availity/mui-icon';


export type DialogProps = Omit<
  MuiDialogProps,
  'BackdropComponent' | 'BackdropProps' | 'components' | 'componentsProps' | 'container' | 'disableEnforceFocus' | 'disableEscapeKeyDown' | 'disablePortal' | 'disableRestoreFocus' | 'onBackdropClick' | 'PaperComponent' | 'PaperProps' | 'TransitionComponent' | 'TransitionProps'
> & {
  children?: React.ReactNode;
  /** If `true` the Close icon button is shown. */
  closeButton?: boolean;
};

const CloseButton = (args: Omit<IconButtonProps, 'children' | 'title'>) => <IconButton title="Close Dialog" color="secondary" {...args}><CloseIcon fontSize="xsmall"/></IconButton>

export const CloseButtonSlot = styled(CloseButton, {
  name: 'MuiDialog',
  slot: 'AvCloseButton',
  overridesResolver: (props, styles) => styles.avCloseButton,
})({
  position: "absolute",
  top: '.5rem',
  right: '.5rem',
  "~ .MuiDialogTitle-root": {
    marginRight: '3.5rem'
  }
});

export const Dialog = ({ children, closeButton = true, onClose, ...rest }: DialogProps): React.JSX.Element => {
  return (
    <MuiDialog onClose={onClose} {...rest}>
      {closeButton ? <CloseButtonSlot onClick={onClose as IconButtonProps['onClick']}/> : null}
      {children}
    </MuiDialog>
  );
};
