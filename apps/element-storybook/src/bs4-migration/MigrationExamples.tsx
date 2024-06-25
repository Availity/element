import { useEffect, useRef, useState } from 'react';
import {
  Badge,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemStatusCard,
  ListItemText,
  MailIcon,
  Menu,
  MenuItem,
  MoreVerticalIcon,
  StatusChip,
  Tab,
  Tabs,
  ThemeProvider,
} from '@availity/element';

export const BadgeExample = () => (
  <ThemeProvider theme="legacyBS">
    <Badge color="primary" badgeContent={5} variant="dot">
      <MailIcon fontSize="large" />
    </Badge>
  </ThemeProvider>
);

export const ChipExample = () => (
  <ThemeProvider theme="legacyBS">
    <Chip label="New" />
  </ThemeProvider>
);

export const GridExample = () => (
  <Grid container spacing={0.5}>
    <Grid xs={8}>8</Grid>
    <Grid xs={4}>4</Grid>
    <Grid xs={4}>4</Grid>
    <Grid xs={8}>8</Grid>
  </Grid>
);

export const MenuExample = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme="legacyBS">
      <IconButton
        title="Actions"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVerticalIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Action 1</MenuItem>
        <MenuItem onClick={handleClose}>Action 2</MenuItem>
        <MenuItem onClick={handleClose}>Action 3</MenuItem>
      </Menu>
    </ThemeProvider>
  );
};

export const DialogExample = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme="legacyBS">
      <Button onClick={handleOpen}>Open Dialog</Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title">
        <DialogTitle id="alert-dialog-title" component="h1">
          Availity Dialog
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Dialog Text</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export const TabExample = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme="legacyBS">
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </ThemeProvider>
  );
};

export const ListItemExample = () => (
  <ThemeProvider theme="legacyBS">
    <List>
      <ListItem>
        ListItem
      </ListItem>
      <ListItemStatusCard>
        <ListItemText
          primary="ListItemStatusCard"
          secondary={<StatusChip color="success" label='Approved'/>}
        />
      </ListItemStatusCard>
    </List>
  </ThemeProvider>
);
