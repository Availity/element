import { render } from '@testing-library/react';
import { TableCell } from './TableCell';

describe('TableCell', () => {
  test('should render successfully', () => {
    const { getByText } = render(
      <table>
        <tbody>
          <tr>
            <TableCell>Test</TableCell>
          </tr>
        </tbody>
      </table>
    );
    expect(getByText('Test')).toBeTruthy();
  });
  test('should add placeholder to empty cell', () => {
    const { getByText } = render(
      <table>
        <tbody>
          <tr>
            <TableCell />
          </tr>
        </tbody>
      </table>
    );
    expect(getByText('—')).toBeTruthy();
    expect(getByText('No Data')).toBeTruthy();
  });
  test('shouldnt add placeholder to empty cell when disableEmptyPlaceholder is true', () => {
    const { queryByText } = render(
      <table>
        <tbody>
          <tr>
            <TableCell disableEmptyPlaceholder />
          </tr>
        </tbody>
      </table>
    );
    expect(queryByText('—')).toBeNull();
    expect(queryByText('No Data')).toBeNull();
  });
});
