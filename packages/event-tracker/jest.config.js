const global = require('../../jest.config.global');

module.exports = {
  ...global,
  displayName: 'event-tracker',
  coverageDirectory: '../../coverage/event-tracker',
  moduleNameMapper: {
    // Force module uuid to resolve with the CJS entry point, because Jest does not support package.json.exports. See https://github.com/uuidjs/uuid/issues/451
    uuid: require.resolve('uuid'),
  },
};
