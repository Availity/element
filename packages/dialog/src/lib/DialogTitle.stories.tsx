import type { Meta, StoryObj } from '@storybook/react';

import { DialogTitle, DialogTitleProps } from './DialogTitle';

const meta: Meta<typeof DialogTitle> = {
  title: 'Components/Dialog/DialogTitle',
  component: DialogTitle,
  tags: ['autodocs'],
};

export default meta;

export const _DialogTitle: StoryObj<typeof DialogTitle> = {
  render: (args: DialogTitleProps) => <DialogTitle {...args} />,
  args: {
    children: 'Modal Title',
  },
};
