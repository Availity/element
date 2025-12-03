// Each exported component in the package should have its own stories file

import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from '@availity/mui-typography';
import { Popover, PopoverProps } from './Popover';

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 100,
      },
    },
  },
};

export default meta;

export const _Popover: StoryObj<typeof Popover> = {
  render: (args: PopoverProps) => {
    return (
      <div>
        <Popover {...args} />
      </div>
    );
  },
  args: {
    children: <Typography children="This text is a child of Popover" sx={{ p: 1 }} />,
    open: true,
  },
};

export const _PopoverWithTarget: StoryObj<typeof Popover> = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
      <>
        <Typography
          aria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          children="Hover Me"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        />
        <Popover
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          children={<Typography children="This text is a child of Popover" sx={{ p: 1 }} />}
          disableRestoreFocus
          id="mouse-over-popover"
          onClose={handlePopoverClose}
          open={open}
          sx={{
            pointerEvents: 'none',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        />
      </>
    );
  },
};
