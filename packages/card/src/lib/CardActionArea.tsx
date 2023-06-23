import { CardActionArea as MuiCardActionArea, CardActionAreaProps as MuiCardActionAreaProps } from '@mui/material';

export interface CardActionAreaProps extends MuiCardActionAreaProps {
  children?: React.ReactNode;
}

export const CardActionArea = ({ children, ...rest }: CardActionAreaProps): JSX.Element => {
  return <MuiCardActionArea {...rest}>{children}</MuiCardActionArea>;
};
