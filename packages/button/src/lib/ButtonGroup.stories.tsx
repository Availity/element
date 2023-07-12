import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from '@mui/material';
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@availity/mui-icon';
import { ButtonGroup, ButtonGroupProps } from './ButtonGroup';
import { Button } from './Button';
import React from 'react';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/Button/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  args: {
    color: 'secondary',
    size: 'medium',
    variant: 'contained',
    orientation: 'horizontal',
  },
};

export default meta;

export const _ButtonGroup: StoryObj<typeof ButtonGroup> = {
  render: (args: ButtonGroupProps) => (
    <ButtonGroup {...args} aria-label="Sample Button Group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  ),
};

/**
 * Availity approved button colors and variations
 */
export const _Colors: StoryObj<typeof ButtonGroup> = {
  render: () => (
    <Grid container spacing={1}>
      <Grid id="primary-color-label" item xs={3}>
        Primary
      </Grid>
      <Grid item xs={9}>
        <ButtonGroup aria-labelledby="primary-color-label" color="primary">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Grid>
      <Grid id="secondary-color-label" item xs={3}>
        Secondary
      </Grid>
      <Grid item xs={9}>
        <ButtonGroup aria-labelledby="secondary-color-label" color="secondary">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Grid>
      <Grid id="tertiary-color-label" item xs={3}>
        Tertiary
      </Grid>
      <Grid item xs={9}>
        <ButtonGroup aria-labelledby="tertiary-color-label" color="tertiary">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Grid>
      <Grid id="primary-outlined-color-label" item xs={3}>
        Primary Outlined
      </Grid>
      <Grid item xs={9}>
        <ButtonGroup aria-labelledby="primary-outlined-color-label" color="primary" variant="outlined">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Grid>
      <Grid id="secondary-outlined-color-label" item xs={3}>
        Secondary Outlined
      </Grid>
      <Grid item xs={9}>
        <ButtonGroup aria-labelledby="secondary-outlined-color-label" color="secondary" variant="outlined">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  ),
};

export const _Sizes: StoryObj<typeof ButtonGroup> = {
  render: () => (
    <Grid container spacing={1}>
      <Grid id="small-size-label" item xs={3}>
        Small
      </Grid>
      <Grid item xs={9}>
        <ButtonGroup aria-labelledby="small-size-label" size="small" color="secondary" variant="outlined">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Grid>
      <Grid id="medium-size-label" item xs={3}>
        Medium
      </Grid>
      <Grid item xs={9}>
        <ButtonGroup aria-labelledby="small-size-label" size="medium" color="secondary" variant="outlined">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Grid>
      <Grid id="large-size-label" item xs={3}>
        Large
      </Grid>
      <Grid item xs={9}>
        <ButtonGroup aria-labelledby="large-size-label" size="large" color="secondary" variant="outlined">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  ),
};

export const _WithIcons: StoryObj<typeof ButtonGroup> = {
  render: () => (
    <Grid container spacing={1}>
      <Grid id="small-size-icon-label" item xs={3}>
        Small
      </Grid>
      <Grid item xs={9}>
        <ButtonGroup aria-labelledby="small-size-icon-label" size="small" color="secondary" variant="outlined">
          <Button startIcon={<ArrowCircleLeftIcon />}>Previous</Button>
          <Button endIcon={<ArrowCircleRightIcon />}>Next</Button>
        </ButtonGroup>
      </Grid>
      <Grid id="medium-size-icon-label" item xs={3}>
        Medium
      </Grid>
      <Grid item xs={9}>
        <ButtonGroup aria-labelledby="small-size-icon-label" size="medium" color="secondary" variant="outlined">
          <Button startIcon={<ArrowCircleLeftIcon />}>Previous</Button>
          <Button endIcon={<ArrowCircleRightIcon />}>Next</Button>
        </ButtonGroup>
      </Grid>
      <Grid id="large-size-icon-label" item xs={3}>
        Large
      </Grid>
      <Grid item xs={9}>
        <ButtonGroup aria-labelledby="large-size-icon-label" size="large" color="secondary" variant="outlined">
          <Button startIcon={<ArrowCircleLeftIcon />}>Previous</Button>
          <Button endIcon={<ArrowCircleRightIcon />}>Next</Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  ),
};
