import MuiGrid, { GridProps as MuiGridProps } from '@mui/material/Grid';

export interface GridProps extends Omit<MuiGridProps, 'item'> {
  children?: React.ReactNode;
}

export const Grid = (args: GridProps): React.JSX.Element => {
  return <MuiGrid {...args} />;
};
