// 一个基础的配置文件
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { pwaPopupPlugin } from '@vuepress/plugin-pwa-popup'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'
import { viteBundler } from '@vuepress/bundler-vite'


const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  head: [
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['link', { rel: 'icon', href: '/images/logo/favicon.ico' }]
  ],
  base: "/Kaikai-s-Blog/",
  locales: {
    '/': {
      lang: 'zh-CN',
      title: "Kaikai's Blog",
      description: 'Kaikai 的个人博客',
    }
  },
  theme: defaultTheme({
    // 在这里进行配置
    logo: '/images/logo/flower.png',
    repo: 'https://github.com/Kaikaikaifang/Kaikai-s-Blog',
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        lastUpdatedText: 'Last Updated',
        editLinkText: 'Edit this page',
        contributorsText: 'Contributors',
        tip: 'TIP',
        warning: 'WARNING',
        notFound: ['没有找到该页面哦'],
        backToHome: '返回首页',
        navbar: [
          {
            text: 'Notes',
            link: '/notes/',
            children: [
              {
                text: 'Blockchain',
                children: [
                  {
                    text: 'Summary',
                    link: '/notes/BlockChain/summary.md'
                  }
                ]
              },
              {
                text: 'FrontEnd',
                children: [
                  {
                    text: 'Vue',
                    link: '/notes/FrontEnd/Vue/LearnVue.md'
                  }
                ]
              }
            ]
          },
          {
            text: 'Works',
            link: '/works/',
            children: [
              {
                text: 'Todo',
                link: '/works/todo-list.md'
              }
            ]
          },
          {
            text: 'Tools',
            link: '/tools/',
            children: [
              {
                text: 'Emoji',
                link: '/tools/emoji.md'
              },
              {
                text: 'Vuepress',
                link: '/tools/Vuepress.md'
              }
            ]
          },
        ]
      }
    },
    sidebar: 'auto',
    sidebarDepth: 2,   //  number default: 2
    editLink: true,
    docsDir: "docs",
    lastUpdated: true,
    contributors: true
  }),
  plugins: [
    docsearchPlugin({
      apiKey: '<API_KEY>',
      indexName: '<INDEX_NAME>',
      locales: {
        '/': {
          placeholder: 'Search Documentation',
          translations: {
            button: {
              buttonText: 'Search Documentation',
            },
          },
        },
        '/zh/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
            },
          },
        },
      },
    }),
    pwaPlugin({
      // 配置项
    }),
    pwaPopupPlugin({
      // 配置项
            locales: {
        '/': {
          message: 'New content is available.',
          buttonText: 'Refresh',
        },
        '/zh/': {
          message: '发现新内容可用',
          buttonText: '刷新',
        },
      },
    }),
    registerComponentsPlugin({
      // 配置项
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
})