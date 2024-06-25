import { render } from '@testing-library/react';
import { ListItemText } from './ListItemText';

describe('ListItemText', () => {
  test('should render successfully', () => {
    const { getByText } = render(<ListItemText>Test</ListItemText>);
    expect(getByText('Test')).toBeTruthy();
  });
});
