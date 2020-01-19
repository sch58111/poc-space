const mobile = require('./mobile');

module.exports = (originalAngularConfig, env) => {
  console.log('module-exports');
  console.log(env);
  return mobile(originalAngularConfig, env, 'company1');
};
