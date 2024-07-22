import { render, screen } from '@testing-library/react';

import { StepContent } from './StepContent';

describe('StepContent', () => {
  test('should render successfully', () => {
    render(<StepContent data-testid="content" />);

    expect(screen.getByTestId('content').className).toContain('MuiStepContent-root');
  });
});
