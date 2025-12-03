// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react-vite';
import { TabContext } from './TabContext';
import { Divider } from '@availity/mui-divider';
import { TabList } from './TabList';
import { Tab } from './Tab';
import { TabPanel, TabPanelProps } from './TabPanel';

const meta: Meta<typeof TabPanel> = {
  title: 'Components/Tabs/TabPanel',
  component: TabContext,
  tags: ['autodocs'],
};

export default meta;

export const _TabPanel: StoryObj<typeof TabPanel> = {
  render: (args: TabPanelProps) => {
    return (
      <TabContext value="1">
        <TabList aria-label="lab API tabs example">
          <Tab label="Item One" value="1" />
        </TabList>
        <Divider />
        <TabPanel {...args} value="1" />
      </TabContext>
    );
  },
  args: {
    children: 'Item One',
  },
};
