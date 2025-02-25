/* eslint-disable no-undef */
import j from 'jscodeshift';
import { EOL } from 'os';
import path from 'path';
import { readFile } from '../utils';

export const jscodeshift = j.withParser('tsx');

function read(dirname, fileName) {
  return readFile(path.join(dirname, fileName));
}

export function describeJscodeshiftTransform({ transformName, transform, testCases, dirname }) {
  describe(transformName, () => {
    testCases.forEach((testCase) => {
      it('transforms as needed', () => {
        const actual = transform(
          { source: read(dirname, testCase.actual) },
          { jscodeshift },
          {
            ...testCase.options, printOptions: {
              ...testCase.options?.printOptions,
              lineTerminator: EOL
            }
          });

        const expected = read(dirname, testCase.expected);
        expect(actual).toBe(expected);
      });

      it('should be idempotent', () => {
        const actual = transform(
          { source: read(dirname, testCase.expected) },
          { jscodeshift },
          {
            ...testCase.options,
            printOptions: {
              ...testCase.options?.printOptions,
              lineTerminator: EOL,
            }
          }
        );

        const expected = read(dirname, testCase.expected);
        expect(actual).toBe(expected);
      });
    })
  })
}
