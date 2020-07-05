module.exports = function (api) {
  const { NODE_ENV } = process.env
  const isDevelopment = NODE_ENV === 'development'

  if (api) {
    api.cache.invalidate(() => NODE_ENV)
  }

  return {
    presets: [
      "@babel/preset-env",
      [
        "@babel/preset-react",
        {
          development: isDevelopment
        }
      ]
    ],
    plugins: [
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-export-default-from",
      "@babel/plugin-proposal-export-namespace-from",
      "@babel/plugin-proposal-optional-chaining",
      "@babel/plugin-transform-runtime"
    ],
  }
}
