
## 整体思路

## babel配置

```shell
# 安装
# preset
@babel/preset-react # 用来处理jsx的语法
@babel/preset-typescript # 用来转换ts文件
@babel/core # Babel的核心模块
@babel/preset-env # 用于语法转换

# 用来替代@babel/polyfill，减小体积，减少全局污染
# https://babeljs.io/docs/en/babel-plugin-transform-runtime
# The transformation plugin is typically used only in development, but the runtime itself will be depended on by your deployed code. See the examples below for more details.
@babel/plugin-transform-runtime # 开发依赖
@babel/runtime # 生产依赖

# plugins
@babel/plugin-proposal-class-properties # 支持static属性和方法
@babel/plugin-proposal-export-default-from # 支持export v from 'mod';语法
@babel/plugin-proposal-export-namespace-from # export * as ns from 'mod';语法
@babel/plugin-proposal-optional-chaining # 支持obj?.qux?.baz语法
```

### 使用@babel/preset-typescript取代awesome-typescript-loader和ts-loader

https://www.bbsmax.com/A/l1dyZbrGze/

https://iamturns.com/typescript-babel/

### 使用typescript-eslint替代tslint

https://github.com/typescript-eslint/typescript-eslint

### .babelrc.js 使用js时，需要注意缓存策略

https://babeljs.io/docs/en/config-files

### 如何创建d.ts文件

https://github.com/babel/babel/issues/9668

## eslint配置

参考配置： https://github.com/iamturns/create-exposed-app/blob/master/.eslintrc.js

## webpack配置

### splitChunks

是不需要配置的，所有的js文件，都应该打包一个文件中

### externals

externals 配置选项提供了「从输出的 bundle 中排除依赖」的方法。相反，所创建的 bundle 依赖于那些存在于用户环境(consumer's environment)中的依赖。此功能通常对 library 开发人员来说是最有用的，然而也会有各种各样的应用程序用到它。

比如组件库需要依赖React，但是我们又不能在组件库中再打包一个React，我们可以使用用户项目中安装的React

https://www.webpackjs.com/configuration/externals/

## package.json

### peerDependencies

用一句最直白的话描述 peerDependencies。如果你需要安装我这个库（UI库）。必须先安装peerDependencies中指定的react, react-dom库。

因为我们之前通过webpack.externals以及将react，react-dom等依赖库，排除再外了。所以需要用户本地的依赖。

https://www.cnblogs.com/wonyun/p/9692476.html


