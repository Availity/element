// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { TreeItem, TreeItemProps } from './TreeItem';
import { TreeView } from './TreeView';
import { FolderIcon } from '@availity/mui-icon';
import { Grid } from '@availity/mui-layout';

const meta: Meta<typeof TreeItem> = {
  title: 'Components/TreeView/TreeItem',
  component: TreeItem,
  tags: ['autodocs'],
};

export default meta;

export const _Tree: StoryObj<typeof TreeItem> = {
  render: (args: TreeItemProps) => (
    <TreeView>
      <TreeItem {...args} />
    </TreeView>
  ),
  args: {
    truncate: true,
    itemId: 'Tree Item Label',
    label: 'Tree Item Label',
    children: <TreeItem itemId="This text is a child of TreeItem" label="This text is a child of TreeItem" />,
  },
};

export const _TreeCheckboxSelection: StoryObj<typeof TreeItem> = {
  render: (args: TreeItemProps) => (
    <TreeView checkboxSelection>
      <TreeItem {...args} />
    </TreeView>
  ),
  args: {
    itemId: 'Tree Item Label',
    label: 'Tree Item Label',
    children: <TreeItem itemId="This text is a child of TreeItem" label="This text is a child of TreeItem" />,
  },
};

export const _TreeIcon: StoryObj<typeof TreeItem> = {
  render: (args: TreeItemProps) => (
    <TreeView checkboxSelection>
      <TreeItem {...args} />
    </TreeView>
  ),
  args: {
    itemId: 'tree-item',
    label: (
      <Grid container alignItems="center">
        <FolderIcon sx={{ marginRight: 1 }} />
        Tree Item
      </Grid>
    ),
    // slots: { icon: FolderIcon },
    children: <TreeItem itemId="sub-tree-item" label="Sub Tree Item" />,
  },
};
