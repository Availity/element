import { render } from '@testing-library/react';
import { DialogTitle } from './DialogTitle';

describe('DialogTitle', () => {
  test('should render successfully', () => {
    const { getByText } = render(<DialogTitle>Test</DialogTitle>);
    expect(getByText('Test')).toBeTruthy();
  });
});
