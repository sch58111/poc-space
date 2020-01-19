const fs = require('fs');
const path = require('path');

module.exports = (config, options, comp) => {
  const [appName] = options.outputPath.split('/').slice(-1);
  const company = comp || 'base';
  const variablesPath = fs.existsSync(
    `./libs/assets/${company}/${appName}/scss/variables.scss`
  )
    ? path.resolve(
        __dirname,
        `../libs/assets/${company}/${appName}/scss/variables.scss`
      )
    : path.resolve(
        __dirname,
        `../libs/assets/${company}/generic/scss/variables.scss`
      );

  config.module.rules = config.module.rules.map(loader => {
    if (!!loader.exclude && loader.test.toString() === '/\\.scss$|\\.sass$/') {
      loader.use.push({
        loader: 'sass-resources-loader',
        options: {
          resources: [
            path.resolve(
              __dirname,
              `../libs/assets/scss/material.scss`
            ), // material first
            variablesPath, // company-specific variables
            path.resolve(
              __dirname,
              `../libs/assets/scss/variables.scss`
            ), // creating them with company colors & more
          ]
        }
      });
    }
    return loader;
  });

  return config;
};
