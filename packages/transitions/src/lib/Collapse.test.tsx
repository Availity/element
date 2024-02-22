import { render } from '@testing-library/react';
import { Collapse } from './Collapse';

describe('Collapse', () => {
  test('should render successfully', () => {
    const { getByText } = render(<Collapse>Test</Collapse>);
    expect(getByText('Test')).toBeTruthy();
  });
});
