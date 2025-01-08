import { render } from '@testing-library/react';
import { ControlledForm } from './ControlledForm';

describe('ControlledForm', () => {
  test('should render successfully', () => {
    const { getByText } = render(<ControlledForm>Test</ControlledForm>);
    expect(getByText('Test')).toBeTruthy();
  });
});
