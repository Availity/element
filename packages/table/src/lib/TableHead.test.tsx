import { render } from '@testing-library/react';
import { TableHead } from './TableHead';

describe('TableHead', () => {
  test('should render successfully', () => {
    const { getByText } = render(
      <table>
        <TableHead>
          <tr>
            <th>Test</th>
          </tr>
        </TableHead>
      </table>
    );
    expect(getByText('Test')).toBeTruthy();
  });
});
