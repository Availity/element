import { render } from '@testing-library/react';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { FaSvgIcon } from './FaSvgIcon';

describe('FaSvgIcon', () => {
  test('should render FaSvgIcon successfully', () => {
    const { getByTestId } = render(<FaSvgIcon icon={faHome} data-testid='home-icon'/>);
    expect(getByTestId('home-icon')).toBeTruthy();
  });
});
