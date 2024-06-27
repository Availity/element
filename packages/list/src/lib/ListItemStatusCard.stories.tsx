// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { StatusChip } from '@availity/mui-chip';
import { AttachmentIcon, MoreVerticalIcon } from '@availity/mui-icon';
import { List, ListItemText, ListItemProps, ListItemButton, ListItemStatusCard } from '..';

const meta: Meta<typeof ListItemStatusCard> = {
  title: 'Components/List/ListItemStatusCard',
  component: ListItemStatusCard,
  tags: ['autodocs'],
  argTypes: {
    alignItems: {
      table: {
        defaultValue: { summary: "flex-start"}
      }
    },
    children: {
      control: false
    }
  }
};

export default meta;

export const _ListItem: StoryObj<typeof ListItemStatusCard> = {
  render: (args: ListItemProps) => (
    <List>
      <ListItemStatusCard {...args}>
        <ListItemText
          primary="ListItemText"
          secondary={<StatusChip color="default" label='Status'/>}
        />
      </ListItemStatusCard>
    </List>
  ),
};

export const _StatusCards: StoryObj<typeof List> = {
  render: () => (
    <Grid container spacing={8}>
      <Grid xs={12} sm={6}>
        <Typography variant="h6" component="div" id='users-default-spacing-header'>Default Spacing</Typography>
        <List aria-labelledby='users-default-spacing-header'>
          <ListItemStatusCard>
            <ListItemText primary="Item 1" />
            <StatusChip color="warning" label="Pending"/>
            <IconButton title="More Actions">
              <MoreVerticalIcon fontSize='xsmall'/>
            </IconButton>
          </ListItemStatusCard>
          <ListItemStatusCard>
            <ListItemText primary="Item 2" secondary="Look, it's approved!"/>
            <StatusChip color="success" label="Approved"/>
            <IconButton title="More Actions">
              <MoreVerticalIcon fontSize='xsmall'/>
            </IconButton>
          </ListItemStatusCard>
          <ListItemStatusCard>
            <ListItemText primary="Item 3 with very very very very very very very very very very very very very very very very very very very very very long text" secondary="Wow! that is long"/>
            <StatusChip color="error" label="Denied" />
            <IconButton title="More Actions">
              <MoreVerticalIcon fontSize='xsmall'/>
            </IconButton>
          </ListItemStatusCard>
        </List>
      </Grid>
      <Grid xs={12} sm={6}>
        <Typography variant="h6" component="div" id='selectable-dense-spacing-header'>Dense Spacing</Typography>
        <List dense aria-labelledby='selectable-dense-spacing-header'>
          <ListItemStatusCard dense >
            <ListItemText primary="Item 1" />
            <StatusChip color="warning" label="Pending"/>
            <IconButton title="More Actions">
              <MoreVerticalIcon fontSize='xsmall'/>
            </IconButton>
          </ListItemStatusCard>
          <ListItemStatusCard dense>
            <ListItemText primary="Item 2" secondary="Look, it's approved!"/>
            <StatusChip color="success" label="Approved"/>
            <IconButton title="More Actions">
              <MoreVerticalIcon fontSize='xsmall'/>
            </IconButton>
          </ListItemStatusCard>
          <ListItemStatusCard dense>
            <ListItemText primary="Item 3 with very very very very very very very very very very very very very very very very very very very very very long text" secondary="Wow! that is long"/>
            <StatusChip color="error" label="Denied" />
            <IconButton title="More Actions">
              <MoreVerticalIcon fontSize='xsmall'/>
            </IconButton>
          </ListItemStatusCard>
        </List>
      </Grid>
    </Grid>
  ),
};

export const _InteractiveStatusCards: StoryObj<typeof List> = {
  render: () => (
    <List aria-label="list" sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItemStatusCard
        disablePadding
        secondaryAction={
          <>
            <IconButton title="Attachments" size="medium">
              <AttachmentIcon fontSize='xsmall'/>
            </IconButton>
            <IconButton title="More Actions" size="medium">
              <MoreVerticalIcon fontSize='xsmall'/>
            </IconButton>
          </>
        }
      >
        <ListItemButton>
          <ListItemText primary="Item" />
          <StatusChip color="warning" label="Pending"/>
        </ListItemButton>
      </ListItemStatusCard>
      <ListItemStatusCard
        disablePadding
        secondaryAction={
          <>
            <IconButton title="Attachments" size="medium">
              <AttachmentIcon fontSize='xsmall'/>
            </IconButton>
            <IconButton title="More Actions" size="medium">
              <MoreVerticalIcon fontSize='xsmall'/>
            </IconButton>
          </>
        }
      >
        <ListItemButton className="Mui-focusVisible">
          <ListItemText primary="Focused Item" />
          <StatusChip color="error" label="Denied"/>
        </ListItemButton>
      </ListItemStatusCard>
      <ListItemStatusCard
        disablePadding
        secondaryAction={
          <IconButton title="More Actions" size="medium">
            <MoreVerticalIcon fontSize='xsmall'/>
          </IconButton>
        }
      >
        <ListItemButton selected>
          <ListItemText disableTypography primary="Selected Item" />
          <StatusChip color="success" label="Approved"/>
        </ListItemButton>
      </ListItemStatusCard>
      <ListItemStatusCard
        disablePadding
        secondaryAction={
          <IconButton title="More Actions">
            <MoreVerticalIcon fontSize='xsmall'/>
          </IconButton>
        }
      >
        <ListItemButton >
          <ListItemText>
            Item with long text
            <Typography variant="body2">
              long text
              < br />
              long text
              < br />
              long text
            </Typography>
          </ListItemText>
          <StatusChip color="success" label="Approved"/>
        </ListItemButton>
      </ListItemStatusCard>
    </List>
  )
};
