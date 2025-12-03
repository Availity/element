// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react-vite';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { SystemPropsList } from '../../../../data/MuiSystemProperties';
import { Box, BoxProps } from './Box';

/** The `Box` component serves as a wrapper component for most of the CSS utility needs.
 *
 * > As a CSS utility, the `Box` component also supports all [system properties](https://mui.com/system/properties/). They are omitted for brevity, but can be used as props directly on the component.
 */
const meta: Meta<typeof Box> = {
  title: 'Components/Layout/Box',
  component: Box,
  tags: ['autodocs'],
  parameters: {
    docs: {
      controls: {
        exclude: SystemPropsList,
      },
    },
  },
};

export default meta;

export const _Box: StoryObj<typeof Box> = {
  render: (args: BoxProps) => <Box {...args} />,
  args: {
    children: 'This text is a child of Box',
  },
};
