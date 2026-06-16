import { default as MuiTabContext, TabContextProps as MuiTabContextProps } from '@mui/lab/TabContext';

export interface TabContextProps extends MuiTabContextProps {
  children?: React.ReactNode;
}

export const TabContext = ({ children, ...rest }: TabContextProps): React.JSX.Element => <MuiTabContext {...rest}>{children}</MuiTabContext>;
