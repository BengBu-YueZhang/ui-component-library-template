const { resolve } = require('path');
const {
  src,
  dest,
  series
} = require('gulp');
const clean = require('gulp-clean-css');
const less = require('gulp-less');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const babelrc = require('../.babelrc.js');

const OUTPUT = resolve(__dirname, '../dist/styles');
const THEMES = ['default', 'dark'];
const LIB_ENTRY = [
  resolve(__dirname, '../src/**/*.tsx'),
  resolve(__dirname, '../src/**/*.ts'),
  resolve(__dirname, '../src/*.tsx')
];
const LIB_OUTPUT = resolve(__dirname, '../lib');

const buildCss = () => {
  return THEMES.map(theme => {
    return src(resolve(__dirname, `../src/styles/themes/${theme}/index.less`))
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(rename(`react-ui-components-library.${theme}.css`))
    .pipe(dest(OUTPUT));
  })
};

const buildUglifyCss = () => {
  return THEMES.map(theme => {
    return src(resolve(__dirname, `../src/styles/themes/${theme}/index.less`))
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(clean())
    .pipe(rename(`react-ui-components-library.${theme}.min.css`))
    .pipe(dest(OUTPUT));
  })
};

const buildLib = () => {
  return src(LIB_ENTRY)
    .pipe(babel(babelrc()))
    .pipe(dest(LIB_OUTPUT));
}

exports.style = series(
  ...buildCss,
  ...buildUglifyCss
);

exports.lib = series(
  buildLib
);
