import { default as MuiToggleButton, ToggleButtonProps as MuiToggleButtonProps } from '@mui/material/ToggleButton';

export interface ToggleButtonProps
  extends Omit<
    MuiToggleButtonProps,
    | 'centerRipple'
    | 'color'
    | 'disableFocusRipple'
    | 'disableRipple'
    | 'disableTouchRipple'
    | 'focusRipple'
    | 'TouchRippleProps'
    | 'touchRippleRef'
  > {
  children?: React.ReactNode;
  /**
   * The size of the component. The prop defaults to the value inherited from the parent ToggleButtonGroup component.
   * @default 'small'
   */
  size?: 'small' | 'medium' | 'large';
}

export const ToggleButton = ({ children, ...rest }: ToggleButtonProps): React.JSX.Element => {
  return (
    <MuiToggleButton
      {...rest}
      centerRipple={false}
      disableFocusRipple
      disableRipple
      disableTouchRipple
      focusRipple={false}
    >
      {children}
    </MuiToggleButton>
  );
};
