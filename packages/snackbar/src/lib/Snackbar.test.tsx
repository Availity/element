import { render } from '@testing-library/react';
import { Snackbar } from './Snackbar';

describe('Snackbar', () => {
  test('should render successfully', () => {
    const { getByText } = render(<Snackbar open><div>Test</div></Snackbar>);
    expect(getByText('Test')).toBeTruthy();
  });
});
