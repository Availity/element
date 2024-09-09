import { SimpleTreeView, SimpleTreeViewProps } from '@mui/x-tree-view/SimpleTreeView';

export type TreeViewProps = SimpleTreeViewProps<true>;

export const TreeView = ({ children, ...rest }: TreeViewProps): JSX.Element => {
  return <SimpleTreeView {...rest}>{children}</SimpleTreeView>;
};
