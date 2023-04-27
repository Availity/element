import { render } from '@testing-library/react';
import { HomeIcon } from './Icons/Common';

describe('Icons (any named icon)', () => {
  test('should render HomeIcon successfully', () => {
    const { getByTestId } = render(<HomeIcon data-testid="homeicon"/>);
    expect(getByTestId('homeicon')).toBeTruthy();
  });

  test('should add title when new title passed', () => {
    const { queryByRole } = render(<HomeIcon aria-hidden={false} titleAccess="title" />);
    expect(queryByRole('img', { hidden: false, name: 'title' })).toBeTruthy();
  });
});
