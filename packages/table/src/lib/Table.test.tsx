import { render } from '@testing-library/react';
import { Table } from './Table';

describe('Table', () => {
  test('should render successfully', () => {
    const { getByText } = render(
      <Table>
        <tbody>
          <tr>
            <td>Test</td>
          </tr>
        </tbody>
      </Table>
    );
    expect(getByText('Test')).toBeTruthy();
  });
});
