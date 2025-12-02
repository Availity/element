import type { Meta, StoryObj } from '@storybook/react-vite';
import { DialogTitle, DialogTitleProps } from './DialogTitle';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { SystemPropsList } from '../../../../data/MuiSystemProperties';

/** > As a CSS utility, the `DialogTitle` component also supports all [system properties](https://mui.com/system/properties/). They are omitted for brevity, but can be used as props directly on the component.
 */
const meta: Meta<typeof DialogTitle> = {
  title: 'Components/Dialog/DialogTitle',
  component: DialogTitle,
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

export const _DialogTitle: StoryObj<typeof DialogTitle> = {
  render: (args: DialogTitleProps) => <DialogTitle {...args} />,
  args: {
    children: 'Modal Title',
  },
};


export const _WithIcon: StoryObj<typeof DialogTitle> = {
  render: () => <DialogTitle icon="info">Info</DialogTitle>,
};
