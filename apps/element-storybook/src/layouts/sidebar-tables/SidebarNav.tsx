import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubHeader from '@mui/material/ListSubheader';
import { Box, Divider } from '@availity/element';

type SidebarItemProps = {
  text: string;
  onClick: (tab: string) => void;
  selected: boolean;
  count?: number;
  icon?: string;
};

const SidebarItem = ({ text, count, icon, onClick, selected }: SidebarItemProps) => {
  return (
    <ListItem disablePadding secondaryAction={<>{count}</>}>
      <ListItemButton onClick={() => onClick(text.toLowerCase())} selected={selected} sx={{ borderRadius: '22px' }}>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

type SidebarNavProps = {
  activeTab?: string;
  onItemClick: (tab: string) => void;
};

/**
 * TODO:
 * selected color?
 * icons?
 */

export const SidebarNav = ({ activeTab, onItemClick }: SidebarNavProps) => {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRadius: '16px', padding: '8px' }}>
      <nav aria-label="sidebar links">
        <List sx={{ borderRadius: '16px' }}>
          <ListSubHeader sx={{ borderRadius: '16px' }}>Digital Correspondence</ListSubHeader>
          <SidebarItem text="Home" onClick={onItemClick} selected={'home' === activeTab} />
          <SidebarItem
            text="Authorizations"
            onClick={onItemClick}
            selected={'authorizations' === activeTab}
            count={50}
          />
          <SidebarItem text="Claims" onClick={onItemClick} selected={'claims' === activeTab} count={30} />
          <SidebarItem text="Appeals" onClick={onItemClick} selected={'appeals' === activeTab} count={10} />
          <SidebarItem text="Overpayment" onClick={onItemClick} selected={'overpayment' === activeTab} count={15} />
          <SidebarItem text="Gaps in Care" onClick={onItemClick} selected={'gaps in care' === activeTab} />
          <SidebarItem text="UM Letters" onClick={onItemClick} selected={'um letters' === activeTab} />
          <SidebarItem text="Fee Schedule" onClick={onItemClick} selected={'fee schedule' === activeTab} />
          <SidebarItem text="Program Integrity" onClick={onItemClick} selected={'program integrity' === activeTab} />
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary sidebar links">
        <List>
          <SidebarItem text="Flagged" onClick={onItemClick} selected={'flagged' === activeTab} count={0} />
        </List>
      </nav>
    </Box>
  );
};
