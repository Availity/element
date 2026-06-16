import { default as MuiCard, CardProps as MuiCardProps } from '@mui/material/Card';

export interface CardProps extends Omit<MuiCardProps, 'elevation' | 'raised' | 'square'> {
  children?: React.ReactNode;
}

export const Card = ({ children, ...rest }: CardProps): React.JSX.Element => <MuiCard {...rest}>{children}</MuiCard>;
