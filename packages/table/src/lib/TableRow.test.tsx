import { render } from '@testing-library/react';
import { TableRow } from './TableRow';

describe('TableRow', () => {
  test('should render successfully', () => {
    const { getByText } = render(
      <table>
        <tbody>
          <TableRow>
            <td>Test</td>
          </TableRow>
        </tbody>
      </table>
    );
    expect(getByText('Test')).toBeTruthy();
  });
});
