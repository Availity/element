import { render } from '@testing-library/react';

import { StepLabel } from './StepLabel';

describe('StepLabel', () => {
  test('should render successfully', () => {
    const { getByText } = render(<StepLabel>step 1</StepLabel>);

    expect(getByText('step 1')).toBeTruthy();
  });
});
