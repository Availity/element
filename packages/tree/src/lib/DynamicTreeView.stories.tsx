// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import type { TreeViewBaseItem } from '@mui/x-tree-view/models';
import { Typography } from '@availity/mui-typography';
import { DynamicTreeView, DynamicTreeViewProps } from './DynamicTreeView';

/**
 * The `DynamicTreeView` receives its items via an `items` prop, making it easier
 * to dynamically load them from an external source. Furthermore,
 * `DynamicTreeView` includes the ability to make the `TreeItem`'s editable.
 */

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
      { id: 'sub-tree-1.1', label: 'Sub Tree 1.1', children: [{ id: 'sub-tree-1.1.1', label: 'Sub Tree 1.1.1' }] },
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
  render: (args: DynamicTreeViewProps) => (
    <>
      <Typography variant="h1" children="Selectable Dynamic Tree" id="dynamic-tree" />
      <DynamicTreeView {...args} />
    </>
  ),
  args: {
    items,
    'aria-labelledby': 'dynamic-tree',
  },
};
export const _DynamicTreeViewCheckbox: StoryObj<typeof DynamicTreeView> = {
  render: (args: DynamicTreeViewProps) => (
    <>
      <Typography variant="h1" children="Selectable Dynamic Tree" id="dynamic-tree-selectable" />
      <DynamicTreeView {...args} />
    </>
  ),
  args: {
    items,
    checkboxSelection: true,
    'aria-labelledby': 'dynamic-tree-selectable',
  },
};

export const _DynamicTreeViewEditable: StoryObj<typeof DynamicTreeView> = {
  render: (args: DynamicTreeViewProps) => (
    <>
      <Typography variant="h1" children="Editable Dynamic Tree" id="dynamic-tree-editable" />
      <DynamicTreeView {...args} />
    </>
  ),
  args: {
    items,
    isItemEditable: true,
    'aria-labelledby': 'dynamic-tree-editable',
  },
};
