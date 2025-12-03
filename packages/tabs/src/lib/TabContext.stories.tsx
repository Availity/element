/* eslint-disable @typescript-eslint/no-empty-function */
// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react-vite';
import { TabContext, TabContextProps } from './TabContext';
import { Divider } from '@availity/mui-divider';
import { TabList } from './TabList';
import { Tab } from './Tab';
import { TabPanel } from './TabPanel';

const meta: Meta<typeof TabContext> = {
  title: 'Components/Tabs/TabContext',
  component: TabContext,
  tags: ['autodocs'],
};

export default meta;

export const _TabContext: StoryObj<typeof TabContext> = {
  render: (args: TabContextProps) => {
    return (
      <TabContext {...args}>
        <TabList onChange={() => {}} aria-label="lab API tabs example">
          <Tab label="Item One" value="1" />
          <Tab label="Item Two" value="2" />
          <Tab label="Item Three" value="3" />
        </TabList>
        <Divider />
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    );
  },
  args: {
    value: '1',
  },
};
