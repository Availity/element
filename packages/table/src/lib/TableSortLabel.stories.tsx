// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { TableSortLabel, TableSortLabelProps } from './TableSortLabel';
import { Grid } from '@availity/mui-layout';
import { useState } from 'react';

const meta: Meta<typeof TableSortLabel> = {
  title: 'Components/Table/TableSortLabel',
  component: TableSortLabel,
  tags: ['autodocs'],
  args: {
    children: 'TableSortLabel content',
  },
};

export default meta;

export const _TableSortLabel: StoryObj<typeof TableSortLabel> = {
  render: (args: TableSortLabelProps) => {
    type Order = 'asc' | 'desc' | undefined;
    const [order, setOrder] = useState<Order>();

    return (
      <TableSortLabel
        active={!!order}
        direction={order}
        onClick={() => setOrder(order === 'asc' ? 'desc' : 'asc')}
        {...args}
      />
    );
  },
};

export const _Variants: StoryObj<typeof TableSortLabel> = {
  render: () => (
    <Grid container spacing={1}>
      <Grid size={{ xs: 3 }}>Default</Grid>
      <Grid size={{ xs: 9 }}>
        <TableSortLabel>Column Header</TableSortLabel>
      </Grid>
      <Grid size={{ xs: 3 }}>Active Undefined</Grid>
      <Grid size={{ xs: 9 }}>
        <TableSortLabel active>Column Header</TableSortLabel>
      </Grid>
      <Grid size={{ xs: 3 }}>Active Ascending</Grid>
      <Grid size={{ xs: 9 }}>
        <TableSortLabel active direction="asc">
          Column Header
        </TableSortLabel>
      </Grid>
      <Grid size={{ xs: 3 }}>Active Descending</Grid>
      <Grid size={{ xs: 9 }}>
        <TableSortLabel active direction="desc">
          Column Header
        </TableSortLabel>
      </Grid>
    </Grid>
  ),
};
