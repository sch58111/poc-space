const build = require('./build');

module.exports = (config, options) => {
  return build(config, options, 'company1');
};
