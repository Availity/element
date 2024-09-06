import { TreeItem2, TreeItem2Props as MuiTreeItem2Props } from '@mui/x-tree-view/TreeItem2';
import { TriangleRightIcon, TriangleExpandIcon } from '@availity/mui-icon';

export type TreeItemProps = MuiTreeItem2Props;

export const TreeItem = ({ children, slots, slotProps, ...rest }: TreeItemProps): JSX.Element => {
  return (
    <TreeItem2
      {...rest}
      slots={{ ...slots, expandIcon: TriangleRightIcon, collapseIcon: TriangleExpandIcon }}
      slotProps={{ ...slotProps, expandIcon: { fontSize: 'Xsmall' }, collapseIcon: { fontSize: 'Xsmall' } }}
    >
      {children}
    </TreeItem2>
  );
};
