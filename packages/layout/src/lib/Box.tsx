import { ReactNode, forwardRef } from 'react';
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box';

export interface BoxProps extends MuiBoxProps {
  children?: ReactNode;
}

export const Box = forwardRef((props: BoxProps, ref): React.JSX.Element => {
  return <MuiBox {...props} ref={ref} />;
});
