---
lang: zh-CN
title: Vuepress
description: Vuepress用于个人博客搭建
---

# Vuepress

> 谨以此篇纪念2022年十一期间此博客的搭建😇
> 
> Repo: [项目仓库](https://github.com/vuepress/vuepress-next)
>
> Doc: [官方文档](https://v2.vuepress.vuejs.org/zh/)

## 项目搭建:slightly_smiling_face:

### 创建项目

:::tip
推荐使用Github Desktop新建一个Repository(仓库)。
:::

### 配置环境

1. 安装依赖

<CodeGroup>
<CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn add -D vuepress@next
```

</CodeGroupItem>

<CodeGroupItem title="NPM" active>

```bash:no-line-numbers
npm install -D vuepress@next
```

</CodeGroupItem>
</CodeGroup>

2. `package.json` 添加如下内容

    ```json
    "scripts": {
        "docs:dev": "vuepress dev docs",
        "docs:build": "vuepress build docs",
        "docs:clean-dev": "vuepress dev docs --clean-cache"
    },
    "type": "module"  // 声明js脚本是模块, 从而允许js的模块化导入
    ```
    :::tip JavaScript模块 
    [关于JS模块化导入导出的内容, 详情请点击这里访问](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules)
    :::

3. `.gitignore`文件添加如下内容

    ```gitignore
    node_modules
    .cache
    .temp
    ```

### 发表Blog

1. 在项目的 `docs` 目录存放博客文档
    + 新建 `docs` 文件夹
        ```sh
        mkdir docs
        ```
    + 编写 `/docs/README.md`
        ```sh
        echo '# Hello VuePress' > docs/README.md
        ```

    :::tip README.md
    `README.md` 文件作为根路径被访问,
    比如说 `/docs` 作为博客的资源根目录, 则 `/docs/README.md` 的访问路径后缀为 `/`, 
    `/docs/notes/README.md`的访问路径为 `/notes/`
    :::

2. 运行项目
    ```bash:no-line-numbers
    npm run docs:dev
    ```
    :::danger Congratulations!
    至此，博客的雏形就搭建起来喽，不愧是你！:heart_eyes:
    :::

3. 美化博客:heart_eyes_cat:
    Github上有许多Vuepress的主题，可以自行选择安装(懒狗直接选择默认主题:sleeping:, 比如说Kaikai)

## 项目部署:wink:
### 部署到Github Pages

#### 创建 Github Action

1. 新建目录
    ```bash
    mkdir .github/workflows
    ```
2. 将以下内容添加到 `.github/workflows/docs.yaml`
    ```yaml
    name: docs

    on:
    # 每当 push 到 main 分支时触发部署
    push:
        branches: [main]
    # 手动触发部署
    workflow_dispatch:

    jobs:
    docs:
        runs-on: ubuntu-latest

        steps:
        - uses: actions/checkout@v3
            with:
            # “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录
            fetch-depth: 0

        - name: Setup Node.js
            uses: actions/setup-node@v3
            with:
            # 选择要使用的 node 版本
            node-version: '16'

        # 缓存 node_modules
        - name: Cache node modules
            id: cache-npm
            uses: actions/cache@v3
            env:
            cache-name: cache-node-modules
            with:
            # npm cache files are stored in `~/.npm` on Linux/macOS
            path: ~/.npm
            key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}
            restore-keys: |
                ${{ runner.os }}-build-${{ env.cache-name }}-
                ${{ runner.os }}-build-
                ${{ runner.os }}-

        - if: ${{ steps.cache-npm.outputs.cache-hit != 'true' }}
            name: List the state of node modules
            continue-on-error: true
            run: npm list

        - name: Install dependencies
            run: npm install

        # 运行构建脚本
        - name: Build VuePress site
            run: npm run docs:build

        # 查看 workflow 的文档来获取更多信息
        # @see https://github.com/crazy-max/ghaction-github-pages
        - name: Deploy to GitHub Pages
            uses: crazy-max/ghaction-github-pages@v3
            with:
            # 部署到 gh-pages 分支
            target_branch: gh-pages
            # 部署目录为 VuePress 的默认输出目录
            build_dir: docs/.vuepress/dist
            env:
            # @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret
            GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    ```
3. 配置Github Pages
    在自己的repo中按下图配置
    ![GitHub Pages](\images\tools\Vuepress\GithubPages.png)

## 遇到的问题:lying_face:

### 自定义Vue组件

:::danger Reference Error
使用 `npm run docs:build` 命令打包时由于客户端的window, localStroage等接口服务端不存在而导致的错误。
:::

> 解决方案: 在 `.md` 文件中使用组件时添加 `<ClientOnly></ClientOnly>` 标签包裹组件

```md
<ClientOnly>
    <MyComponent/>
</ClientOnly>
```

:::tip Component
安装 `@vuepress/plugin-register-components` 插件后, 组件名自动生成, 规则为:
1. `docs/.vuepress/components/`路径下的路径名加文件名拼接而成。
2. 比如说 `docs\.vuepress\components\todo\App.vue` 对应的组件名为 `<todo-App/>`
:::

