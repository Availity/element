import { fireEvent, render } from '@testing-library/react';
import { Dialog } from './Dialog';

describe('Dialog', () => {
  test('should render successfully', () => {
    const { getByText } = render(<Dialog open>Test</Dialog>);
    expect(getByText('Test')).toBeTruthy();
  });

  test('should render close button when `closeButton` is true', () => {
    const { getByRole } = render(
      <Dialog open closeButton/>
    );
    expect(getByRole('button')).toBeTruthy();
  });

  test('should not render close button when `closeButton` is false', () => {
    const { queryByRole } = render(
      <Dialog open closeButton={false}/>
    );
    expect(queryByRole('button')).toBeNull();
  });

  test('calls onClose when close button clicked', () => {
    const handleClose = jest.fn();
    const { getByRole } = render(
      <Dialog open onClose={handleClose}/>
    );

    fireEvent.click(getByRole('button'));
    expect(handleClose).toHaveBeenCalled();
  });
});
