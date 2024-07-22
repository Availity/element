import { render, screen } from '@testing-library/react';

import { StepIcon } from './StepIcon';

describe('StepIcon', () => {
  test('should render successfully', () => {
    render(<StepIcon icon={1} />);

    expect(screen.getByText('1')).toBeTruthy();
  });
});
