import { StoryObj, Meta } from '@storybook/react';
import { Container, Grid } from '@mui/material';
import { HeaderSection } from './HeaderSection';
import { SearchSection } from './SearchSection';
import { SideNavSection } from './SideNavSection';
import { TablesSection } from './TablesSection';
import React from 'react';

/**
 * *Work In Progress*
 *
 * Sidebar layout that includes header, sidenav, search section, & tables. */
const meta: Meta = {
  title: 'Layouts/Sidebar',
  tags: ['autodocs'],
};

/**  */
export default meta;

export const _SidebarLayout: StoryObj = {
  render: () => {
    // TODO: tab logic
    return (
      <Container maxWidth={false} sx={{ bgcolor: 'background.canvas', minHeight: '75%', padding: '1rem' }}>
        <Container fixed>
          <HeaderSection />
          <Grid container spacing={2}>
            <Grid item xs={12} sm="auto">
              <SideNavSection />
            </Grid>
            <Grid item xs>
              <div role="tabpanel">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <SearchSection />
                  </Grid>
                  <Grid item xs={12}>
                    <TablesSection />
                  </Grid>
                </Grid>
              </div>
              <div role="tabpanel" hidden>
                future section
              </div>
              <div role="tabpanel" hidden>
                future section
              </div>
            </Grid>
          </Grid>
        </Container>
      </Container>
    );
  },
};

export const _HeaderSection: StoryObj = {
  render: () => <HeaderSection />,
};

export const _SideNavSection: StoryObj = {
  render: () => <SideNavSection />,
};

export const _SearchSection: StoryObj = {
  render: () => <SearchSection />,
};

export const _TablesSection: StoryObj = {
  render: () => <TablesSection />,
};
