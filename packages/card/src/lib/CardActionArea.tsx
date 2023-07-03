import { CardActionArea as MuiCardActionArea, CardActionAreaProps as MuiCardActionAreaProps } from '@mui/material';

export interface CardActionAreaProps
  extends Omit<
    MuiCardActionAreaProps,
    'centerRipple' | 'disableRipple' | 'disableTouchRipple' | 'focusRipple' | 'TouchRippleProps' | 'touchRippleRef'
  > {
  children?: React.ReactNode;
}

export const CardActionArea = ({ children, ...rest }: CardActionAreaProps): JSX.Element => {
  return (
    <MuiCardActionArea {...rest} disableRipple>
      {children}
    </MuiCardActionArea>
  );
};
