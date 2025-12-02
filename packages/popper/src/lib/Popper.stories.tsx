// Each exported component in the package should have its own stories file

import { useState } from 'react';
import { Box } from '@availity/mui-layout';
import { Button } from '@availity/mui-button';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Popper } from './Popper';

const meta: Meta<typeof Popper> = {
  title: 'Components/Popper/Popper',
  component: Popper,
  tags: ['autodocs'],
};

export default meta;

export const _Popper: StoryObj<typeof Popper> = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
      <div>
        <Button aria-describedby={id} type="button" onClick={handleClick}>
          Toggle Popper
        </Button>
        <Popper id={id} open={open} anchorEl={anchorEl}>
          <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>The content of the Popper.</Box>
        </Popper>
      </div>
    );
  },
  args: {
    children: 'This text is a child of Popper',
  },
};
