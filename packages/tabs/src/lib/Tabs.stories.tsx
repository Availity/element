/* eslint-disable @typescript-eslint/no-empty-function */
// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { LinkIcon, UserIcon } from '@availity/mui-icon';
import { Tabs, TabsProps } from './Tabs';
import { Tab } from './Tab';
import { useState } from 'react';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs/Tabs',
  component: Tabs,
  argTypes: {
    level: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
  tags: ['autodocs'],
};

export default meta;

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
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
          <Typography>Hello from panel {index + 1}</Typography>
        </Box>
      )}
    </div>
  );
}

export const _Tabs: StoryObj<typeof Tabs> = {
  render: (args: TabsProps) => {
    return (
      <>
        <Tabs value={args.value} onChange={() => {}} {...args}>
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} disabled />
        </Tabs>
        <CustomTabPanel value={args.value} index={0} />
        <CustomTabPanel value={args.value} index={1} />
        <CustomTabPanel value={args.value} index={2} />
      </>
    );
  },
  args: {
    value: 0,
  },
};

export const _TabsScrollable: StoryObj<typeof Tabs> = {
  render: (args: TabsProps) => {
    return (
      <>
        <Tabs value={args.value} onChange={() => {}} {...args}>
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} disabled />
          <Tab label="Item Four" {...a11yProps(3)} disabled />
          <Tab label="Item Five" {...a11yProps(4)} disabled />
          <Tab label="Item Six" {...a11yProps(5)} disabled />
          <Tab label="Item Seven" {...a11yProps(6)} disabled />
          <Tab label="Item Eight" {...a11yProps(7)} disabled />
          <Tab label="Item Nine" {...a11yProps(8)} disabled />
          <Tab label="Item Ten" {...a11yProps(9)} disabled />
        </Tabs>
        <CustomTabPanel value={args.value} index={0} />
        <CustomTabPanel value={args.value} index={1} />
        <CustomTabPanel value={args.value} index={2} />
      </>
    );
  },
  args: {
    value: 0,
    variant: 'scrollable',
  },
};

/** There is a hierarchy for tab styling. Most tabs will have the primary level styling while nested tabs have the secondary level styling. */
export const _Levels: StoryObj<typeof Tabs> = {
  render: () => {
    return (
      <Box sx={{ p: 3, backgroundColor: 'background.paper' }}>
        <Tabs level="primary" value={0} onChange={() => {}}>
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} disabled />
        </Tabs>
          <div
            role="tabpanel"
            id={`simple-tabpanel-0`}
            aria-labelledby={`simple-tab-0`}
          >
            <Box sx={{ p: 3 }}>
              <Typography sx={{mb: 2}}>Hello from panel 1</Typography>
              <Tabs level="secondary" value={1} onChange={()=> {}} >
                <Tab label="Item Four" {...a11yProps(3)} />
                <Tab label="Item Five" {...a11yProps(4)} />
                <Tab label="Item Six" {...a11yProps(5)} disabled />
              </Tabs>
              <CustomTabPanel value={4} index={3} />
              <CustomTabPanel value={4} index={4} />
              <CustomTabPanel value={4} index={5} />
            </Box>
          </div>
          <CustomTabPanel value={0} index={1} />
          <CustomTabPanel value={0} index={2} />
      </Box>
    );
  },
};

export const _WithIcons: StoryObj<typeof Tabs> = {
  render: () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    return (
      <>
        <Tabs value={value} onChange={handleChange}>
          <Tab icon={<LinkIcon/>} label="Links" {...a11yProps(0)} />
          <Tab icon={<UserIcon/>} label="My Account" {...a11yProps(1)} />
        </Tabs>
        <CustomTabPanel value={value} index={0} />
        <CustomTabPanel value={value} index={1} />
      </>
    );
  },
};
