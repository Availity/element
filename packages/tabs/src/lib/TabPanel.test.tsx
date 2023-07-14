import { render } from '@testing-library/react';
import { TabContext } from './TabContext';
import { Divider } from '@availity/mui-divider';
import { TabList } from './TabList';
import { Tab } from './Tab';
import { TabPanel } from './TabPanel';

describe('TabContext', () => {
  test('should render successfully', () => {
    const { getByText } = render(
      <TabContext value="1">
        <TabList aria-label="lab API tabs example">
          <Tab label="Item One" value="1" />
          <Tab label="Item Two" value="2" />
          <Tab label="Item Three" value="3" />
        </TabList>
        <Divider />
        <TabPanel value="1">This is item One</TabPanel>
        <TabPanel value="2">This is item Two</TabPanel>
        <TabPanel value="3">This is item Three</TabPanel>
      </TabContext>
    );
    expect(getByText('This is item One')).toBeTruthy();
  });
});
