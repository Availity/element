import { Card as MuiCard, CardProps as MuiCardProps } from '@mui/material';

export interface CardProps extends Omit<MuiCardProps, 'elevation' | 'variant' | 'raised' | 'square'> {
  children?: React.ReactNode;
}

export const Card = ({ children, ...rest }: CardProps): JSX.Element => {
  return (
    <MuiCard {...rest} variant="elevation" elevation={1}>
      {children}
    </MuiCard>
  );
};
