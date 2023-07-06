import { CardContent as MuiCardContent, CardContentProps as MuiCardContentProps } from '@mui/material';

export interface CardContentProps extends MuiCardContentProps {
  children?: React.ReactNode;
}

export const CardContent = ({ children, ...rest }: CardContentProps): JSX.Element => {
  return <MuiCardContent {...rest}>{children}</MuiCardContent>;
};
