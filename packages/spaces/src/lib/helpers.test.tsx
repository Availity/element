import { updateUrl, getUrl } from './helpers';

describe('updateUrl', () => {
  it('should parse the given url return the existing and new params in alphabetical order', () => {
    let updatedUrl = updateUrl('https://www.example.com?foo=bar#hashme', 'fakeKey', 'fakeValue');
    expect(updatedUrl).toBe('https://www.example.com?fakeKey=fakeValue&foo=bar%23hashme');

    updatedUrl = updateUrl('https://www.example.com', 'fakeKey', 'fakeValue');
    expect(updatedUrl).toBe('https://www.example.com?fakeKey=fakeValue');

    updatedUrl = updateUrl('https://www.example.com?foo=bar', 'fakeKey', 'fakeValue');
    expect(updatedUrl).toBe('https://www.example.com?fakeKey=fakeValue&foo=bar');

    updatedUrl = updateUrl('https://www.example.com?foo=bar');
    expect(updatedUrl).toBe('https://www.example.com?foo=bar');
  });
});

describe('getUrl', () => {
  it('should return an absolute url', () => {
    const url = getUrl('https://www.availity.com', false, true);
    expect(url).toBe('https://www.availity.com');
  });

  it('should return a relative url', () => {
    const url = getUrl('/path/to/my/app', true, false);
    expect(url).toBe('/public/apps/home/#!/loadApp?appUrl=%2Fpath%2Fto%2Fmy%2Fapp');
  });
});
