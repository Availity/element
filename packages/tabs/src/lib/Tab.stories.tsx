// Each exported component in the package should have its own stories file

import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { Tab, TabProps } from './Tab';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs/Tab',
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

export const _Tab: StoryObj<typeof Tab> = {
  render: (args: TabProps) => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    return (
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Item One" {...args} {...a11yProps(0)} />
        <Tab label="Item Two" {...args} {...a11yProps(1)} />
        <Tab label="Item Three" {...args} {...a11yProps(2)} disabled />
      </Tabs>
    );
  },
  args: {},
};
