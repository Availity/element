import { render } from '@testing-library/react';
import { TableBody } from './TableBody';

describe('TableBody', () => {
  test('should render successfully', () => {
    const { getByText } = render(
      <table>
        <TableBody>
          <tr>
            <td>Test</td>
          </tr>
        </TableBody>
      </table>
    );
    expect(getByText('Test')).toBeTruthy();
  });
});
