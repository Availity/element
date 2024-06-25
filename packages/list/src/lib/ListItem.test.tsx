import { render } from '@testing-library/react';
import { ListItem } from './ListItem';

describe('ListItem', () => {
  test('should render successfully', () => {
    const { getByText } = render(<ListItem>Test</ListItem>);
    expect(getByText('Test')).toBeTruthy();
  });
});
