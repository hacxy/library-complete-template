# Library Complete Template

这是一个具有完整基础设施并且使用 typescript 开发的 javascript 库项目开发模板, 帮助你快速搭建一个自动生成文档的 javascript 工具库.

[English](./README.md) | 简体中文

你可以前往 [bilibili](https://www.bilibili.com/video/BV1AC411V7kt) 观看这个模板的详细介绍视频

## 特点

- 开箱即用, 具备完整的基础设施, 无复杂配置
- 使用 typescript 开发, 我们都喜欢 type
- 极快的, 使用 [vite](https://vitejs.dev/) 构建, 享受 vite 带来的极速体验
- 注释即文档, 使用 [typedoc](https://typedoc.org/) 以及 [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org/)自动输出 markdown 文档, 并交给 [vitepress](https://vitepress.dev/) 驱动
- 使用 [vitest](https://vitest.dev/) 进行单元测试, 更友好的测试体验, 支持 ui 模式

## 示例

以下是正在使用这个模板的项目:

- [tianjie](https://github.com/hacxy/tianjie) 文档: <https://tianjie.hacxy.cn>

## 使用模板

### 将模板创建至本地

- 您可以使用 [create-ts-frame](https://github.com/hacxy/create-ts-frame) 快速的将项目创建至您的本地

执行创建命令时可以通过选项指定项目名称和模板名称

```sh
# npm 7+, 需要额外的双破折号:
npm create ts-frame@latest my-utils -- --template library-complete

# yarn：
yarn create ts-frame my-utils --template library-complete

# pnpm：
pnpm create ts-frame my-utils --template library-complete

# Bun：
bun create ts-frame my-utils --template library-complete
```

### 安装依赖

```sh
cd my-utils
npm install
```

### 开发

- 开发模式:

  这将开启监听模式为将 ts 文件打包至 dist 目录

  ```sh
  npm run dev
  ```

- 打包生产环境代码

  ```sh
  npm run build
  ```

- 运行单元测试

  ```sh
  npm run test
  ```

- 运行具有可视化操作界面的单元测试

  ```sh
  npm run test:ui
  ```

- 运行浏览器环境的 demo

  ```sh
  npm run demo:web
  ```

- 运行 node 环境的 demo

  ```sh
  npm run demo:node
  ```

- 开发文档

  ```sh
  npm run docs:dev
  ```

- 打包文档

  ```sh
  npm run docs:build
  ```

### 发布

执行发布命令时, 将使用 [release-it](https://github.com/release-it/release-it) 工具发布

```sh
npm run release
```

## 文档如何生成

当执行 `npm run docs:dev` 时,typedoc 会开启监听模式, 并根据所有导出的方法生成 markdown 文档至 `docs/src` 目录, 同时 vitepress 开发模式将会启动, 你可以通过<http://localhost:5173/>预览你的文档内容

文档内容还可以在方法的注释中补充, 但是需要注意, 注释内容应该按照 [typedoc](https://typedoc.org/guides/overview/) 规范来编写. 以下是一个示例:

````ts
/**
 * @name 这是一个说hello的方法
 * @group 工具函数
 * @param name 名称
 * @returns
 * @example
 * ```ts
 * console.log(sayHello('hacxy')); // Hello, hacxy!
 * ```
 */
export const sayHello = (name: string): string => {
  return `Hello, ${name}!`;
};
````

在这段示例中, 我们丰富了该方法在文档的标题、分组、 参数说明, 以及代码示例, 如果您之前编写过 jsdoc 注释那么应该对此并不会感到陌生, 但是如果您是第一次接触, 请参考 [typedoc](https://typedoc.org/guides/overview/) 来学习如何编写.
另外在注释中我们还可以使用 markdown 语法, 当你使用 markdown 语法时会将 markdown 内容直接渲染至文档中.

上述示例中所用的 tag 作用:

- @name 方法名
- @group 方法所属分组, 这个属性会额外的影响文档的侧边导航栏
- @param 参数说明
- @returns 返回值说明
- @example 代码示例

你不应该去修改 `docs/src` 目录下的任何文件, 因为这些文件都是通过 typedoc 生成的. 它们最终都会被 vitepress 驱动.

## 开发规范

所有模块都应该统一在`src/index.ts`被导出, 这样 vite 才能找到这个入口为你构建正确的 js 代码, 同时 typedoc 也是通过这个入口来为模块生成文档的.

如果你对此还不是很清楚, 那么可以查看目前正在使用此模板的项目: <https://github.com/hacxy/tianjie/blob/main/src/index.ts>
