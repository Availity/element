// For bundling purposes, always use the direct import for an mui component, i.e. '@mui/material/xxx'
import { forwardRef } from 'react';
import { styled, useThemeProps } from '@mui/material/styles';
import MuiListItem from '@mui/material/ListItem';
import { StatusChipProps } from '@availity/mui-chip';
import { ListItemProps } from '..';

export type ListItemStatusCardProps = {
  /** Color of status accent. Should match child `StatusChip`. */
  color?: StatusChipProps['color'];
} & Omit<ListItemProps, 'divider'>

const ListItemStatusCardSlot = styled(MuiListItem, {
  name: 'AvListItemStatusCard',
  slot: 'root',
  overridesResolver: (props, styles) => [styles.root, props.color && styles.color],
})<{ ownerState: ListItemStatusCardProps }>(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '4px',
  marginBottom: '4px',
  paddingLeft: '8px',
  '&.MuiListItem-padding.MuiListItem-gutters': {
    paddingLeft: 'calc(16px + 8px)',
  },
  ...ownerState.color && ownerState.color !== 'default' && {
    '.AvListItemStatusCard-statusAccent': {
      backgroundColor: `${theme.palette[ownerState.color].main}`
    }
  },
}));

const StatusAccent = styled('div', {
  name: 'AvListItemStatusCard',
  slot: 'statusAccent',
  overridesResolver: (props, styles) => [styles.statusAccent, props.color && styles.color],
})(({theme}) => ({
  position: 'absolute',
  left: 0,
  top: 0,
  height: '100%',
  width: '8px',
  backgroundColor: theme.palette.divider,
  backgroundClip: 'border-box',
  borderTopLeftRadius: '3px',
  borderBottomLeftRadius: '3px',
  content: "''",
}));

/** A list item with card styling and status accent. Should always be used with corresponding child `StatusChip` to explain status without relying on color for accessibility.
 *
 * Renders as an `<li>` by default. */
export const ListItemStatusCard = forwardRef<HTMLLIElement, ListItemStatusCardProps>((props, ref) => {
  const { alignItems = "flex-start", children, color, ...rest } = props;
  const themeProps = useThemeProps({ props: props, name: 'AvListItemStatusCard' });
  const ownerState = { ...themeProps, color };
  return (
    <ListItemStatusCardSlot alignItems={alignItems} divider={false} ownerState={ownerState} {...rest} ref={ref}>
      <StatusAccent className="AvListItemStatusCard-statusAccent"/>
      {children}
    </ListItemStatusCardSlot>
  );
});

