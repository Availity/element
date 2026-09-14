import { render } from '@testing-library/react';
import { TableFooter } from './TableFooter';

describe('TableFooter', () => {
  test('should render successfully', () => {
    const { getByText } = render(
      <table>
        <TableFooter>
          <tr>
            <td>Test</td>
          </tr>
        </TableFooter>
      </table>
    );
    expect(getByText('Test')).toBeTruthy();
  });
});
