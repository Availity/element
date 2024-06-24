import { render } from '@testing-library/react';
import { ListItemIcon } from './ListItemIcon';

describe('ListItemIcon', () => {
  test('should render successfully', () => {
    const { getByText } = render(<ListItemIcon>Test</ListItemIcon>);
    expect(getByText('Test')).toBeTruthy();
  });
});
