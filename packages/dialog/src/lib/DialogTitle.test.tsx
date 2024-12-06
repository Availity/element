import { render } from '@testing-library/react';
import { DialogTitle } from './DialogTitle';

describe('DialogTitle', () => {
  test('should render successfully', () => {
    const { getByText } = render(<DialogTitle>Test</DialogTitle>);
    expect(getByText('Test')).toBeTruthy();
  });

  test('should render an alert icon when value passed to `icon`', () => {
    const { queryByRole } = render(
      <DialogTitle icon="info"/>
    );
    expect(queryByRole('img', {hidden: true, })).toBeTruthy();
  });

  test('should not render an alert icon when no value passed to `icon`', () => {
    const { queryByRole } = render(
      <DialogTitle/>
    );
    expect(queryByRole('img', {hidden: true})).toBeNull();
  });
});
