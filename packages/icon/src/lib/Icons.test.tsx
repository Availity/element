import { render } from '@testing-library/react';
import { HomeIcon } from './Icons/Common';

describe('Icons (any named icon)', () => {
  test('should render HomeIcon successfully', () => {
    const { getByRole } = render(<HomeIcon/>);
    expect(getByRole('img', { hidden: true })).toBeTruthy();
  });

  test('should render HomeIcon with default title when not aria-hidden', () => {
    const { getByRole } = render(<HomeIcon aria-hidden={false}/>);
    expect(getByRole('img', { hidden: false, name: 'home' })).toBeTruthy();
  });

  test('should override HomeIcon default title when new title passed', () => {
    const { queryByRole } = render(<HomeIcon aria-hidden={false} titleAccess="alternative title" />);
    expect(queryByRole('img', { hidden: false, name: 'home' })).toBeNull();
    expect(queryByRole('img', { hidden: false, name: 'alternative title' })).toBeTruthy();
  });
});
