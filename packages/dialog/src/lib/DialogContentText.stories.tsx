import type { Meta, StoryObj } from '@storybook/react';

import { DialogContentText, DialogContentTextProps } from './DialogContentText';

const meta: Meta<typeof DialogContentText> = {
  title: 'Components/Dialog/DialogContentText',
  component: DialogContentText,
  tags: ['autodocs'],
};

export default meta;

export const _DialogContentText: StoryObj<typeof DialogContentText> = {
  render: (args: DialogContentTextProps) => <DialogContentText {...args} />,
  args: {
    children: 'Modal Content Body',
  },
};
