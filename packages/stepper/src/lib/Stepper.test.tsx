/* eslint-disable @typescript-eslint/no-empty-function */
import { render, screen } from '@testing-library/react';

import { Stepper } from './Stepper';
import { Step } from './Step';
import { StepLabel } from './StepLabel';

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

describe('Stepper', () => {
  window.ResizeObserver = ResizeObserver;
  test('should render successfully', () => {
    render(
      <Stepper activeStep={0}>
        <Step>
          <StepLabel>step 1</StepLabel>
        </Step>
      </Stepper>
    );

    expect(screen.getByText('step 1')).toBeTruthy();
  });
});
