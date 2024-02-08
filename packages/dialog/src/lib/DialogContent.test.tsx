import { render } from '@testing-library/react';
import { DialogContent } from './DialogContent';

describe('DialogContent', () => {
  test('should render successfully', () => {
    const { getByText } = render(<DialogContent>Test</DialogContent>);
    expect(getByText('Test')).toBeTruthy();
  });
});
