import { render } from '@testing-library/react';
import { RadioGroup } from './RadioGroup';

describe('RadioGroup', () => {
  test('should render successfully', () => {
    const { getByRole } = render(<RadioGroup>Test</RadioGroup>);
    expect(getByRole('radiogroup')).toBeTruthy();
  });
});
