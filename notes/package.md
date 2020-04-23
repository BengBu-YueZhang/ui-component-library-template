### peerDependencies

用一句最直白的话描述 peerDependencies。如果你需要安装我这个库（UI库）。必须先安装peerDependencies中指定的react, react-dom库。

因为我们之前通过webpack.externals以及将react，react-dom等依赖库，排除在外了。所以组件库本身需要用户本地的依赖。

### main

入口文件

### typings

描述文件路径
