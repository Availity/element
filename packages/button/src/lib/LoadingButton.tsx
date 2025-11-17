import { forwardRef } from 'react';
import MUIButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { ButtonProps } from './Button';

export type LoadingButtonProps = ButtonProps & Pick<MuiButtonProps, 'loading'>

const LoadingIndicator = <CircularProgress color="inherit" size={16} aria-label="loading" />;

export const LoadingButton = forwardRef<HTMLButtonElement, LoadingButtonProps>((props, ref) => {
  const { children, loading = false, ...rest } = props;
  //changing default loading button behavior to add end loading icon instead of replacing contents completely with icon
  const loadingPosition = rest.startIcon ? 'start' : 'end';
  const nonLoadingStyling = rest.startIcon || rest.endIcon || loading ? {} : { padding: '0 .7rem' };
  const endIcon = rest.startIcon ? undefined : <span style={loading ? { padding: '0 .7rem' } : {}}></span>;

  return (
    <MUIButton
      endIcon={endIcon}
      loadingPosition={loadingPosition}
      loading={loading}
      disableRipple
      loadingIndicator={LoadingIndicator}
      {...rest}
      ref={ref}
    >
      <span style={nonLoadingStyling}>{children}</span>
    </MUIButton>
  );
});
