import { render } from '@testing-library/react';
import { TabList } from './TabList';
import { Tab } from './Tab';
import { TabContext } from './TabContext';

describe('TabList', () => {
  test('should render successfully', () => {
    const { getByRole } = render(
      <TabContext value={'1'}>
        <TabList aria-label="lab API tabs example">
          <Tab label="Item One" value="1" />
          <Tab label="Item Two" value="2" />
          <Tab label="Item Three" value="3" />
        </TabList>
      </TabContext>
    );
    expect(getByRole('tablist')).toBeTruthy();
  });
});
