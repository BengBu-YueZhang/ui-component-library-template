## Babel7在转义TS时能不能生成d.ts文件

- [Babel 7 + Typescript - extracting declaration `d.ts` file on transpile](https://github.com/babel/babel/issues/9668)

解决方案：单独创建一个 `tsconfig` 的配置文件，单独运行 `tsc` 命令，创建 `d.ts` 文件。
