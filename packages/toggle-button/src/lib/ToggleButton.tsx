import { ToggleButton as MuiToggleButton, ToggleButtonProps as MuiToggleButtonProps } from '@mui/material';

export interface ToggleButtonProps extends Omit<MuiToggleButtonProps, 'disableFocusRipple' | 'disableRipple'> {
  children?: React.ReactNode;
}

export const ToggleButton = ({ children, size = 'small', ...rest }: ToggleButtonProps): JSX.Element => {
  return (
    <MuiToggleButton {...rest} size={size} disableFocusRipple disableRipple>
      {children}
    </MuiToggleButton>
  );
};
