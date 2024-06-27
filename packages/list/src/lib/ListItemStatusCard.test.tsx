import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ListItemStatusCard } from './ListItemStatusCard';

describe('ListItemStatusCard', () => {
  test('should render successfully', () => {
    const { getByText } = render(<ListItemStatusCard>Test</ListItemStatusCard>);
    expect(getByText('Test')).toBeTruthy();
  });
  test('should have styled class', () => {
    const { getByText } = render(<ListItemStatusCard>Test</ListItemStatusCard>);
    expect(getByText('Test')).toHaveClass(/AvListItemStatusCard-root/);
  });
});
