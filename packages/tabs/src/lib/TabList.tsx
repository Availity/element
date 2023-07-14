import { TabList as MuiTabList, TabListProps as MuiTabListProps } from '@mui/lab';

export interface TabListProps
  extends Omit<
    MuiTabListProps,
    | 'centered'
    | 'centerRipple'
    | 'disableRipple'
    | 'disableTouchRipple'
    | 'focusRipple'
    | 'orientation'
    | 'TouchRippleProps'
    | 'touchRippleRef'
  > {
  children?: React.ReactNode;
}

export const TabList = ({ children, ...rest }: TabListProps): JSX.Element => {
  return (
    <MuiTabList {...rest} disableRipple disableTouchRipple orientation="horizontal" centered={false}>
      {children}
    </MuiTabList>
  );
};
