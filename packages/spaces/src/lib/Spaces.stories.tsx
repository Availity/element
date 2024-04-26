// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { Spaces, SpacesProps } from './Spaces';

const meta: Meta<typeof Spaces> = {
  title: 'Components/Spaces/Spaces',
  component: Spaces,
  tags: ['autodocs'],
};

export default meta;

export const _Spaces: StoryObj<typeof Spaces> = {
  render: (args: SpacesProps) => <Spaces {...args} />,
  args: {
    children: 'This text is a child of Spaces',
  },
};
