import {
  default as MuiCardActionArea,
  CardActionAreaProps as MuiCardActionAreaProps,
} from '@mui/material/CardActionArea';

export interface CardActionAreaProps
  extends Omit<
    MuiCardActionAreaProps,
    'centerRipple' | 'disableRipple' | 'disableTouchRipple' | 'focusRipple' | 'TouchRippleProps' | 'touchRippleRef'
  > {
  children?: React.ReactNode;
}

export const CardActionArea = ({ children, ...rest }: CardActionAreaProps): React.JSX.Element => {
  return (
    <MuiCardActionArea {...rest} disableRipple>
      {children}
    </MuiCardActionArea>
  );
};
