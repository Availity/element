// For bundling purposes, always use the direct import for an mui component, i.e. '@mui/material/xxx'
import MuiDrawer, { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer';
import { Backdrop } from '@availity/mui-backdrop';
import { Box, Grid } from '@availity/mui-layout';
import { Typography } from '@availity/mui-typography';
import { IconButton } from '@availity/mui-button';
import { CloseIcon } from '@availity/mui-icon';
import { styled } from '@mui/material/styles';

export interface DrawerProps extends Omit<MuiDrawerProps, 'slots' | 'elevation'> {
  children?: React.ReactNode;
  slots?: Omit<MuiDrawerProps['slots'], 'backdrop' | 'paper'>;
  actions?: React.ReactNode;
  header?: string;
  size?: 'small' | 'medium' | 'large';
  contentPadding?: boolean;
}

const StyledDrawerHeader = styled(Grid, {
  name: 'MuiDrawer',
  slot: 'AvDrawerHeader',
})();

const StyledDrawerHeaderText = styled(Typography, {
  name: 'MuiDrawer',
  slot: 'AvDrawerHeaderText',
})();

const StyledDrawerContent = styled(Box, {
  name: 'MuiDrawer',
  slot: 'AvDrawerContent',
})();

export const Drawer = ({
  anchor = 'right',
  actions,
  children,
  contentPadding,
  header,
  onClose,
  size = 'medium',
  ...rest
}: DrawerProps): React.JSX.Element => {
  const drawerHeader = (
    <StyledDrawerHeader container>
      {header && <StyledDrawerHeaderText variant="h5">{header}</StyledDrawerHeaderText>}
      <Grid flexShrink={0} paddingLeft={2} container alignItems="center" justifyContent="flex-end" flexWrap="nowrap">
        {actions && <Grid paddingRight={1}>{actions}</Grid>}
        {onClose && (
          <IconButton
            title="close drawer"
            aria-label="close drawer"
            onClick={() => onClose(!rest.open, 'backdropClick')}
          >
            <CloseIcon />
          </IconButton>
        )}
      </Grid>
    </StyledDrawerHeader>
  );
  const sizes = {
    small: { width: '326px', breakpoint: 350 },
    medium: { width: '400px', breakpoint: 424 },
    large: { width: '600px', breakpoint: 624 },
  };
  const { width, breakpoint } = sizes[size];

  return (
    <MuiDrawer
      {...rest}
      anchor={anchor}
      onClose={onClose}
      slots={{
        backdrop: Backdrop,
      }}
      slotProps={{
        paper: {
          sx:
            anchor === 'left' || anchor === 'right'
              ? {
                  width,
                  [`@media (max-width: ${breakpoint}px)`]: {
                    width: 'calc(100% - 24px)',
                  },
                }
              : undefined,
        },
        transition: {
          easing: { enter: 'cubic-bezier(0.4, 0, 1, 1)', exit: 'cubic-bezier(0.0, 0, 0.2, 1)' },
          timeout: { enter: 225, exit: 195 },
        },
      }}
    >
      {header || actions ? drawerHeader : null}
      <StyledDrawerContent padding={contentPadding ? '0px 24px' : 0}>{children}</StyledDrawerContent>
    </MuiDrawer>
  );
};
