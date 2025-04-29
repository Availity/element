import { dedupeErrors } from './util';

describe('util', () => {
  it('should remove duplicate errors', () => {
    expect(
      dedupeErrors([
        { message: 'error 1', code: '123' },
        { message: 'error 2', code: '1234' },
        { message: 'error 1', code: '123' },
      ])
    ).toEqual([
      { message: 'error 1', code: '123' },
      { message: 'error 2', code: '1234' },
    ]);
  });
});
