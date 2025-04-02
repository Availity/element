import { render } from '@testing-library/react';
import { ButtonGroup } from './ButtonGroup';

describe('ButtonGroup', () => {
  test('should render successfully', () => {
    const { getByRole } = render(<ButtonGroup>Test</ButtonGroup>);
    expect(getByRole('group')).toBeTruthy();
  });
});
