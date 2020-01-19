module.exports = {
  name: 'poc-web',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/poc-web',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
