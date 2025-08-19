// Each exported component in the package should have its own stories file

import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Spaces } from '@availity/mui-spaces';
import { Tab, TabContext, TabList, TabPanel } from '@availity/mui-tabs';
import { PageHeader, PageHeaderProps } from './PageHeader';

const meta: Meta<typeof PageHeader> = {
  title: 'Components/PageHeader/PageHeader',
  component: PageHeader,
  tags: ['autodocs'],
};

export default meta;

export const _PageHeader: StoryObj<typeof PageHeader> = {
  render: (args: PageHeaderProps) => <PageHeader {...args} />,
  args: {
    headerText: 'This text is a child of PageHeader',
    breadcrumbs: { active: 'This Page' },
  },
};

export const _PageHeaderHelp: StoryObj<typeof PageHeader> = {
  render: (args: PageHeaderProps) => <PageHeader {...args} />,
  args: {
    headerText: 'This text is a child of PageHeader',
    breadcrumbs: { active: 'This Page' },
    help: { helpAppName: undefined, url: 'https://www.availity.com' },
  },
};

/** `helpAppName` should be used when the help link leads to a demo video. */
export const _PageHeaderHelpDemo: StoryObj<typeof PageHeader> = {
  render: (args: PageHeaderProps) => <PageHeader {...args} />,
  args: {
    headerText: 'This text is a child of PageHeader',
    breadcrumbs: { active: 'This Page' },
    help: { helpAppName: 'This App', url: 'https://www.availity.com' },
  },
};

export const _PageHeaderSingleButton: StoryObj<typeof PageHeader> = {
  render: (args: PageHeaderProps) => <PageHeader {...args} />,
  args: {
    headerText: 'This text is a child of PageHeader',
    breadcrumbs: { active: 'This Page' },
    buttons: [{ children: 'Button 1', key: 'button1' }],
  },
};

export const _PageHeaderDoubleButtons: StoryObj<typeof PageHeader> = {
  render: (args: PageHeaderProps) => <PageHeader {...args} />,
  args: {
    headerText: 'This text is a child of PageHeader',
    breadcrumbs: { active: 'This Page' },
    buttons: [
      { children: 'Button 1', key: 'button1' },
      { children: 'Button 2', key: 'button2' },
    ],
  },
};

/** Divider can be replaced with primary style `<TabList>` */
export const _PageHeaderTabs: StoryObj<typeof PageHeader> = {
  render: (args: PageHeaderProps) => {
    const [value, setValue] = useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
    return (
      <TabContext value={value}>
        <PageHeader
          divider={
            <TabList {...args} onChange={handleChange} aria-label="pageheader tabs example">
              <Tab label="Tab One" value="1" />
              <Tab label="Tab Two" value="2" />
              <Tab label="Tab Three" value="3" />
            </TabList>
          }
          {...args}
        />
        <TabPanel value="1" children={`Hello from Panel ${value}`} />
        <TabPanel value="2" children={`Hello from Panel ${value}`} />
        <TabPanel value="3" children={`Hello from Panel ${value}`} />
      </TabContext>
    );
  },
  args: {
    headerText: 'This text is a child of PageHeader',
    breadcrumbs: { active: 'This Page' },
  },
};

const queryClient = new QueryClient();

export const _PageHeaderLogo: StoryObj<typeof PageHeader> = {
  render: (args: PageHeaderProps) => (
    <QueryClientProvider client={queryClient}>
      <Spaces spaceIds={['11', '22', '33']}>
        <PageHeader {...args} />
      </Spaces>
    </QueryClientProvider>
  ),
  args: {
    headerText: 'App Name',
    breadcrumbs: { active: 'This Page' },
    logo: {
      spaceId: '11',
    },
  },
};

export const _PageHeaderLogoAndHelp: StoryObj<typeof PageHeader> = {
  render: (args: PageHeaderProps) => (
    <QueryClientProvider client={queryClient}>
      <Spaces spaceIds={['11', '22', '33']}>
        <PageHeader {...args} />
      </Spaces>
    </QueryClientProvider>
  ),
  args: {
    headerText: 'App Name',
    breadcrumbs: { active: 'This Page' },
    help: { helpAppName: 'This App', url: 'https://www.availity.com' },
    logo: {
      spaceId: '11',
    },
  },
};
