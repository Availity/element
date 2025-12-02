import type { Meta, StoryObj } from '@storybook/react-vite';

import { DialogContent, DialogContentProps } from './DialogContent';

const meta: Meta<typeof DialogContent> = {
  title: 'Components/Dialog/DialogContent',
  component: DialogContent,
  tags: ['autodocs'],
};

export default meta;

export const _DialogContent: StoryObj<typeof DialogContent> = {
  render: (args: DialogContentProps) => <DialogContent {...args} />,
  args: {
    children: 'Modal Content Body',
  },
};
