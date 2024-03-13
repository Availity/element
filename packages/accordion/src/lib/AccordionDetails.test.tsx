import { render } from '@testing-library/react';
import { AccordionDetails } from './AccordionDetails';

describe('AccordionDetails', () => {
  test('should render successfully', () => {
    const { getByText } = render(<AccordionDetails>Test</AccordionDetails>);
    expect(getByText('Test')).toBeTruthy();
  });
});
