import { default as MuiCardMedia, CardMediaProps as MuiCardMediaProps } from '@mui/material/CardMedia';

export interface CardMediaProps extends MuiCardMediaProps {
  children?: React.ReactNode;
}

export const CardMedia = ({ children, ...rest }: CardMediaProps): React.JSX.Element => {
  return <MuiCardMedia {...rest}>{children}</MuiCardMedia>;
};
