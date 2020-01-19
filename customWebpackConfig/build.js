const common = require('./common');

module.exports = (config, options, comp) => {
  const [appName] = options.outputPath.split('/').slice(-1);
  const company = comp || 'company1';

  config = common(config, options, comp);
  return config;
};
