// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
};

export default meta;

export const _Breadcrumbs: StoryObj<typeof Breadcrumbs> = {
  render: (args: BreadcrumbsProps) => <Breadcrumbs {...args} />,
  args: {
    children: 'This text is a child of Breadcrumbs',
  },
};
