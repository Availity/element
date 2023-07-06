import { render } from '@testing-library/react';
import { TabList } from './TabList';

describe('TabList', () => {
  test('should render successfully', () => {
    const { getByText } = render(<TabList>Test</TabList>);
    expect(getByText('Test')).toBeTruthy();
  });
});
