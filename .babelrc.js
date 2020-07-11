module.exports = function (api, options) {
  const { NODE_ENV } = options || process.env
  const isDevelopment = NODE_ENV === 'development'
  const envModules = NODE_ENV === 'es' ? false : 'cjs'
  const useESModules = envModules === 'cjs' ? false : true

  if (api) {
    // babel缓存
    api.cache.invalidate(() => NODE_ENV)
  }

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          modules: envModules // 模块转换的目标
        }
      ],
      [
        "@babel/preset-react",
        {
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
      [
        "@babel/plugin-transform-runtime",
        {
          useESModules // 是否包含commonjs的语义
        }
      ]
    ],
  }
}
