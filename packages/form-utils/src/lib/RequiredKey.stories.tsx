// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react-vite';
import { RequiredKey } from './RequiredKey';

const meta: Meta<typeof RequiredKey> = {
  title: 'Form Components/FormUtils/RequiredKey',
  component: RequiredKey,
  tags: ['autodocs'],
};

export default meta;

export const _RequiredKey: StoryObj<typeof RequiredKey> = {
  render: () => <RequiredKey />,
};
