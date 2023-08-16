// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { FieldHelpIcon, FieldHelpIconProps } from './FieldHelpIcon';

const meta: Meta<typeof FieldHelpIcon> = {
  title: 'Components/FieldHelpIcon/FieldHelpIcon',
  component: FieldHelpIcon,
  tags: ['autodocs'],
};

export default meta;

export const _FieldHelpIcon: StoryObj<typeof FieldHelpIcon> = {
  render: (args: FieldHelpIconProps) => <FieldHelpIcon {...args} />,
  args: {
    children: 'This text is a child of FieldHelpIcon',
  },
};
