// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react-vite';
import { TableCell, TableCellProps } from './TableCell';

const meta: Meta<typeof TableCell> = {
  title: 'Components/Table/TableCell',
  component: TableCell,
  tags: ['autodocs'],
  args: {
    children: 'Cell content',
  },
  argTypes: {
    size: {
      options: ['small', 'medium'],
      control: { type: 'radio' },
    },
  }
};

export default meta;

export const _TableCell: StoryObj<typeof TableCell> = {
  render: (args: TableCellProps) => <TableCell {...args} />,
};
