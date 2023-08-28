import { render } from '@testing-library/react';
import { Typography } from './Typography';

describe('Typography', () => {
  test('should render body1 successfully', () => {
    const { getByText } = render(<Typography variant="body1">Body 1</Typography>);
    expect(getByText('Body 1').nodeName).toBe('P');
  });
  test('should render body2 successfully', () => {
    const { getByText } = render(<Typography variant="body2">Body 2</Typography>);
    expect(getByText('Body 2').nodeName).toBe('P');
  });
  test('should render button successfully', () => {
    const { getByText } = render(<Typography variant="button">Button</Typography>);
    expect(getByText('Button').nodeName).toBe('SPAN');
  });
  test('should render caption successfully', () => {
    const { getByText } = render(<Typography variant="caption">Caption</Typography>);
    expect(getByText('Caption').nodeName).toBe('SPAN');
  });
  test('should render h1 successfully', () => {
    const { getByText } = render(<Typography variant="h1">H1</Typography>);
    expect(getByText('H1').nodeName).toBe('H1');
  });
  test('should render h2 successfully', () => {
    const { getByText } = render(<Typography variant="h2">H2</Typography>);
    expect(getByText('H2').nodeName).toBe('H2');
  });
  test('should render h3 successfully', () => {
    const { getByText } = render(<Typography variant="h3">H3</Typography>);
    expect(getByText('H3').nodeName).toBe('H3');
  });
  test('should render h4 successfully', () => {
    const { getByText } = render(<Typography variant="h4">H4</Typography>);
    expect(getByText('H4').nodeName).toBe('H4');
  });
  test('should render h5 successfully', () => {
    const { getByText } = render(<Typography variant="h5">H5</Typography>);
    expect(getByText('H5').nodeName).toBe('H5');
  });
  test('should render h6 successfully', () => {
    const { getByText } = render(<Typography variant="h6">H6</Typography>);
    expect(getByText('H6').nodeName).toBe('H6');
  });
  test('should render inherit successfully', () => {
    const { getByText } = render(<Typography variant="inherit">Inherit</Typography>);
    expect(getByText('Inherit').nodeName).toBe('P');
  });
  test('should render overline successfully', () => {
    const { getByText } = render(<Typography variant="overline">Overline</Typography>);
    expect(getByText('Overline').nodeName).toBe('SPAN');
  });
  test('should render subtitle1 successfully', () => {
    const { getByText } = render(<Typography variant="subtitle1">Subtitle 1</Typography>);
    expect(getByText('Subtitle 1').nodeName).toBe('H6');
  });
  test('should render subtitle2 successfully', () => {
    const { getByText } = render(<Typography variant="subtitle2">Subtitle 2</Typography>);
    expect(getByText('Subtitle 2').nodeName).toBe('H6');
  });
});
