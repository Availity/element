import { StoryObj, Meta } from '@storybook/react';
import Grid from '@mui/material/Grid';
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
    variant: 'contained',
    color: 'primary',
    size: 'medium',
  },
};

/**
 * Availity approved button colors and variations
 */
export const _Colors: Story = {
  render: () => (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Button color="primary">Primary</Button>
      </Grid>
      <Grid item xs={12}>
        <Button color="secondary">Secondary</Button>
      </Grid>
      <Grid item xs={12}>
        <Button color="tertiary">Tertiary</Button>
      </Grid>
      <Grid item xs={12}>
        <Button color="error">Error</Button>
      </Grid>
      <Grid item xs={12}>
        <Button color="primary" variant="outlined">
          Primary Outlined
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button color="secondary" variant="outlined">
          Secondary Outlined
        </Button>
      </Grid>
    </Grid>
  ),
};

export const _ButtonSizes: Story = {
  render: () => (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Button color="tertiary" size="small">
          Small Button
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button color="secondary" size="medium">
          Medium Button
        </Button>
      </Grid>
      <Grid item xs={12}>
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
      <Grid item xs={3}>
        <Button color="primary" size="large" startIcon={<ArrowCircleLeftIcon />}>
          Large
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button color="primary" size="medium" startIcon={<ArrowCircleLeftIcon />}>
          Medium
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button color="primary" size="small" startIcon={<ArrowCircleLeftIcon />}>
          Small
        </Button>
      </Grid>
      <Grid item xs={3} />
      <Grid item xs={3}>
        <Button color="primary" size="large" endIcon={<ArrowCircleRightIcon />}>
          Large
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button color="primary" size="medium" endIcon={<ArrowCircleRightIcon />}>
          Medium
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button color="primary" size="small" endIcon={<ArrowCircleRightIcon />}>
          Small
        </Button>
      </Grid>
      <Grid item xs={3} />
    </Grid>
  ),
};
