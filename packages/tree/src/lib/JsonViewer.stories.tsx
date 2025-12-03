import { Meta, StoryObj } from '@storybook/react-vite';

import { JsonViewer, JsonViewerProps } from './JsonViewer';
// import README from '../README.md';

const meta: Meta<typeof JsonViewer> = {
  title: 'Components/TreeView/JsonViewer',
  component: JsonViewer,
  tags: ['autodocs'],
};

export default meta;

export const _JsonViewer: StoryObj<typeof JsonViewer> = {
  render: ({ data, ...rest }: JsonViewerProps) => <JsonViewer data={data} {...rest} />,
  args: {
    data: { foo: { bar: { baz: ['stuff', 'things', 'etc.'] } } },
  },
};
