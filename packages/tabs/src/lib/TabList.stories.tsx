// Each exported component in the package should have its own stories file

import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { LinkIcon, UserIcon } from '@availity/mui-icon';
import { TabList, TabListProps } from './TabList';
import { Tab } from './Tab';
import { TabContext } from './TabContext';
import { TabPanel } from './TabPanel';

const meta: Meta<typeof TabList> = {
  title: 'Components/Tabs/TabList',
  component: TabList,
  argTypes: {
    level: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
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
        <TabPanel value="1" children={`Hello from Panel ${value}`} />
        <TabPanel value="2" children={`Hello from Panel ${value}`} />
        <TabPanel value="3" children={`Hello from Panel ${value}`} />
      </TabContext>
    );
  },
  args: {},
};

export const _WithIcons: StoryObj<typeof TabList> = {
  render: () => {
    const [value, setValue] = useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
    return (
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab value="1" icon={<LinkIcon/>} label="Links" />
          <Tab value="2" icon={<UserIcon/>} label="My Account" />
        </TabList>
        <TabPanel value="1" children={`Hello from Panel ${value}`} />
        <TabPanel value="2" children={`Hello from Panel ${value}`} />
      </TabContext>
    );
  },
};
