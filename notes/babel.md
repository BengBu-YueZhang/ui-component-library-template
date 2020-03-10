## babel插件

### @babel/plugin-transform-runtime && @babel/runtime

- `@babel/plugin-transform-runtime`, 作为开发时的依赖。用来转换代码，
- `@babel/runtime`，作为生产时的依赖。转换后的代码需要依赖运行时本身所以，所以需要将`@babel/runtime`作为生产的依赖。

### @babel/runtime

> 这个细节问题，我之前一直没有注意过。或者说根本没有考虑过。如果使用 `@babel/runtime`，是不会对 `Promise`, `字符串.includes`, 等API做转换的。

- `@babel/runtime`,
- `@babel/runtime-corejs2`, 会对全局`Promise`变量，或者静态属性`Array.from`做替换。
- `@babel/runtime-corejs3`, 除了全局之外，也会对实例属性比如`includes`做替换。

### @babel/preset-typescript

目前不在推荐使用 `ts-loader`, 对ts的代码进行转换。推荐使用 `@babel/preset-typescript`

- [使用@babel/preset-typescript取代awesome-typescript-loader和ts-loader](https://www.bbsmax.com/A/l1dyZbrGze/)
- [[译] TypeScript 和 Babel：一场美丽的婚姻](https://juejin.im/post/5c822e426fb9a04a0a5ffb49)
