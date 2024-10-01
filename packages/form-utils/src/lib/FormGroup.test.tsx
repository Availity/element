import { render } from '@testing-library/react';
import { FormGroup } from './FormGroup';

describe('FormGroup', () => {
  test('should render successfully', () => {
    const { getByTestId } = render(<FormGroup data-testid="test" />);
    expect(getByTestId('test')).toBeTruthy();
  });
});
