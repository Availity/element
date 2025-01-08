// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { ControlledForm, ControlledFormProps } from './ControlledForm';

const meta: Meta<typeof ControlledForm> = {
  title: 'Components/ControlledForm/ControlledForm',
  component: ControlledForm,
  tags: ['autodocs'],
};

export default meta;

export const _ControlledForm: StoryObj<typeof ControlledForm> = {
  render: (args: ControlledFormProps) => <ControlledForm {...args} />,
  args: {
    children: 'This text is a child of ControlledForm',
  },
};
