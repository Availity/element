// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { PageHeader, PageHeaderProps } from './PageHeader';

const meta: Meta<typeof PageHeader> = {
  title: 'Components/PageHeader/PageHeader',
  component: PageHeader,
  tags: ['autodocs'],
  argTypes: {
    helpAppName: {
      if: { global: 'theme', eq: 'legacyBS' },
    },
  },
  args: { helpAppName: 'This App' },
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
    helpLink: 'https://www.availity.com',
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
