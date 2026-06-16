import { SimpleTreeView, SimpleTreeViewProps } from '@mui/x-tree-view/SimpleTreeView';

export type TreeViewProps = SimpleTreeViewProps<true>;

export const TreeView = ({ children, ...rest }: TreeViewProps): React.JSX.Element => <SimpleTreeView {...rest}>{children}</SimpleTreeView>;
