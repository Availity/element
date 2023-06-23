import { CardHeader as MuiCardHeader, CardHeaderProps as MuiCardHeaderProps } from '@mui/material';

export interface CardHeaderProps extends MuiCardHeaderProps {
  children?: React.ReactNode;
}

export const CardHeader = ({ children, ...rest }: CardHeaderProps): JSX.Element => {
  return <MuiCardHeader {...rest}>{children}</MuiCardHeader>;
};
