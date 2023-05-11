// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { Divider, DividerProps } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider/Divider',
  component: Divider,
  tags: ['autodocs'],
};

export default meta;

export const _Divider: StoryObj<typeof Divider> = {
  render: (args: DividerProps) => <Divider {...args} />,
  args: {
    children: 'Customizable Divider Text',
  },
};
