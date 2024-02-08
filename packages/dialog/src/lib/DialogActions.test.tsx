import { render } from '@testing-library/react';
import { DialogActions } from './DialogActions';

describe('DialogActions', () => {
  test('should render successfully', () => {
    const { getByText } = render(<DialogActions>Test</DialogActions>);
    expect(getByText('Test')).toBeTruthy();
  });
});
