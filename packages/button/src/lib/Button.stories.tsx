import { StoryObj, Meta } from '@storybook/react';
import { Box, Grid } from '@availity/mui-layout';
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@availity/mui-icon';
import { Button, ButtonProps } from './Button';
import React from 'react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Button',
  component: Button,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Button>;

export const _Button: Story = {
  render: ({ ...args }: ButtonProps) => <Button {...args}>Button</Button>,
  args: {
    color: 'primary',
    size: 'large',
  },
};

/**
 * Availity approved button colors and variations
 */
export const _Colors: Story = {
  render: () => (
    <Grid container spacing={1}>
      <Grid size={{ xs: 12 }}>
        <Button color="primary">Primary</Button>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Button color="secondary">Secondary</Button>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Button color="tertiary">Tertiary</Button>
      </Grid>
    </Grid>
  ),
};

export const _ButtonSizes: Story = {
  render: () => (
    <Grid container spacing={1}>
      <Grid size={{ xs: 12 }}>
        <Button color="tertiary" size="small">
          Small Button
        </Button>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Button color="secondary" size="medium">
          Medium Button
        </Button>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Button color="primary" size="large">
          Large Button
        </Button>
      </Grid>
    </Grid>
  ),
};

export const _ButtonWithIcon: Story = {
  render: () => (
    <Grid container spacing={1}>
      <Grid size={{ xs: 3 }}>
        <Button color="primary" size="large" startIcon={<ArrowCircleLeftIcon />}>
          Large
        </Button>
      </Grid>
      <Grid size={{ xs: 3 }}>
        <Button color="primary" size="medium" startIcon={<ArrowCircleLeftIcon />}>
          Medium
        </Button>
      </Grid>
      <Grid size={{ xs: 3 }}>
        <Button color="primary" size="small" startIcon={<ArrowCircleLeftIcon />}>
          Small
        </Button>
      </Grid>
      <Grid size={{ xs: 3 }} />
      <Grid size={{ xs: 3 }}>
        <Button color="primary" size="large" endIcon={<ArrowCircleRightIcon />}>
          Large
        </Button>
      </Grid>
      <Grid size={{ xs: 3 }}>
        <Button color="primary" size="medium" endIcon={<ArrowCircleRightIcon />}>
          Medium
        </Button>
      </Grid>
      <Grid size={{ xs: 3 }}>
        <Button color="primary" size="small" endIcon={<ArrowCircleRightIcon />}>
          Small
        </Button>
      </Grid>
      <Grid size={{ xs: 3 }} />
    </Grid>
  ),
};

export const _DisconnectedButtonGroup: Story = {
  render: () => {
    const groupedButtonStyles = {
      mr: 1,
      mb: 1,
    };

    return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', mr: -1, mb: -1 }}>
        <Button color="tertiary" sx={groupedButtonStyles}>
          Button 1
        </Button>
        <Button color="tertiary" sx={groupedButtonStyles}>
          Button 2
        </Button>
        <Button color="tertiary" sx={groupedButtonStyles}>
          Button 3
        </Button>
        <Button color="tertiary" sx={groupedButtonStyles}>
          Button 4
        </Button>
      </Box>
    );
  },
};
