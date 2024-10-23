import MuiGrid2, { Grid2Props as MuiGrid2Props } from '@mui/material/Grid2';

export interface GridProps extends Omit<MuiGrid2Props, 'item'> {
  children?: React.ReactNode;
}

export const Grid = (args: GridProps): JSX.Element => {
  return <MuiGrid2 {...args} />;
};
