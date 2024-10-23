import React, { useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { Container, Grid } from '@availity/element';
import { HeaderSection } from './HeaderSection';
import { SearchSection } from './SearchSection';
import { SidebarNav } from './SidebarNav';
import { TablesSection } from './TablesSection';
import { DataGridSection } from './DataGridSection';

// Hidden in sidebar but still available with url
// http://localhost:4400/?path=/docs/sample-layouts-sidebar--docs

/**
 * *Work In Progress*
 *
 * Sidebar layout that includes header, sidenav, search section, & tables. */
const meta: Meta = {
  title: 'Sample Layouts/Sidebar',
  tags: ['autodocs', 'hideInSidebar'],
};

/**  */
export default meta;

export const _SidebarLayout: StoryObj = {
  render: () => {
    const [activeTab, setActiveTab] = useState('home');

    return (
      <Container maxWidth={false} sx={{ bgcolor: 'background.canvas', minHeight: '75%', padding: '1rem' }}>
        <Container fixed>
          <HeaderSection />
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 'auto' }}>
              <SidebarNav activeTab={activeTab} onItemClick={setActiveTab} />
            </Grid>
            <Grid size="grow">
              <div role="tabpanel">
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12 }}>
                    <SearchSection />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TablesSection />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <DataGridSection />
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

export const _SidebarNavSection: StoryObj = {
  render: () => <SidebarNav onItemClick={(item) => console.log(item)} />,
};

export const _SearchSection: StoryObj = {
  render: () => <SearchSection />,
};

export const _TablesSection: StoryObj = {
  render: () => <TablesSection />,
};

export const _DataGridSection: StoryObj = {
  render: () => <DataGridSection />,
};
