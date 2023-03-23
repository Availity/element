// Each exported component in the package should have its own stories file

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
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
  render: (args: Omit<FaSvgIconProps, "icon">) => <HomeIcon {...args}/>
};
