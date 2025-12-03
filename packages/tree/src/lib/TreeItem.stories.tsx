// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react-vite';
import { TreeItem, TreeItemProps } from './TreeItem';
import { TreeView } from './TreeView';
import { FolderIcon } from '@availity/mui-icon';
import { Grid } from '@availity/mui-layout';
import { Typography } from '@availity/mui-typography';

const meta: Meta<typeof TreeItem> = {
  title: 'Components/TreeView/TreeItem',
  component: TreeItem,
  tags: ['autodocs'],
};

export default meta;

export const _Tree: StoryObj<typeof TreeItem> = {
  render: (args: TreeItemProps) => (
    <>
      <Typography variant="h1" children="Tree Item" id="tree-item" />
      <TreeView>
        <TreeItem {...args} />
      </TreeView>
    </>
  ),
  args: {
    truncate: true,
    itemId: 'Tree Item Label',
    label: 'Tree Item Label',
    children: <TreeItem itemId="This text is a child of TreeItem" label="This text is a child of TreeItem" />,
    'aria-labelledby': 'tree-item',
  },
};

export const _TreeCheckboxSelection: StoryObj<typeof TreeItem> = {
  render: (args: TreeItemProps) => (
    <>
      <Typography variant="h1" children="Selectable Tree Item" id="tree-item-selectable" />
      <TreeView checkboxSelection>
        <TreeItem {...args} />
      </TreeView>
    </>
  ),
  args: {
    itemId: 'Tree Item Label',
    label: 'Tree Item Label',
    children: <TreeItem itemId="This text is a child of TreeItem" label="This text is a child of TreeItem" />,
    'aria-labelledby': 'tree-item-selectable',
  },
};

export const _TreeIcon: StoryObj<typeof TreeItem> = {
  render: (args: TreeItemProps) => (
    <>
      <Typography variant="h1" children="Tree Item with Icon" id="tree-item-icon" />
      <TreeView checkboxSelection>
        <TreeItem {...args} />
      </TreeView>
    </>
  ),
  args: {
    itemId: 'tree-item',
    label: (
      <Grid container sx={{ alignItems: 'center' }}>
        <FolderIcon sx={{ marginRight: 1 }} />
        Tree Item
      </Grid>
    ),
    children: <TreeItem itemId="sub-tree-item" label="Sub Tree Item" />,
    'aria-labelledby': 'tree-item-icon',
  },
};
