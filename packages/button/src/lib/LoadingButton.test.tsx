import { render } from '@testing-library/react';
import { LoadingButton } from './LoadingButton';

describe('LoadingButton', () => {
  test('should render successfully', () => {
    const { getByText } = render(<LoadingButton loading>Test</LoadingButton>);
    expect(getByText('Test')).toBeTruthy();
  });
});
