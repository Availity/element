import { render } from '@testing-library/react';
import { visuallyHidden } from './Utils';

describe('Utils', () => {
  test('visuallyHidden should keep element visible to assistive technologies', () => {
    const { queryAllByRole, getByText } = render(<div style={visuallyHidden}>Test</div>);
    expect(getByText('Test')).toBeTruthy();
    expect(queryAllByRole('generic')).toEqual(queryAllByRole('generic', {hidden: true}));
  });
});
