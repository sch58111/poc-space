const serve = require('./dev-serve');

module.exports = (config, options) => {
  return serve(config, options, 'company1');
};
