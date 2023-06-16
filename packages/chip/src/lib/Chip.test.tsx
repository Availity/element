import { render } from '@testing-library/react';
import { Chip } from './Chip';

describe('Chip', () => {
  test('should render successfully', () => {
    const { getByText } = render(<Chip label="Test" />);
    expect(getByText('Test')).toBeTruthy();
  });
  test('should have clickable styling when onDelete passed', () => {
    const onDelete = () => {
      // do nothing
    };
    const { getByRole } = render(<Chip label="Test" onDelete={onDelete} />);
    expect(getByRole('button')).toBeTruthy();
    expect(getByRole('button')).toHaveClass('MuiChip-clickable');
  });
});
