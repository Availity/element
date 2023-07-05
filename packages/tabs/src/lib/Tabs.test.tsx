import { render } from '@testing-library/react';
import { Tabs } from './Tabs';

describe('Tabs', () => {
  test('should render successfully', () => {
    const { getByText } = render(<Tabs>Test</Tabs>);
    expect(getByText('Test')).toBeTruthy();
  });
});
