// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs';
import { Link } from '@availity/mui-link';

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
    crumbs: [{ name: 'Previous Page', url: '#' }],
  },
};

export const _BreadcrumbsChildren: StoryObj<typeof Breadcrumbs> = {
  render: (args: BreadcrumbsProps) => (
    <Breadcrumbs {...args}>
      <Link href="">Previous Page</Link>
    </Breadcrumbs>
  ),
  args: {
    active: 'Current Page',
  },
};
