gulp简单的使用是非常简单的，具体的细节文档都有。主要工作就是各种插件的组合。以这个项目为例

```js
const { resolve } = require('path')
const {
  src,
  dest,
  series
} = require('gulp')
// 压缩css的插件
const clean = require('gulp-clean-css')
// 编译less的插件
const less = require('gulp-less')
// 重命名的插件
const rename = require('gulp-rename')
// 自动添加前缀的插件
const autoprefixer = require('gulp-autoprefixer')

// 入口
const ENTRY = resolve(__dirname, '../src/styles/index.less')
// 出口
const OUTPUT = resolve(__dirname, '../dist/styles')

// 任务1: 从ENTRY入口开始打包css，不进行压缩
const buildCss = () => {
  return src(ENTRY)
  .pipe(less())
  .pipe(autoprefixer())
  .pipe(rename('ui-component-library-template.css'))
  .pipe(dest(OUTPUT))
}

// 任务2: 从ENTRY入口开始打包css，进行压缩
const buildUglifyCss = () => {
  return src(ENTRY)
  .pipe(less())
  .pipe(autoprefixer())
  .pipe(clean())
  .pipe(rename('ui-component-library-template.min.css'))
  .pipe(dest(OUTPUT))
}

// 导出任务
// series，会依次执行任务1，任务2
exports.default = series(
  buildCss,
  buildUglifyCss
)
```
