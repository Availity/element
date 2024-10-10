import { render } from '@testing-library/react';
import { Snackbar } from './Snackbar';

describe('Snackbar', () => {
  test('should render successfully', () => {
    const { getByText } = render(<Snackbar><div>Test</div></Snackbar>);
    expect(getByText('Test')).toBeTruthy();
  });
});
