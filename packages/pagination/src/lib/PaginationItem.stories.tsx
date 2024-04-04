// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import Grid from '@mui/material/Grid';
import { PaginationItem, PaginationItemProps } from './PaginationItem';

const meta: Meta<typeof PaginationItem> = {
  title: 'Components/Pagination/PaginationItem',
  component: PaginationItem,
  tags: ['autodocs'],
  args: {
    type: 'next',
  },
};

export default meta;

export const _PaginationItem: StoryObj<typeof PaginationItem> = {
  render: (args: PaginationItemProps) => <PaginationItem {...args} />,
};

export const _Types: StoryObj<typeof PaginationItem> = {
  render: () => (
    <Grid container spacing={1}>
      <Grid item xs={3}>
        Text
      </Grid>
      <Grid item xs={9}>
        Outlined
      </Grid>
      <Grid item xs={3}>
        <PaginationItem variant="text" type="page" page="1" selected />
      </Grid>
      <Grid item xs={9}>
        <PaginationItem variant="outlined" type="page" page="1" selected />
      </Grid>
      <Grid item xs={3}>
        <PaginationItem variant="text" type="page" page="1" />
      </Grid>
      <Grid item xs={9}>
        <PaginationItem variant="outlined" type="page" page="1" />
      </Grid>
      <Grid item xs={3}>
        <PaginationItem variant="text" type="first" />
      </Grid>
      <Grid item xs={9}>
        <PaginationItem variant="outlined" type="first" />
      </Grid>
      <Grid item xs={3}>
        <PaginationItem variant="text" type="previous" />
      </Grid>
      <Grid item xs={9}>
        <PaginationItem variant="outlined" type="previous" />
      </Grid>
      <Grid item xs={3}>
        <PaginationItem variant="text" type="next" />
      </Grid>
      <Grid item xs={9}>
        <PaginationItem variant="outlined" type="next" />
      </Grid>
      <Grid item xs={3}>
        <PaginationItem variant="text" type="last" />
      </Grid>
      <Grid item xs={9}>
        <PaginationItem variant="outlined" type="last" />
      </Grid>
    </Grid>
  ),
};
