// jest.polyfills.js
/**
 * @note The block below contains polyfills for Node.js globals
 * required for Jest to function when running JSDOM tests.
 * These HAVE to be require's and HAVE to be in this exact
 * order, since "undici" depends on the "TextEncoder" global API.
 *
 * Consider migrating to a more modern test runner if
 * you don't want to deal with this.
 *
 * The maintainers of msw have a package, `jest-fixed-jsdom`,
 * that handles this test environment setup. It's
 * currently only 2 months old and on v0.0.2 - but could
 * replace this file and the `undici` dependency.
 * https://github.com/mswjs/jest-fixed-jsdom#readme
 */

const { TextDecoder, TextEncoder } = require('node:util');

Object.defineProperties(globalThis, {
  TextDecoder: { value: TextDecoder },
  TextEncoder: { value: TextEncoder },
});

const { ReadableStream } = require('node:stream/web');

Object.defineProperties(globalThis, {
  ReadableStream: { value: ReadableStream },
});

const { Blob, File } = require('node:buffer');
const { fetch, Headers, FormData, Request, Response } = require('undici');

Object.defineProperties(globalThis, {
  fetch: { value: fetch, writable: true },
  Blob: { value: Blob },
  File: { value: File },
  Headers: { value: Headers },
  FormData: { value: FormData },
  Request: { value: Request, configurable: true },
  Response: { value: Response, configurable: true },
});

const crypto = require('crypto');

Object.defineProperty(globalThis, 'crypto', {
  value: {
    randomUUID: () => crypto.randomUUID(),
  },
});
