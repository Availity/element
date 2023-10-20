// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { Input, InputProps } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/FormUtils/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;

export const _Input: StoryObj<typeof Input> = {
  render: (args: InputProps) => <Input {...args} />,
  args: {},
};
