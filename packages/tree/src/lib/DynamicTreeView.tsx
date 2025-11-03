import { RichTreeView, RichTreeViewProps as MuiDynamicTreeViewProps } from '@mui/x-tree-view/RichTreeView';
import type { TreeViewBaseItem } from '@mui/x-tree-view/models';
import { TreeItem } from './TreeItem';

export type DynamicTreeViewProps = MuiDynamicTreeViewProps<TreeViewBaseItem, true>;

export const DynamicTreeView = ({ children, slots, ...rest }: DynamicTreeViewProps): React.JSX.Element => {
  return (
    <RichTreeView {...rest} slots={{ ...slots, item: TreeItem }}>
      {children}
    </RichTreeView>
  );
};
