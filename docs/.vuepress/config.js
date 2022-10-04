// 一个基础的配置文件
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'


export default defineUserConfig({
  locales: {
    '/': {
      lang: 'zh-CN',
      title: "Kaikai 的个人博客",
      description: 'Kaikai 的个人博客',
    },
    '/en/': {
      lang: 'en-US',
      title: "Kaikai's Blog",
      description: 'Kaikai 的个人博客',
    },
  },
  theme: defaultTheme({
    // 在这里进行配置
    navbar: [
      // 嵌套 Group - 最大深度为 2
      {
        text: 'Group',
        children: [
          {
            text: 'SubGroup',
            children: ['/group/sub/foo.md', '/group/sub/bar.md'],
          },
        ],
      },
      // 控制元素何时被激活
      {
        text: 'Group 2',
        children: [
          {
            text: 'Always active',
            link: '/',
            // 该元素将一直处于激活状态
            activeMatch: '/',
          },
          {
            text: 'Active on /foo/',
            link: '/not-foo/',
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式
            activeMatch: '^/foo/',
          },
        ],
      },
    ],
    logo: '/images/logo.jpg',
    logoDark: '/images/logo_dark.jpg',
    repo: 'https://github.com/Kaikaikaifang/Kaikai-s-Blog',
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        lastUpdatedText: '最近更新时间',
        editLinkText: '编辑页面',
      },
      '/en/': {
        selectLanguageName: 'English',
        lastUpdatedText: 'Last Updated',
        editLinkText: 'Edit this page',
      },
    },
    // sidebar: 'auto'
    sidebar: {
      '/': [
        {
          text: 'VuePress Reference',
          collapsible: true,
          children: ['/reference/cli.md', '/reference/config.md'],
        },
        {
          text: 'Bundlers Reference',
          collapsible: true,
          children: ['/reference/bundler/vite.md', '/reference/bundler/webpack.md'],
        },
      ],
    },
    sidebarDepth: 2,   //  number default: 2
    editLink: true,
    docsDir: "docs",
    lastUpdated: true,
  }),
})

