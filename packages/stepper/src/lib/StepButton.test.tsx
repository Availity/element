import { fireEvent, render, screen } from '@testing-library/react';

import { StepButton } from './StepButton';

describe('StepButton', () => {
  test('should render successfully', () => {
    render(<StepButton>Next</StepButton>);

    expect(screen.getByText('Next')).toBeTruthy();
  });

  test('should handle clicks', () => {
    const fn = jest.fn();
    render(<StepButton onClick={fn}>Next</StepButton>);

    fireEvent.click(screen.getByText('Next'));

    expect(fn).toHaveBeenCalled();
  });
});
