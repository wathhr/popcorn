const { join } = require('path');

module.exports = (env) => {
  const { type = 'renderer', minify = false } = env;

  /**@type {import('webpack').Configuration} */
  return {
    devtool: minify ? false : 'eval-source-map',
    mode: minify ? 'production' : 'development',
    entry: `./src/${type}/index.ts`,
    output: {
      path: join(__dirname, 'dist'),
      filename: `${type}.js`,
      chunkFilename: '[name].js',
      library: {
        type: type === 'renderer' ? 'module' : 'commonjs',
      },
    },
    resolve: {
      extensions: ['.ts', '.js'],
      alias: {
        '@constants': join(__dirname, 'src/utils/constants'),
        '@utils': join(__dirname, 'src/utils'),
      },
    },
    experiments: {
      outputModule: true,
    },
    module: {
      rules: [
        {
          test: /\.[mc]?tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
  };
};
