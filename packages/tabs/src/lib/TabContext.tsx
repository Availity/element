import { TabContext as MuiTabContext, TabContextProps as MuiTabContextProps } from '@mui/lab';

export interface TabContextProps extends MuiTabContextProps {
  children?: React.ReactNode;
}

export const TabContext = ({ children, ...rest }: TabContextProps): JSX.Element => {
  return <MuiTabContext {...rest}>{children}</MuiTabContext>;
};
