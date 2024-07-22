import { render, screen } from '@testing-library/react';

import { StepConnector } from './StepConnector';

describe('StepConnector', () => {
  test('should render successfully', () => {
    render(<StepConnector data-testid="connector" />);

    expect(screen.getByTestId('connector').className).toContain('MuiStepConnector-root');
  });
});
