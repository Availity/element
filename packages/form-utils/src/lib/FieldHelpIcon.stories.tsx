// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react-vite';
import { FieldHelpIcon, FieldHelpIconProps } from './FieldHelpIcon';

/** Help Wrapper for Oxygen Learning Docs on the Portal (This component will only work in the Availity Portal). */
const meta: Meta<typeof FieldHelpIcon> = {
  title: 'Form Components/FormUtils/FieldHelpIcon',
  component: FieldHelpIcon,
  tags: ['autodocs'],
};

export default meta;

export const _FieldHelpIcon: StoryObj<typeof FieldHelpIcon> = {
  render: (args: FieldHelpIconProps) => <FieldHelpIcon {...args} />,
};
