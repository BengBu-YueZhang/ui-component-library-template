## 目录划分说明

```
# 📁 build
# |——  📃 gulpfile.js  // gulp的配置文件，负责打包css，以及编译src目录
# |——  📃 webpack.base.config.js // webpack基础配置
# |——  📃 webpack.min.config.js // webpack生产环境打包配置
# |——  📃 webpack.normal.config.js // webpack开发环境打包配置
# 📁 coverage // 单元测试报告生成目录
# 📁 dist // js和css打包后的目录，包含了js的入口文件，以及组件库的样式文件
# 📁 lib // 直接对src目录使用babel编译后的目录，主要用于组件库的按需引入
# 📁 script // 一些脚本文件的目录
# |——  📃 declaration.js // 生成d.ts的脚本文件
# 📁 src // 组件库源码目录
# |——  📁 components // 组件库的目录
# |——  |—— 📁 Button // Button组件目录
# |——  📁 styles // 样式目录
# |——  📁 utils // 工具函数目录
# |——  📃 index.tsx // 入口文件
# 📁 types // d.ts 声明文件目录，声明了组件的类型，可以在ts项目使用本库，提供类型声明
# 📃 .babelrc.js // babel的配置文件
# 📃 .editorconfig // 编辑器的配置文件
# 📃 .eslintignore // eslint检查白名单目录
# 📃 .eslintrc.js // eslint的配置（使用Airbnb爱彼迎的typescript规范）
# 📃 LICENSE // 开源协议文件
# 📃 stylelint.config.js // stylelint配置文件
# 📃 tsconfig.json // ts配置文件
# 📃 tsconfig.types.json // 用于d.ts的配置文件
```

## 命令说明

```js
// 清除上一次打包的结果的命令
"clear": "rimraf dist && rimraf lib && rimraf types",
// 打包开发环境的js代码
"build:dev": "cross-env NODE_ENV=development webpack --config build/webpack.normal.config.js",
// 打包生产环境的js代码
"build:prod": "cross-env NODE_ENV=production webpack --config build/webpack.min.config.js",
// 打包样式代码
"build:style": "gulp style --gulpfile build/gulpfile.js",
// 上面几个打包命令进行整合的命令
"build:dist": "npm run build:style && npm run build:dev && npm run build:prod",
// 直接使用babel对src目录进行编译的命令
"build:lib": "gulp lib --gulpfile build/gulpfile.js",
// 生成d.ts的命令
"build:declaration": "node script/declaration.js",
// 对上面所有打包命令的汇总
"build": "npm run clear && npm run build:dist && npm run build:lib && npm run build:declaration",
// 运行单元测试的命令
"jest": "jest --coverage",
// 重新生成快照的命令
"jest:snapshot": "jest -u",
// 对ts代码进行eslint检查的命令
"lint-ts": "eslint src --ext .ts,.tsx",
// 对js代码进行eslint检查的命令
"lint-js": "eslint src --ext .js,.jsx",
// 对css代码进行检查的命令
"lint-style": "stylelint  \"src/styles/**/*.less\"",
// 代码检查的命令汇总
"lint": "npm run lint-ts && npm run lint-style",
// 代码检查和测试命令汇总
"test": "npm run lint && npm run jest",
```

## commit规范

commit注释规范说明，比如添加了一个新功能，commit的注释应该为，`feat: 添加了功能xxx`

```
- feat : 新功能
- fix : 修复bug
- docs : 文档改变
- style : 代码格式改变
- refactor : 某个已有功能重构
- perf : 性能优化
- test : 增加测试
- build : 改变了build工具 如 grunt换成了 npm
- revert : 撤销上一次的 commit
- chore : 构建过程或辅助工具的变动
```

## 使用说明


```js
import { Button } from '组件库'

function App() {
  return <Button>Hello World</Button>;
}
```

### 引入全局样式

```js
import 'react-ui-components-library/dist/styles/react-ui-components-library.css'
```

### 组件按需引入说明

安装 `babel-plugin-import` 插件，并添加如下的babel配置

```js

{
  "plugins": [
    [
      "import", {
        "libraryName": "react-ui-components-library",
        "libraryDirectory": "lib/components",
        "camel2DashComponentName": false
      }
    ]
  ]
}
```


