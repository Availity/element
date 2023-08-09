import { ToggleButton as MuiToggleButton, ToggleButtonProps as MuiToggleButtonProps } from '@mui/material';

export interface ToggleButtonProps
  extends Omit<MuiToggleButtonProps, 'color' | 'disableFocusRipple' | 'disableRipple'> {
  children?: React.ReactNode;
  /**
   * The size of the component. The prop defaults to the value inherited from the parent ToggleButtonGroup component.
   * @default 'small'
   */
  size?: 'small' | 'medium' | 'large';
}

export const ToggleButton = ({ children, ...rest }: ToggleButtonProps): JSX.Element => {
  return (
    <MuiToggleButton {...rest} disableFocusRipple disableRipple>
      {children}
    </MuiToggleButton>
  );
};
