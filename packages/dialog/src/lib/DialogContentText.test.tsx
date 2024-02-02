import { render } from '@testing-library/react';
import { DialogContentText } from './DialogContentText';

describe('DialogContentText', () => {
  test('should render successfully', () => {
    const { getByText } = render(<DialogContentText>Test</DialogContentText>);
    expect(getByText('Test')).toBeTruthy();
  });
});
