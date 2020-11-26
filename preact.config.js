const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

export default {
  /**
   * Function that mutates the original webpack config.
   * Supports asynchronous changes when a promise is returned (or it's an async function).
   *
   * @param {object} config - original webpack config.
   * @param {object} env - options passed to the CLI.
   * @param {WebpackConfigHelpers} helpers - object with useful helpers for working with the webpack config.
   * @param {object} options - this is mainly relevant for plugins (will always be empty in the config), default to an empty object
   **/
  webpack(config, env, helpers, options) {
    delete config.entry.polyfills
    config.output.path = path.resolve(__dirname, './docs/every-month')
    config.output.filename = 'webComponent.js'

    if (env.production) {
      const vercel = process.env.VERCEL_URL
      config.output.publicPath = vercel? `https://${vercel}/`: 'https://assets.every.org/every-month/'
      console.log('Building for', config.output.publicPath)

      // Copy assets
      config.plugins.push(
        new CopyPlugin([{ from: 'public', to: config.output.path }])
      )
    }

    // Generate index.html directly instead of use a template
    const plugHtml = helpers.getPluginsByName(config, 'HtmlWebpackPlugin')[0]
    config.plugins[plugHtml.index] = new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: 'head',
    })

    // Remove css modules and add to string loader.
    let { ruleIndex } = helpers.getLoadersByName(config, 'css-loader')[0]
    config.module.rules[ruleIndex] = {
      test: /\.css$/,
      use: [{ loader: 'to-string-loader' }, { loader: 'css-loader' }],
    }
  }
}
