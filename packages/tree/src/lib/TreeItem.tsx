import { TreeItem2, TreeItem2Props as MuiTreeItem2Props } from '@mui/x-tree-view/TreeItem2';
import { TriangleRightIcon, TriangleExpandIcon } from '@availity/mui-icon';

export interface TreeItemProps extends MuiTreeItem2Props {
  truncate?: boolean;
}

export const TreeItem = ({ children, label, slots, slotProps, truncate, ...rest }: TreeItemProps): JSX.Element => {
  return (
    <TreeItem2
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
          // @ts-expect-error TreeItem2SlotProps.checkbox types are incorrect
          inputProps: {
            'aria-label': `${label} Checkbox`,
          },
        },
      }}
    >
      {children}
    </TreeItem2>
  );
};
