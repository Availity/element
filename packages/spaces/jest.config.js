const global = require('../../jest.config.global');

module.exports = {
  ...global,
  displayName: 'spaces',
  coverageDirectory: '../../coverage/spaces',
  transformIgnorePatterns: [
    `/node_modules/(?!@availity/hooks)`
  ]
};
