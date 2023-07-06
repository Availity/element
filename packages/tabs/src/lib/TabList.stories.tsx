// Each exported component in the package should have its own stories file

import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TabList, TabListProps } from './TabList';
import { Tab } from './Tab';
import { TabContext } from './TabContext';

const meta: Meta<typeof TabList> = {
  title: 'Components/Tabs/TabList',
  component: TabList,
  tags: ['autodocs'],
};

export default meta;

export const _TabList: StoryObj<typeof TabList> = {
  render: (args: TabListProps) => {
    const [value, setValue] = useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
    return (
      <TabContext value={value}>
        <TabList {...args} onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Item One" value="1" />
          <Tab label="Item Two" value="2" />
          <Tab label="Item Three" value="3" />
        </TabList>
      </TabContext>
    );
  },
  args: {},
};
