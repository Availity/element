// import { Card as MuiCard, CardProps as MuiCardProps } from '@mui/material';

// export interface DividerProps extends MuiCardProps {
//   children: React.ReactNode;
// }

// export const Divider = ({ children, ...rest }: DividerProps): JSX.Element => {
//   return <MuiCard {...rest}>{children}</MuiCard>;
// };

import { Divider as MuiDivider, DividerProps as MuiDividerProps } from '@mui/material';

export interface DividerProps extends MuiDividerProps {
  children: React.ReactNode;
}

export const Divider = ({ children, ...rest }: DividerProps): JSX.Element => {
  return <MuiDivider {...rest}>{children}</MuiDivider>;
};
