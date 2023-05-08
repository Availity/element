import React from 'react';
import MUILoadingButton, { LoadingButtonProps as MuiLoadingButtonProps} from '@mui/lab/LoadingButton';

export type LoadingButtonProps = {
  children: React.ReactNode;
  /**
   * The color of the component.
   */
  color?: "primary" | "secondary" | "error";
} & Omit<MuiLoadingButtonProps, 'color' | 'centerRipple' | 'disableRipple' | 'disableTouchRipple' | 'focusRipple' | 'disableFocusRipple' | 'TouchRippleProps' | 'touchRippleRef'>;

export const LoadingButton = ({ children, loading, ...rest }: LoadingButtonProps): JSX.Element => {
  //changing default loading button behavior to add end loading icon instead of replacing contents completely with icon
  const loadingPosition = rest.startIcon ? 'start' : 'end';
  const nonLoadingStyling = (rest.startIcon || rest.endIcon || loading) ? {} : { padding: '0 .7rem' };
  const endIcon = rest.startIcon ? undefined : <span style={ loading ? {padding: '0 .7rem'} : {}}></span>;

  return (
  <MUILoadingButton endIcon={endIcon} loadingPosition={loadingPosition} loading={loading} disableRipple {...rest}>
    <span style={nonLoadingStyling} aria-hidden={!!loading}>
      {children}
    </span>
  </MUILoadingButton>
)};


