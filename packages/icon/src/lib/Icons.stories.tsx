// Each exported component in the package should have its own stories file

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from '@availity/mui-layout';
import { FaSvgIconProps } from './FaSvgIcon';
import { HomeIcon } from './Icons/Common';

const meta: Meta<typeof HomeIcon> = {
  title: 'Components/Icon/Named Icons',
  component: HomeIcon,
  tags: ['autodocs'],
};

export default meta;

/** Any named icon, like the `<HomeIcon />` below, extend mui's `SvgIcon` component and accept the same parameters.
 *
 * Icon is `aria-hidden` by default. If not accompanied with any on screen text then must pass `aria-hidden={false}`.
 */
export const _HomeIcon: StoryObj<typeof HomeIcon> = {
  render: (args: Omit<FaSvgIconProps, 'icon'>) => <HomeIcon {...args} />,
};

export const _Sizes: StoryObj<typeof HomeIcon> = {
  render: () => (
    <Grid container spacing={1}>
      <Grid xs={2}>Inherit (default)</Grid>
      <Grid xs={10}>
        <HomeIcon fontSize="inherit" />
      </Grid>
      <Grid xs={2}>XXSmall</Grid>
      <Grid xs={10}>
        <HomeIcon fontSize="xxsmall" />
      </Grid>
      <Grid xs={2}>XSmall</Grid>
      <Grid xs={10}>
        <HomeIcon fontSize="xsmall" />
      </Grid>
      <Grid xs={2}>Small</Grid>
      <Grid xs={10}>
        <HomeIcon fontSize="small" />
      </Grid>
      <Grid xs={2}>Medium</Grid>
      <Grid xs={10}>
        <HomeIcon fontSize="medium" />
      </Grid>
      <Grid xs={2}>Large</Grid>
      <Grid xs={10}>
        <HomeIcon fontSize="large" />
      </Grid>
      <Grid xs={2}>XLarge</Grid>
      <Grid xs={10}>
        <HomeIcon fontSize="xlarge" />
      </Grid>
    </Grid>
  ),
};
