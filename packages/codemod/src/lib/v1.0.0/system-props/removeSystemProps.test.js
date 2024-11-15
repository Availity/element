import path from 'path';
import { jscodeshift } from '../../../testUtils';
import transform from './removeSystemProps';
import {readFile} from '../../../utils';

function read(fileName) {
  return readFile(path.join(__dirname, fileName));
}

describe('@mui/codemod', () => {
  describe('v6.0.0 - removeSystemProps', () => {
    it('transforms props as needed', () => {
      const actual = transform(
        { source: read('./test-cases/system-props.actual.js') },
        { jscodeshift },
        {},
      );

      const expected = read('./test-cases/system-props.expected.js');
      expect(actual).toBe(expected);
    });

    it('should be idempotent', () => {
      const actual = transform(
        { source: read('./test-cases/system-props.expected.js') },
        { jscodeshift },
        {},
      );

      const expected = read('./test-cases/system-props.expected.js');
      expect(actual).toBe(expected);
    });
  });
});
