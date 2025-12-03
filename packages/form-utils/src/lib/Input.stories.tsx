// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input, InputProps } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Form Components/FormUtils/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    size: 'small',
  },
};

export default meta;

export const _Input: StoryObj<typeof Input> = {
  render: (args: InputProps) => <Input inputProps={{ 'aria-label': 'Example Input' }} {...args} />,
  args: {},
};
