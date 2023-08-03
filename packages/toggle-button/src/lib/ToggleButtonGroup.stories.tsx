// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { ToggleButtonGroup, ToggleButtonGroupProps } from './ToggleButtonGroup';

const meta: Meta<typeof ToggleButtonGroup> = {
  title: 'Components/ToggleButton/ToggleButtonGroup',
  component: ToggleButtonGroup,
  tags: ['autodocs'],
};

export default meta;

export const _ToggleButtonGroup: StoryObj<typeof ToggleButtonGroup> = {
  render: (args: ToggleButtonGroupProps) => <ToggleButtonGroup {...args} />,
  args: {
    value: 'test',
    children: 'This text is a child of ToggleButton',
  },
};
