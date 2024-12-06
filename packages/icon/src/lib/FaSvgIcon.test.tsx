import { render } from '@testing-library/react';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { FaSvgIcon } from './FaSvgIcon';

describe('FaSvgIcon', () => {
  test('should render FaSvgIcon successfully', () => {
    const { getByRole } = render(<FaSvgIcon icon={faHome}/>);
    expect(getByRole('img', {hidden: true})).toBeTruthy();
  });
});
