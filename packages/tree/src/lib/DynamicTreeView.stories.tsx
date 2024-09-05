// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { RichTreeViewProps } from '@mui/x-tree-view/RichTreeView';
import type { TreeViewBaseItem } from '@mui/x-tree-view/models';
import { DynamicTreeView } from './DynamicTreeView';

const meta: Meta<typeof DynamicTreeView> = {
  title: 'Components/TreeView/DynamicTreeView',
  component: DynamicTreeView,
  tags: ['autodocs'],
};

export default meta;

const items: TreeViewBaseItem[] = [
  {
    id: 'tree-1',
    label: 'Tree 1',
    children: [
      { id: 'sub-tree-1.1', label: 'Sub Tree 1.1' },
      { id: 'sub-tree-1.2', label: 'Sub Tree 1.2' },
      { id: 'sub-tree-1.3', label: 'Sub Tree 1.3' },
    ],
  },
  {
    id: 'tree-2',
    label: 'Tree 2',
    children: [
      { id: 'sub-tree-2.1', label: 'Sub Tree 2.1' },
      { id: 'sub-tree-2.2', label: 'Sub Tree 2.2' },
    ],
  },
  {
    id: 'tree-3',
    label: 'Tree 3',
    children: [{ id: 'sub-tree-3.1', label: 'Sub Tree 3.1' }],
  },
  {
    id: 'tree-4',
    label: 'Tree 4',
    children: [{ id: 'sub-tree-4.1', label: 'Sub Tree 4.1' }],
  },
];

export const _DynamicTreeView: StoryObj<typeof DynamicTreeView> = {
  render: (args: RichTreeViewProps<TreeViewBaseItem, true>) => <DynamicTreeView {...args} />,
  args: {
    items,
  },
};
export const _DynamicTreeViewCheckbox: StoryObj<typeof DynamicTreeView> = {
  render: (args: RichTreeViewProps<TreeViewBaseItem, true>) => <DynamicTreeView {...args} />,
  args: {
    items,
    checkboxSelection: true,
  },
};

export const _DynamicTreeViewEditable: StoryObj<typeof DynamicTreeView> = {
  render: (args: RichTreeViewProps<TreeViewBaseItem, true>) => <DynamicTreeView {...args} />,
  args: {
    items,
    isItemEditable: true,
    experimentalFeatures: { labelEditing: true },
  },
};
