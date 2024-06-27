// For bundling purposes, always use the direct import for an mui component, i.e. '@mui/material/xxx'
import { forwardRef } from 'react';
import { styled, useThemeProps } from '@mui/material/styles';
import MuiListItem from '@mui/material/ListItem';
import { StatusChipProps } from '@availity/mui-chip';
import { ListItemProps } from '..';

export type ListItemStatusCardProps = {
  /** Overrides color of status accent. By default will match color of child `StatusChip`. */
  color?: StatusChipProps['color'];
} & Omit<ListItemProps, 'divider'>

const ListItemStatusCardSlot = styled(MuiListItem, {
  name: 'AvListItemStatusCard',
  slot: 'root',
  overridesResolver: (props, styles) => [styles.root, props.color && styles.color],
})<{ ownerState: ListItemStatusCardProps }>(({ theme, ownerState }) => ({
  ...ownerState.color && ownerState.color !== 'default' && {
    borderLeftColor: `${theme.palette[ownerState.color].main} !important`
  },
}));

/** A list item with card styling and status accent. Needs child `StatusChip` for proper accent color. Renders as an `<li>` by default. */
export const ListItemStatusCard = forwardRef<HTMLLIElement, ListItemStatusCardProps>((props, ref) => {
  const { alignItems = "flex-start", color, ...rest } = props;
  const themeProps = useThemeProps({ props: props, name: 'AvListItemStatusCard' });
  const ownerState = { ...themeProps, color };
  return <ListItemStatusCardSlot alignItems={alignItems} divider={false} ownerState={ownerState} {...rest} ref={ref}/>;
});

