import { render } from '@testing-library/react';
import { List } from './List';

describe('List', () => {
  test('should render successfully', () => {
    const { getByText } = render(<List>Test</List>);
    expect(getByText('Test')).toBeTruthy();
  });
});
