import { default as MuiCardActions, CardActionsProps as MuiCardActionsProps } from '@mui/material/CardActions';

export interface CardActionsProps extends MuiCardActionsProps {
  children?: React.ReactNode;
}

export const CardActions = ({ children, ...rest }: CardActionsProps): React.JSX.Element => {
  return <MuiCardActions {...rest}>{children}</MuiCardActions>;
};
