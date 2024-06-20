import { render } from '@testing-library/react';
import { Typography } from '@availity/mui-typography';
import { Fade } from './Fade';

describe('Fade', () => {
  test('should render successfully', () => {
    const { getByText } = render(
      <Fade>
        <Typography>Test</Typography>
      </Fade>
    );
    expect(getByText('Test')).toBeTruthy();
  });
});
