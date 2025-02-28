// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { TableRow, TableRowProps } from './TableRow';
import { TableBody, TableCell } from '..';
import { useState } from 'react';
import { IconButton } from '@availity/mui-button';
import { CollapseIcon, ExpandIcon } from '@availity/mui-icon';
import { Box, Grid } from '@availity/mui-layout';
import { Collapse } from '@availity/mui-transitions';
import { Typography } from '@availity/mui-typography';

const meta: Meta<typeof TableRow> = {
  title: 'Components/Table/TableRow',
  component: TableRow,
  tags: ['autodocs'],
  args: {
    children: 'This text is a child of TableRow',
  },
};

export default meta;

export const _TableRow: StoryObj<typeof TableRow> = {
  render: (args: TableRowProps) => (
    <TableBody>
      <TableRow {...args}>
        <TableCell>Cell 1</TableCell>
        <TableCell>Cell 2</TableCell>
        <TableCell>Cell 3</TableCell>
      </TableRow>
    </TableBody>
  ),
};

export const _CollapsibleRow: StoryObj<typeof TableRow> = {
  render: (args: TableRowProps) => {
    const [open, setOpen] = useState(false);

    return (
      <TableBody>
        <TableRow {...args}>
          <TableCell padding="checkbox">
            <IconButton title="expand row" size="medium" onClick={() => setOpen(!open)}>
              {open ? <ExpandIcon /> : <CollapseIcon />}
            </IconButton>
          </TableCell>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
          <TableCell>Cell 3</TableCell>
        </TableRow>
        <TableRow {...args}>
          <TableCell style={{ padding: 0, paddingLeft: '32px' }} colSpan={12}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ padding: 2 }}>
                <Grid container spacing={2} wrap="wrap">
                  <Grid size="grow">
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      Extra Data 1
                    </Typography>
                    <Typography variant="body2">Lorem Ipsum</Typography>
                  </Grid>
                  <Grid size="grow">
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      Extra Data 2
                    </Typography>
                    <Typography variant="body2">Lorem Ipsum</Typography>
                  </Grid>
                  <Grid size="grow">
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      Extra Data 3
                    </Typography>
                    <Typography variant="body2">Lorem Ipsum</Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2} wrap="wrap">
                  <Grid size="grow">
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      Extra Data 4
                    </Typography>
                    <Typography variant="body2">Lorem Ipsum</Typography>
                  </Grid>
                  <Grid size="grow">
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      Extra Data 5
                    </Typography>
                    <Typography variant="body2">Lorem Ipsum</Typography>
                  </Grid>
                  <Grid size="grow">
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      Extra Data 6
                    </Typography>
                    <Typography variant="body2">Lorem Ipsum</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </TableBody>
    );
  },
};
