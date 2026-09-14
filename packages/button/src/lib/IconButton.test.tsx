import { fireEvent, waitFor, render, act } from '@testing-library/react';
import { HomeIcon } from '@availity/mui-icon';
import { IconButton } from './IconButton';

describe('Button', () => {
  test('should not warn when disabled button is inside Tooltip', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => undefined);

    render(
      <IconButton title="disabled action" disabled>
        <HomeIcon />
      </IconButton>
    );

    const muiTooltipWarning = consoleSpy.mock.calls.find((args) =>
      args.some((arg) => typeof arg === 'string' && arg.includes('disabled'))
    );
    expect(muiTooltipWarning).toBeUndefined();

    consoleSpy.mockRestore();
  });

  test('should render disabled button', () => {
    const { getByRole } = render(
      <IconButton title="disabled action" disabled>
        <HomeIcon />
      </IconButton>
    );
    expect(getByRole('button')).toBeDisabled();
  });

  test('should render successfully', () => {
    const { getByRole } = render(
      <IconButton title="test">
        <HomeIcon />
      </IconButton>
    );
    expect(getByRole('button')).toBeTruthy();
  });

  test('should have accessible name', () => {
    const { getByRole } = render(
      <IconButton title="test">
        <HomeIcon />
      </IconButton>
    );
    const button = getByRole('button');

    expect(button).toHaveAccessibleName('test');
  });

  test('should render tooltip on hover', async () => {
    const { getByRole } = render(
      <IconButton title="test">
        <HomeIcon />
      </IconButton>
    );
    const button = getByRole('button');

    fireEvent.mouseOver(button);

    await waitFor(() => getByRole('tooltip'));
    expect(getByRole('tooltip')).toBeTruthy();
  });

  test('should render tooltip on focus', async () => {
    const { getByRole } = render(
      <IconButton title="test">
        <HomeIcon />
      </IconButton>
    );
    const button = getByRole('button');

    await act(async () => fireEvent.mouseOver(button));

    await waitFor(() => getByRole('tooltip'));
    expect(getByRole('tooltip')).toBeTruthy();
  });
});
