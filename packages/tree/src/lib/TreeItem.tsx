import { TreeItem as MuiTreeItem, TreeItemProps as MuiTreeItemProps } from '@mui/x-tree-view/TreeItem';
import { TriangleRightIcon, TriangleExpandIcon } from '@availity/mui-icon';

export interface TreeItemProps extends MuiTreeItemProps {
  truncate?: boolean;
}

export const TreeItem = ({ children, label, slots, slotProps, truncate, ...rest }: TreeItemProps): React.JSX.Element => {
  return (
    <MuiTreeItem
      {...rest}
      label={label}
      slots={{
        ...slots,
        expandIcon: TriangleRightIcon,
        collapseIcon: TriangleExpandIcon,
      }}
      slotProps={{
        ...slotProps,
        expandIcon: { fontSize: 'Xsmall' },
        collapseIcon: { fontSize: 'Xsmall' },
        label: {
          style: truncate ? { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } : {},
        },
        checkbox: {
          // @ts-expect-error SlotProps.checkbox types are incorrect
          inputProps: {
            'aria-hidden': true,
          },
        },
      }}
    >
      {children}
    </MuiTreeItem>
  );
};
