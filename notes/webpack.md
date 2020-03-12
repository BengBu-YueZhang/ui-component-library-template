### splitChunks

组件库的打包不需要配置 `splitChunks` 此项。所有的js文件都应该打包到一个文件中。

### externals

externals配置选项提供了「从输出的 bundle 中排除依赖」的方法。相反，所创建的 bundle 依赖于那些存在于用户环境(consumer's environment)中的依赖。此功能通常对 library 开发人员来说是最有用的，然而也会有各种各样的应用程序用到它。

用最通俗的话解释，externals里的库，是组件库所依赖的（比如React），但是我们在打包过程中，需要将它们排除在打包文件之中。组件库在使用的时候，可以使用用户本地的依赖。
