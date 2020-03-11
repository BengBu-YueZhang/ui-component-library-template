const { resolve } = require('path')
const {
  src,
  dest,
  series
} = require('gulp')
const clean = require('gulp-clean-css')
const less = require('gulp-less')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')

const ENTRY = resolve(__dirname, '../src/styles/index.less')
const OUTPUT = resolve(__dirname, '../dist/styles')

const buildCss = () => {
  return src(ENTRY)
  .pipe(less())
  .pipe(autoprefixer())
  .pipe(rename('ui-component-library-template.css'))
  .pipe(dest(OUTPUT))
}

const buildUglifyCss = () => {
  return src(ENTRY)
  .pipe(less())
  .pipe(autoprefixer())
  .pipe(clean())
  .pipe(rename('ui-component-library-template.min.css'))
  .pipe(dest(OUTPUT))
}

exports.default = series(
  buildCss,
  buildUglifyCss
)
