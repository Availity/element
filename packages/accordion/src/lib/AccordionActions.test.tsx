import { render } from '@testing-library/react';
import { AccordionActions } from './AccordionActions';

describe('AccordionActions', () => {
  test('should render successfully', () => {
    const { getByText } = render(<AccordionActions>Test</AccordionActions>);
    expect(getByText('Test')).toBeTruthy();
  });
});
