module.exports = function (api) {
  const { NODE_ENV } = process.env
  const isDevelopment = NODE_ENV === 'development'
  const envModules = NODE_ENV === 'es' ? true : 'cjs'

  if (api) {
    // babel缓存
    api.cache.invalidate(() => NODE_ENV)
  }

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          modules: envModules
        }
      ]
      [
        "@babel/preset-react",
        {
          // @babel/plugin-transform-react-jsx-self
          // @babel/plugin-transform-react-jsx-source
          development: isDevelopment
        }
      ],
      "@babel/preset-typescript",
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
