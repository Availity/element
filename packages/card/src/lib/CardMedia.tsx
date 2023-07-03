import { CardMedia as MuiCardMedia, CardMediaProps as MuiCardMediaProps } from '@mui/material';

export interface CardMediaProps extends MuiCardMediaProps {
  children?: React.ReactNode;
}

export const CardMedia = ({ children, ...rest }: CardMediaProps): JSX.Element => {
  return <MuiCardMedia {...rest}>{children}</MuiCardMedia>;
};
