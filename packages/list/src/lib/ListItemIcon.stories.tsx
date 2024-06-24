// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { CloseIcon, DeleteIcon, DownloadIcon, FileImageIcon, FilePdfIcon, HeartEmptyIcon } from '@availity/mui-icon';
import { List, ListItem, ListItemText, ListItemIcon, ListItemIconProps, ListItemButton, ListSubheader } from '..';
import { Box, LinearProgress, LinearProgressProps, Link, Typography } from '@mui/material';
import { IconButton } from '@availity/mui-button';

const meta: Meta<typeof ListItemIcon> = {
  title: 'Components/List/ListItemIcon',
  component: ListItemIcon,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false
    }
  }
};

export default meta;

export const _ListItemIcon: StoryObj<typeof ListItemIcon> = {
  render: (args: ListItemIconProps) => <ListItemIcon {...args}><HeartEmptyIcon/></ListItemIcon>,
};

export const _FavoritesList: StoryObj<typeof List> = {
  render: () => (
    <Box display="inline-flex" width='100%' gap={8}>
      <List component="nav" aria-label="Normal favorites" sx={{ width: '50%', maxWidth: 360 }}>
        <ListSubheader>Default Spacing</ListSubheader>
        {[0, 1, 2, 3].map((value) => (
          <ListItem
            key={value}
            disablePadding
          >
          <ListItemButton>
            <ListItemIcon>
              <HeartEmptyIcon />
            </ListItemIcon>
            <ListItemText primary="List item" secondary="Secondary"/>
          </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List component="nav" aria-label="Dense favorites" dense  sx={{ width: '50%', maxWidth: 360 }}>
        <ListSubheader>Dense Spacing</ListSubheader>
        {[4, 5, 6, 7].map((value) => (
          <ListItem
            key={value}
            disablePadding
          >
          <ListItemButton>
            <ListItemIcon>
              <HeartEmptyIcon />
            </ListItemIcon>
            <ListItemText primary="List item" secondary="Secondary"/>
          </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
};

export const _FileList: StoryObj<typeof List> = {
  render: () => {
    const LinearProgressWithLabel = (props: LinearProgressProps & { value: number }) => (
      <Box display='flex' alignItems='center' width='50%' mr={2}>
        <Box width='100%' mr={1}>
          <LinearProgress color="success" variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );

    return(
    <Box>
      <List>
        <ListItem disablePadding>
            <ListItemIcon>
              <FileImageIcon />
            </ListItemIcon>
            <ListItemText><Link variant="inherit" href='#'>file-name.img</Link></ListItemText>
            <Box mr={2}>13.2 MB</Box>
            <LinearProgressWithLabel value={100}/>
            <IconButton title="download"><DownloadIcon fontSize='xsmall'/></IconButton>
            <IconButton title="delete"><DeleteIcon fontSize='xsmall'/></IconButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemIcon>
              <FilePdfIcon />
            </ListItemIcon>
            <ListItemText>file-name.pdf</ListItemText>
            <Box mr={2}>13.2 MB</Box>
            <LinearProgressWithLabel value={50}/>
            <IconButton title="cancel"><CloseIcon fontSize='xsmall'/></IconButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemIcon>
              <FileImageIcon />
            </ListItemIcon>
            <ListItemText><Link variant="inherit" href='#'>file-name.img</Link></ListItemText>
            <Box mr={2}>13.2 MB</Box>
            <LinearProgressWithLabel value={100}/>
            <IconButton title="delete"><DeleteIcon fontSize='xsmall'/></IconButton>
        </ListItem>
      </List>
    </Box>
  )}
};
