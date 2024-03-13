import { render } from '@testing-library/react';
import { Accordion, AccordionSummary } from '..';

describe('Accordion', () => {
  test('should render successfully', () => {
    const { getByTestId } = render(
      <Accordion data-testid="test">
        <AccordionSummary>Test</AccordionSummary>
      </Accordion>
    );
    expect(getByTestId('test')).toBeTruthy();
  });
});
