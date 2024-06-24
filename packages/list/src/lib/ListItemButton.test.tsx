import { render } from '@testing-library/react';
import { ListItemButton } from './ListItemButton';

describe('ListItemButton', () => {
  test('should render successfully', () => {
    const { getByText } = render(<ListItemButton>Test</ListItemButton>);
    expect(getByText('Test')).toBeTruthy();
  });
});
