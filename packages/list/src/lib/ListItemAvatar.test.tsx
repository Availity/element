import { render } from '@testing-library/react';
import { ListItemAvatar } from './ListItemAvatar';

describe('ListItemAvatar', () => {
  test('should render successfully', () => {
    const { getByText } = render(<ListItemAvatar>Test</ListItemAvatar>);
    expect(getByText('Test')).toBeTruthy();
  });
});
