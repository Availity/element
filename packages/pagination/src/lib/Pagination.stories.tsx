// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from '@mui/material';
import { Pagination, PaginationProps } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  args: {
    count: 10,
  },
};

export default meta;

export const _Pagination: StoryObj<typeof Pagination> = {
  render: (args: PaginationProps) => <Pagination {...args} />,
};

export const _Variants: StoryObj<typeof Pagination> = {
  render: () => (
    <Grid container spacing={1}>
      <Grid item xs={2}>
        Text
      </Grid>
      <Grid item xs={10}>
        <Pagination variant="text" count={10} />
      </Grid>
      <Grid item xs={2}>
        Outlined
      </Grid>
      <Grid item xs={10}>
        <Pagination variant="outlined" count={10} />
      </Grid>
    </Grid>
  ),
};

export const _FirstLast: StoryObj<typeof Pagination> = {
  render: () => (
    <Grid container spacing={1}>
      <Grid item xs={2}>
        Text
      </Grid>
      <Grid item xs={10}>
        <Pagination
          variant="text"
          count={10}
          boundaryCount={0}
          hideNextButton
          hidePrevButton
          showFirstButton
          showLastButton
        />
      </Grid>
      <Grid item xs={2}>
        Outlined
      </Grid>
      <Grid item xs={10}>
        <Pagination
          variant="outlined"
          count={10}
          boundaryCount={0}
          hideNextButton
          hidePrevButton
          showFirstButton
          showLastButton
        />
      </Grid>
    </Grid>
  ),
};
