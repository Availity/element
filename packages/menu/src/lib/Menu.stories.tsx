// Each exported component in the package should have its own stories file
import { useEffect, useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@availity/mui-button';
import { Menu, MenuItem } from './Menu';

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu/Menu',
  component: Menu,
  tags: ['autodocs'],
};

export default meta;

export const _Menu: StoryObj<typeof Menu> = {
  render: ({ open, ...args }) => {
    const anchorEl = useRef<HTMLButtonElement>(null);
    const [controlledOpen, setControlledOpen] = useState(false);

    useEffect(() => {
      setControlledOpen(open);
    }, [open]);

    const handleClick = () => {
      setControlledOpen((prev) => !prev);
    };

    const handleClose = () => {
      setControlledOpen(false);
    };

    return (
      <>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          ref={anchorEl}
        >
          Dashboard
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl.current}
          open={controlledOpen}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          {...args}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </>
    );
  },
};
