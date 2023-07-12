import { render } from '@testing-library/react';
import { ButtonGroup } from './ButtonGroup';
import { Button } from './Button';

describe('ButtonGroup', () => {
  test('should render successfully', () => {
    const { getByRole } = render(
      <ButtonGroup aria-label="Test">
        <Button>button</Button>
      </ButtonGroup>
    );
    expect(getByRole('group')).toBeTruthy();
  });
});
