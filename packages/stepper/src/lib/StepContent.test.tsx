import { render, screen } from '@testing-library/react';
import { Stepper } from './Stepper';
import { Step } from './Step';
import { StepContent } from './StepContent';

// jsdom doesn't implement ResizeObserver; stub it so MUI's Stepper internals don't throw
beforeAll(() => {
  global.ResizeObserver = class ResizeObserver {
    observe() {}

    unobserve() {}

    disconnect() {}
  };
});

describe('StepContent', () => {
  test('should render successfully', () => {
    render(
      <Stepper orientation="vertical">
        <Step>
          <StepContent data-testid="content" />
        </Step>
      </Stepper>
    );

    expect(screen.getByTestId('content').className).toContain('MuiStepContent-root');
  });
});
