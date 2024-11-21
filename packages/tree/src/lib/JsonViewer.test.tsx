import { render, fireEvent } from '@testing-library/react';
import { JsonViewer } from './JsonViewer';

const setup = (data: Record<string, unknown>) => render(<JsonViewer data={data} />);

describe('JsonViewer', () => {
  test('does not render keys with null or undefined values without throwing error', () => {
    const { getByText, queryByText } = setup({ foo: 'bar', baz: null, somethingElse: undefined });
    const el = getByText(/bar/i);
    expect(el).toBeInTheDocument();
    const ghost = queryByText('baz');
    expect(ghost).not.toBeInTheDocument();
  });
  test('renders deeply nested objects into the dom so they can be read by screenreaders even if parent elements are not open', () => {
    const { getByText } = setup({ foo: { bar: { baz: ['stuff', 'things', 'etc.'] } } });
    fireEvent.click(getByText('foo: { } 1 keys'));
    fireEvent.click(getByText('bar: { } 1 keys'));
    fireEvent.click(getByText('baz: [ ] 3 items'));
    expect(getByText('0: stuff')).toBeInTheDocument();
  });
});
