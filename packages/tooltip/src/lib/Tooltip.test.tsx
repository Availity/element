import { render } from '@testing-library/react';
import { Tooltip } from './Tooltip';

describe('Tooltip', () => {
  test('should render successfully', () => {
    const { getByText } = render(
      <Tooltip title="mock tooltip">
        <span>Test</span>
      </Tooltip>
    );
    expect(getByText('Test')).toBeTruthy();
  });
});
