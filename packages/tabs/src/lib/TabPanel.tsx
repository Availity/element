import { default as MuiTabPanel, TabPanelProps as MuiTabPanelProps } from '@mui/lab/TabPanel';

export interface TabPanelProps extends MuiTabPanelProps {
  children?: React.ReactNode;
}

export const TabPanel = ({ children, ...rest }: TabPanelProps): React.JSX.Element => {
  return <MuiTabPanel {...rest}>{children}</MuiTabPanel>;
};
