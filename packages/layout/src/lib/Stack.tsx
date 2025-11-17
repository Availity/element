import MuiStack, { StackProps as MuiStackProps } from '@mui/material/Stack';

export interface StackProps extends MuiStackProps {
  children?: React.ReactNode;
}

export const Stack = ({ children, ...rest }: StackProps): React.JSX.Element => {
  return <MuiStack {...rest}>{children}</MuiStack>;
};
