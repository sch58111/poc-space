const createNSConfig = require('../webpack.config');
const app = require('../package.json');

module.exports = (originalAngularConfig, env, comp) => {
  console.log('mobile');
  console.log(comp);
  console.log(app.nativescript.id);
  console.log(env);
  return createNSConfig({...env, ios: true, appPath: 'apps/poc-mobile/src'});
};
