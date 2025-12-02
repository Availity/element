import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '@availity/mui-layout';
import { Button } from '@availity/mui-button';

import { DialogActions, DialogActionsProps } from './DialogActions';

const meta: Meta<typeof DialogActions> = {
  title: 'Components/Dialog/DialogActions',
  component: DialogActions,
  tags: ['autodocs'],
};

export default meta;

export const _DialogActions: StoryObj<typeof DialogActions> = {
  render: (args: DialogActionsProps) => (
    <Box sx={{ maxWidth: '250px' }}>
      <DialogActions {...args}>
        <Button>Action Button</Button>
      </DialogActions>
    </Box>
  ),
  args: {},
};
