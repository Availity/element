import { default as MuiCardContent, CardContentProps as MuiCardContentProps } from '@mui/material/CardContent';

export interface CardContentProps extends MuiCardContentProps {
  children?: React.ReactNode;
}

export const CardContent = ({ children, ...rest }: CardContentProps): React.JSX.Element => {
  return <MuiCardContent {...rest}>{children}</MuiCardContent>;
};
