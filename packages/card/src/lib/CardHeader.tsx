import { CardHeader as MuiCardHeader, CardHeaderProps as MuiCardHeaderProps } from '@mui/material';

export interface CardHeaderProps extends Omit<MuiCardHeaderProps, 'avatar'> {
  children?: React.ReactNode;
}

export const CardHeader = ({ ...rest }: CardHeaderProps): JSX.Element => {
  return <MuiCardHeader {...rest} />;
};
