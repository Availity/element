import { CardActions as MuiCardActions, CardActionsProps as MuiCardActionsProps } from '@mui/material';

export interface CardActionsProps extends MuiCardActionsProps {
  children?: React.ReactNode;
}

export const CardActions = ({ children, ...rest }: CardActionsProps): JSX.Element => {
  return <MuiCardActions {...rest}>{children}</MuiCardActions>;
};
