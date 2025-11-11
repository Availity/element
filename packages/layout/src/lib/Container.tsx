import MuiContainer, { ContainerProps as MuiContainerProps } from '@mui/material/Container';

export interface ContainerProps extends MuiContainerProps {
  children?: React.ReactNode;
}

export const Container = ({ children, ...rest }: ContainerProps): React.JSX.Element => {
  return <MuiContainer {...rest}>{children}</MuiContainer>;
};
