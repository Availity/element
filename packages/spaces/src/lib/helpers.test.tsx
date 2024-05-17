import { updateUrl, getUrl } from './helpers';

describe('updateUrl', () => {
  it('should parse the given url return the existing and new params in alphabetical order', () => {
    let updatedUrl = updateUrl('http://www.example.com?foo=bar#hashme', 'fakeKey', 'fakeValue');
    expect(updatedUrl).toBe('http://www.example.com?fakeKey=fakeValue&foo=bar%23hashme');

    updatedUrl = updateUrl('http://www.example.com', 'fakeKey', 'fakeValue');
    expect(updatedUrl).toBe('http://www.example.com?fakeKey=fakeValue');

    updatedUrl = updateUrl('http://www.example.com?foo=bar', 'fakeKey', 'fakeValue');
    expect(updatedUrl).toBe('http://www.example.com?fakeKey=fakeValue&foo=bar');
  });
});

describe('getUrl', () => {
  it('should return an absolute url', () => {
    const url = getUrl('http://www.availity.com', false, true);
    expect(url).toBe('http://www.availity.com');
  });

  it('should return a relative url', () => {
    const url = getUrl('/path/to/my/app', true, false);
    expect(url).toBe('/public/apps/home/#!/loadApp?appUrl=%2Fpath%2Fto%2Fmy%2Fapp');
  });
});
