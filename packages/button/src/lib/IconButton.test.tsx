import { fireEvent, waitFor, render, act } from '@testing-library/react';
import { HomeIcon } from '@availity/mui-icon';
import { IconButton } from './IconButton';

describe('Button', () => {
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
