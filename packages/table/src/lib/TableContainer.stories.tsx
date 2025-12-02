// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react-vite';
import { TableContainer, TableContainerProps } from './TableContainer';

const meta: Meta<typeof TableContainer> = {
  title: 'Components/Table/TableContainer',
  component: TableContainer,
  tags: ['autodocs'],
  args: {},
};

export default meta;

export const _TableContainer: StoryObj<typeof TableContainer> = {
  render: (args: TableContainerProps) => <TableContainer {...args} />,
};
