// Each exported component in the package should have its own stories file

import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Collapse, CollapseProps } from './Collapse';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { Alert } from '@availity/mui-alert';
import { visuallyHidden } from '@availity/mui-utils';

/** Expand from the start edge of the child element. */
const meta: Meta<typeof Collapse> = {
  title: 'Components/Transitions/Collapse',
  component: Collapse,
  tags: ['autodocs'],
};

export default meta;

export const _Collapse: StoryObj<typeof Collapse> = {
  render: (args: CollapseProps) => {
    const [visible, setVisible] = useState(true);

    const onClose = () => {
      setVisible(false);
      setTimeout(() => setVisible(true), 1000);
    };

    return (
      <Collapse in={visible} {...args}>
        <Alert onClose={onClose}>Dismissable Alert</Alert>
      </Collapse>
    );
  },
};

export const _Options: StoryObj<typeof Collapse> = {
  render: () => {
    const [checked, setChecked] = useState(true);

    const handleChange = () => {
      setChecked((prev) => !prev);
    };

    const background = <Paper sx={{ m: 1, width: 100, height: 100, bgcolor: 'grey.200' }} elevation={4} />;

    return (
      <Box>
        <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label="Show" />
        <Table role="presentation" sx={{ width: 250 }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <Box sx={visuallyHidden}>Orientation</Box>
              </TableCell>
              <TableCell>
                <Box sx={{ width: 120 }}>collapsedSize 0</Box>
              </TableCell>
              <TableCell>
                <Box sx={{ width: 120 }}>collapsedSize 40</Box>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ verticalAlign: 'top' }}>
              <TableCell>
                <Box sx={{ height: 120 }}>Vertical</Box>
              </TableCell>
              <TableCell>
                <Collapse in={checked}>{background}</Collapse>
              </TableCell>
              <TableCell>
                <Collapse in={checked} collapsedSize={40}>
                  {background}
                </Collapse>
              </TableCell>
            </TableRow>
            <TableRow sx={{ verticalAlign: 'top' }}>
              <TableCell>
                <Box sx={{ height: 120 }}>Horizontal</Box>
              </TableCell>
              <TableCell>
                <Collapse orientation="horizontal" in={checked}>
                  {background}
                </Collapse>
              </TableCell>
              <TableCell>
                <Collapse orientation="horizontal" in={checked} collapsedSize={40}>
                  {background}
                </Collapse>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    );
  },
};
