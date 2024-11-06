// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Spaces } from '@availity/mui-spaces';
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
