import { Tabs as MuiTabs, TabsProps as MuiTabsProps } from '@mui/material';

export interface TabsProps
  extends Omit<
    MuiTabsProps,
    'centered' | 'centerRipple' | 'focusRipple' | 'orientation' | 'TouchRippleProps' | 'touchRippleRef'
  > {
  children?: React.ReactNode;
}

export const Tabs = ({ children, ...rest }: TabsProps): JSX.Element => {
  return (
    <MuiTabs {...rest} orientation="horizontal" centered={false}>
      {children}
    </MuiTabs>
  );
};
