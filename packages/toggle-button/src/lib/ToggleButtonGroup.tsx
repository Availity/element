import {
  ToggleButtonGroup as MuiToggleButtonGroup,
  ToggleButtonGroupProps as MuiToggleButtonGroupProps,
} from '@mui/material';

export interface ToggleButtonGroupProps extends Omit<MuiToggleButtonGroupProps, 'orientation'> {
  children?: React.ReactNode;
  /**
   * The size of the component. The prop defaults to the value inherited from the parent ToggleButtonGroup component.
   * @default 'small'
   */
  size?: 'small' | 'medium' | 'large';
}

export const ToggleButtonGroup = ({ children, ...rest }: ToggleButtonGroupProps): JSX.Element => {
  return (
    <MuiToggleButtonGroup {...rest} orientation="horizontal">
      {children}
    </MuiToggleButtonGroup>
  );
};
