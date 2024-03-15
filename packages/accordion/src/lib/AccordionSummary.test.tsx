import { render } from '@testing-library/react';
import { AccordionSummary } from './AccordionSummary';

describe('AccordionSummary', () => {
  test('should render successfully', () => {
    const { getByText } = render(<AccordionSummary>Test</AccordionSummary>);
    expect(getByText('Test')).toBeTruthy();
  });
});
