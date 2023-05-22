import { render } from '@testing-library/react';
import { LoadingButton } from './LoadingButton';

describe('LoadingButton', () => {
  test('should render successfully', () => {
    const { getByText } = render(<LoadingButton>Test</LoadingButton>);
    expect(getByText('Test')).toBeTruthy();
  });

  test('should be disabled while loading', () => {
    const { getByRole } = render(<LoadingButton loading>Test</LoadingButton>);
    expect(getByRole('button')).toBeTruthy();
    expect(getByRole('button')).toHaveAttribute('disabled');
  });

  test('should display spinner in end position when no icon passed', () => {
    const { getByRole } = render(<LoadingButton loading>Test</LoadingButton>);
    expect(getByRole('progressbar')).toBeTruthy();
    expect(getByRole('progressbar').parentElement).toHaveClass('MuiLoadingButton-loadingIndicatorEnd');
  });
});
