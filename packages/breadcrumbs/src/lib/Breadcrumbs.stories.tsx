// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs';
import { Link } from '@mui/material';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
};

export default meta;

export const _Breadcrumbs: StoryObj<typeof Breadcrumbs> = {
  render: (args: BreadcrumbsProps) => <Breadcrumbs {...args} />,
  args: {
    active: 'Current Page',
    crumbs: [
      { name: 'Home', url: '#' },
      { name: 'Previous Page', url: '#' },
    ],
  },
};

export const _BreadcrumbsChildren: StoryObj<typeof Breadcrumbs> = {
  render: (args: BreadcrumbsProps) => (
    <Breadcrumbs {...args}>
      <Link>Home</Link>
      <Link>Previous Page</Link>
    </Breadcrumbs>
  ),
  args: {
    active: 'Current Page',
  },
};
