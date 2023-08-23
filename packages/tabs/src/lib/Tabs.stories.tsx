// Each exported component in the package should have its own stories file

import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box, Typography } from '@mui/material';
import { Tabs, TabsProps } from './Tabs';
import { Tab } from './Tab';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const _Tabs: StoryObj<typeof Tabs> = {
  render: (args: TabsProps) => {
    interface TabPanelProps {
      children?: React.ReactNode;
      index: number;
      value: number;
    }
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    function CustomTabPanel(props: TabPanelProps) {
      const { value, index, ...other } = props;

      return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box sx={{ p: 3 }}>
              <Typography>Hello from panel {index}</Typography>
            </Box>
          )}
        </div>
      );
    }
    return (
      <>
        <Tabs value={value} onChange={handleChange} {...args}>
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} disabled />
        </Tabs>
        <CustomTabPanel value={value} index={0} />
        <CustomTabPanel value={value} index={1} />
        <CustomTabPanel value={value} index={2} />
      </>
    );
  },
};
