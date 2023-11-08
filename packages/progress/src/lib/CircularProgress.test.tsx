import { render } from '@testing-library/react';
import { CircularProgress } from './CircularProgress';

describe('CircularProgress', () => {
  test('should render loader successfully', () => {
    const { getByText, getByRole } = render(<CircularProgress />);
    expect(getByRole('progressbar')).toBeTruthy();
    expect(getByText('Loading')).toBeTruthy();
  });
  describe('loadingCaption', () => {
    test('should render loader successfully without Loading caption', () => {
      const { queryByText } = render(<CircularProgress loadingCaption={false} />);
      expect(queryByText('Loading')).not.toBeInTheDocument();
    });
    test('should render success but still have Loading successful caption', () => {
      const { getByText } = render(<CircularProgress loadingCaption={false} success />);
      expect(getByText('Loading successful')).toBeTruthy();
    });
    test('should render error but still have Loading successful caption', () => {
      const { getByText } = render(<CircularProgress loadingCaption={false} error />);
      expect(getByText('Loading error')).toBeTruthy();
    });
  });
  describe('success', () => {
    test('should render success icon successfully', () => {
      const { queryByText, queryByRole, getByTitle, getByText } = render(<CircularProgress success />);
      expect(queryByRole('progressbar')).not.toBeInTheDocument();
      expect(queryByText('Loading')).not.toBeInTheDocument();
      expect(getByTitle('loading successful')).toBeTruthy();
      expect(getByText('Loading successful')).toBeTruthy();
    });
  });
  describe('error', () => {
    test('should render error icon successfully', () => {
      const { queryByText, queryByRole, getByTitle, getByText } = render(<CircularProgress error />);
      expect(queryByRole('progressbar')).not.toBeInTheDocument();
      expect(queryByText('Loading')).not.toBeInTheDocument();
      expect(getByTitle('loading error')).toBeTruthy();
      expect(getByText('Loading error')).toBeTruthy();
    });

    test('should override success icon successfully', () => {
      const { queryByText, queryByRole, queryByTitle, getByTitle, getByText } = render(
        <CircularProgress success error />
      );
      expect(queryByRole('progressbar')).not.toBeInTheDocument();
      expect(queryByText('Loading')).not.toBeInTheDocument();
      expect(getByTitle('loading error')).toBeTruthy();
      expect(getByText('Loading error')).toBeTruthy();
      expect(queryByTitle('loading successful')).not.toBeInTheDocument();
      expect(queryByText('Loading successful')).not.toBeInTheDocument();
    });
  });
});
