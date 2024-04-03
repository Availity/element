import { default as MuiTabList, TabListProps as MuiTabListProps } from '@mui/lab/TabList';

export interface TabListProps
  extends Omit<
    MuiTabListProps,
    'centered' | 'centerRipple' | 'focusRipple' | 'orientation' | 'TouchRippleProps' | 'touchRippleRef'
  > {
  children?: React.ReactNode;
}

export const TabList = ({ children, ...rest }: TabListProps): JSX.Element => {
  return (
    <MuiTabList {...rest} orientation="horizontal" centered={false}>
      {children}
    </MuiTabList>
  );
};
