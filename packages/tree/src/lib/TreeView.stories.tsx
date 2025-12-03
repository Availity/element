// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from '@availity/mui-typography';
import { TreeView, TreeViewProps } from './TreeView';
import { TreeItem } from './TreeItem';

/**
 * The `TreeView` component receives its items as JSX Children. This makes it
 * a good option for hardcoded items.
 */

const meta: Meta<typeof TreeView> = {
  title: 'Components/TreeView/TreeView',
  component: TreeView,
  tags: ['autodocs'],
};

export default meta;

const items = (
  <>
    <TreeItem itemId="tree-1" label="Tree 1">
      <TreeItem itemId="sub-tree-1.1" label="Sub Tree 1.1" />
      <TreeItem itemId="sub-tree-1.2" label="Sub Tree 1.2" />
      <TreeItem itemId="sub-tree-1.3" label="Sub Tree 1.3" />
    </TreeItem>
    <TreeItem itemId="tree-2" label="Tree 2">
      <TreeItem itemId="sub-tree-2.1" label="Sub Tree 2.1" />
      <TreeItem itemId="sub-tree-2.2" label="Sub Tree 2.2" />
    </TreeItem>
    <TreeItem itemId="tree-3" label="Tree 3">
      <TreeItem itemId="sub-tree-3.1" label="Sub Tree 3.1" />
    </TreeItem>
    <TreeItem itemId="tree-4" label="Tree 4">
      <TreeItem itemId="sub-tree-4.1" label="Sub Tree 4.1" />
    </TreeItem>
  </>
);

export const _TreeView: StoryObj<typeof TreeView> = {
  render: (args: TreeViewProps) => (
    <>
      <Typography variant="h1" children="Tree View" id="tree-view" />
      <TreeView {...args} />
    </>
  ),
  args: {
    children: items,
    'aria-labelledby': 'tree-view',
  },
};

export const _TreeViewCheckbox: StoryObj<typeof TreeView> = {
  render: (args: TreeViewProps) => (
    <>
      <Typography variant="h1" children="Selectable Tree View" id="tree-view-selectable" />
      <TreeView checkboxSelection {...args} />
    </>
  ),
  args: {
    children: items,
    'aria-labelledby': 'tree-view-selectable',
  },
};
