import type { Meta, StoryObj } from '@storybook/react-vite';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { SystemPropsList } from '../../../../data/MuiSystemProperties';

import { DialogContentText, DialogContentTextProps } from './DialogContentText';

/** > As a CSS utility, the `DialogContextText` component also supports all [system properties](https://mui.com/system/properties/). They are omitted for brevity, but can be used as props directly on the component.
 */
const meta: Meta<typeof DialogContentText> = {
  title: 'Components/Dialog/DialogContentText',
  component: DialogContentText,
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

export const _DialogContentText: StoryObj<typeof DialogContentText> = {
  render: (args: DialogContentTextProps) => <DialogContentText {...args} />,
  args: {
    children: 'Modal Content Body',
  },
};
