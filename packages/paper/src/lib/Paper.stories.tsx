// Each exported component in the package should have its own stories file
import type { Meta, StoryObj } from '@storybook/react-vite';
import Box from '@mui/material/Box';

import { Paper, PaperProps } from './Paper';

const meta: Meta<typeof Paper> = {
  title: 'Components/Paper/Paper',
  component: Paper,
  tags: ['autodocs'],
};

export default meta;

export const _Paper: StoryObj<typeof Paper> = {
  render: ({ children, ...args }: PaperProps) => (
    <Paper {...args}>
      <Box sx={{ p: 5 }}>{children}</Box>
    </Paper>
  ),
  args: {
    children: 'This text is a child of Paper',
  },
};
