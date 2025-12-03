// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react-vite';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { SystemPropsList } from '../../../../data/MuiSystemProperties';
import { Stack, StackProps } from './Stack';
import { Paper } from '@availity/mui-paper';

/** The `Stack` component manages the layout of its immediate children along the vertical or horizontal axis, with optional spacing and dividers between each child.
 * `Stack` is ideal for one-dimensional layouts, while `Grid` is preferable when you need both vertical and horizontal arrangement.
 *
 * > As a CSS utility, the `Stack` component also supports all [system properties](https://mui.com/system/properties/). They are omitted for brevity, but can be used as props directly on the component.
 */
const meta: Meta<typeof Stack> = {
  title: 'Components/Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
  parameters: {
    docs: {
      controls: {
        exclude: SystemPropsList,
      },
    },
  },
  argTypes: {
    direction: {
      control: 'radio',
      options: ['row', 'column'],
    },
  },
};

export default meta;

export const _Stack: StoryObj<typeof Stack> = {
  render: (args: StackProps) => (
    <Stack {...args}>
      <Paper>Item 1</Paper>
      <Paper>Item 2</Paper>
      <Paper>Item 3</Paper>
    </Stack>
  ),
  args: {
    spacing: 2,
  },
};
