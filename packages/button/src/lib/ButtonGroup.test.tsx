import { render } from '@testing-library/react';
import { ButtonGroup } from './ButtonGroup';

describe('ButtonGroup', () => {
  test('should render successfully', () => {
    const { getByText } = render(<ButtonGroup>Test</ButtonGroup>);
    expect(getByText('Test')).toBeTruthy();
  });
});
