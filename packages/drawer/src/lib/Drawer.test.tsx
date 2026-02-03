import { useState } from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { Drawer, DrawerProps } from './Drawer';

const TestDrawer = (props: DrawerProps) => {
  const [open, setOpen] = useState(true);

  return <Drawer {...props} open={open} onClose={() => setOpen(false)} />;
};

describe('Drawer', () => {
  test('should render successfully', () => {
    const { getByText } = render(<TestDrawer>Test</TestDrawer>);
    expect(getByText('Test')).toBeTruthy();
  });

  test('should close when x is clicked', async () => {
    const { getByText, getByLabelText, queryByText } = render(<TestDrawer header="Test Header">Test</TestDrawer>);
    expect(getByText('Test')).toBeTruthy();
    fireEvent.click(getByLabelText('close drawer'));
    await waitFor(() => expect(queryByText('Test')).toBeFalsy());
  });

  test('should render header', () => {
    const { getByText } = render(<TestDrawer header="Test Header">Test</TestDrawer>);
    expect(getByText('Test Header')).toBeTruthy();
  });

  test('should render actions', () => {
    const { getByText } = render(<TestDrawer actions={<button type="button">Test Action</button>}>Test</TestDrawer>);
    expect(getByText('Test Action')).toBeTruthy();
  });

  test('should apply content padding', () => {
    const { getByText } = render(
      <TestDrawer contentPadding>
        <div>Test</div>
      </TestDrawer>
    );
    expect(getByText('Test').parentElement).toHaveStyle('padding: 0px 24px');
  });

  test('should conditionally render header and actions', () => {
    const { queryByText, rerender } = render(<TestDrawer>Test</TestDrawer>);
    expect(queryByText('Test Header')).toBeNull();

    rerender(
      <TestDrawer header="Test Header" actions={<button type="button">Test Action</button>}>
        Test
      </TestDrawer>
    );
    expect(queryByText('Test Header')).toBeTruthy();
    expect(queryByText('Test Action')).toBeTruthy();
  });

  test('should render with responsive width', () => {
    const { getByRole, rerender } = render(<TestDrawer size="small">Test</TestDrawer>);
    expect(getByRole('dialog')).toHaveStyle('width: 326px');

    rerender(<TestDrawer size="medium">Test</TestDrawer>);
    expect(getByRole('dialog')).toHaveStyle('width: 400px');

    rerender(<TestDrawer size="large">Test</TestDrawer>);
    expect(getByRole('dialog')).toHaveStyle('width: 600px');
  });
});
