import { render } from '@testing-library/react';
import { HomeIcon } from './Icons/Common';

describe('Icons (any named icon)', () => {
  test('should render HomeIcon successfully', () => {
    const { getByRole } = render(<HomeIcon/>);
    expect(getByRole('img', { hidden: true })).toBeTruthy();
  });

  test('should add title when new title passed', () => {
    const { queryByRole } = render(<HomeIcon aria-hidden={false} titleAccess="title" />);
    expect(queryByRole('img', { hidden: false, name: 'title' })).toBeTruthy();
  });
});
