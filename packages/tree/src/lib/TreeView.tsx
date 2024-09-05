import { SimpleTreeView, SimpleTreeViewProps } from '@mui/x-tree-view/SimpleTreeView';

export const TreeView = ({ children, ...rest }: SimpleTreeViewProps<true>): JSX.Element => {
  return <SimpleTreeView {...rest}>{children}</SimpleTreeView>;
};
