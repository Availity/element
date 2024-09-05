import { RichTreeView, RichTreeViewProps as DynamicTreeViewProps } from '@mui/x-tree-view/RichTreeView';
import type { TreeViewBaseItem } from '@mui/x-tree-view/models';
import { TreeItem } from './TreeItem';

export const DynamicTreeView = ({
  children,
  slots,
  ...rest
}: DynamicTreeViewProps<TreeViewBaseItem, true>): JSX.Element => {
  return (
    <RichTreeView {...rest} slots={{ ...slots, item: TreeItem }}>
      {children}
    </RichTreeView>
  );
};
