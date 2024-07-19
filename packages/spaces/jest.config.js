const global = require('../../jest.config.global');

const esModules = [
  '@availity/hooks',
  'bail',
  'character-entities',
  'comma-separated-tokens',
  'decode-named-character-reference',
  'devlop',
  'estree-util-is-identifier-name',
  'hast-util-to-jsx-runtime',
  'hast-util-whitespace',
  'html-url-attributes',
  'is-plain-obj',
  'mdast-util-from-markdown',
  'mdast-util-to-hast',
  'mdast-util-to-string',
  'micromark',
  'property-information',
  'react-markdown',
  'remark-parse',
  'remark-rehype',
  'space-separated-tokens',
  'trim-lines',
  'trough',
  'unified',
  'unist-util-is',
  'unist-util-position',
  'unist-util-stringify-position',
  'unist-util-visit',
  'vfile',
  'vfile-message',
].join('|');

module.exports = {
  ...global,
  displayName: 'spaces',
  coverageDirectory: '../../coverage/spaces',
  transformIgnorePatterns: [
    `/node_modules/(?!${esModules})`
  ]
};
