const global = require('../../jest.config.global');

module.exports = {
  ...global,
  displayName: 'codemod',
  coverageDirectory: '../../coverage/codemod',
};
