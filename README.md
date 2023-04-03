#高德地图api

## 技术说明

本项目采用[vue3](https://v3.cn.vuejs.org/)框架和[vite](https://vitejs.dev/)构建工具。

数据请求使用[axios](http://www.axios-js.com/)。

数据请求库[vue-request](https://www.attojs.com/)。

路由使用自动化的[vue-router](https://router.vuejs.org/)库。

CSS 使用[windicss](https://windicss.org/)封装的[tailwindcss](https://www.tailwindcss.cn/)。




## 目录结构

- .editorconfig, .prettierrc.yml, .prettierignore - 代码风格控制
- .eslintrc.js, .eslintignore, .stylelintrc.yml, .stylelintignore - 代码质量控制
- Dockerfile, .dockerignore, default.conf - 镜像打包配置
- index.html - 首页
- public - 运行期根目录
- src/main.js - 入口
- src/App.vue - 根组件
- src/assets - 静态资源文件夹
- src/pages - 路由目录（每个不是以下划线开头的文件对应一个前端路由）
- src/layouts - 路由出口目录
- src/layouts/default.vue -默认路由出口 
- src/layouts/empty.vue -错误页面路由出口 
- src/pages/[...all].vue - 404 页面
- src/pages/index.vue - 首页
- src/store - 数据访问
- src/components - 组件目录
- src/util - 通用工具
## node版本
16.1.0

## 脚本说明

1. 依赖安装/同步

```sh
yarn
```

2. 依赖升级

```sh
yarn update
```

3. 代码检查

```
yarn lint
```

4. 开发调试

```sh
yarn dev
```

5. 打包编译

```sh
yarn build
```

6. 生成镜像

```sh
docker build -t <镜像名>:<版本号> .
```
