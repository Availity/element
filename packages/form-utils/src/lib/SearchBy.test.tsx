import { render } from '@testing-library/react';
import { SearchByFormGroup } from './SearchBy';

describe('SearchByFormGroup', () => {
  test('should render successfully', () => {
    const { getByText } = render(<SearchByFormGroup searchById='searchby'/>);
    expect(getByText('Search By')).toBeTruthy();
  });
});
