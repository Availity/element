import { forwardRef } from 'react';
import {
  default as MuiToggleButtonGroup,
  ToggleButtonGroupProps as MuiToggleButtonGroupProps,
} from '@mui/material/ToggleButtonGroup';

export interface ToggleButtonGroupProps extends Omit<MuiToggleButtonGroupProps, 'orientation'> {
  children?: React.ReactNode;
  /**
   * The size of the component. The prop defaults to the value inherited from the parent ToggleButtonGroup component.
   * @default 'small'
   */
  size?: 'small' | 'medium' | 'large';
}

export const ToggleButtonGroup = forwardRef(({ children, ...rest }: ToggleButtonGroupProps, ref): React.JSX.Element => {
  return (
    <MuiToggleButtonGroup {...rest} ref={ref} orientation="horizontal">
      {children}
    </MuiToggleButtonGroup>
  );
});
