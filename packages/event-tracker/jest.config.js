const global = require('../../jest.config.global');

const esModules = ['uuid'];

module.exports = {
  ...global,
  displayName: 'event-tracker',
  coverageDirectory: '../../coverage/event-tracker',
  transformIgnorePatterns: [
    `/node_modules/(?!${esModules})`
  ]
};
