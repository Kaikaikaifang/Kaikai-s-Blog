// 一个基础的配置文件
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'


export default defineUserConfig({
  base: "/Kaikai-s-Blog/",
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
    logo: '/images/logo.jpg',
    logoDark: '/images/logo_dark.jpg',
    repo: 'https://github.com/Kaikaikaifang/Kaikai-s-Blog',
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        lastUpdatedText: '最近更新时间',
        editLinkText: '编辑页面',
        contributorsText: '贡献者',
        tip: '提示',
        warning: '警告',
        danger: '危险',
        notFound: ['没有找到该页面哦'],
        backToHome: '返回首页',
        navbar: [
          {
            text: '区块链技术',
            link: '/Blockchain/summary.md'
          }
        ]
      },
      '/en/': {
        selectLanguageName: 'English',
        lastUpdatedText: 'Last Updated',
        editLinkText: 'Edit this page',
        contributorsText: 'Contributors',
        tip: 'TIP',
        warning: 'WARNING',
        navbar: [
          {
            text: 'Blockchain',
            link: '/Blockchain/summary.md'
          }
        ]
      },
    },
    sidebar: 'auto',
    sidebarDepth: 2,   //  number default: 2
    editLink: true,
    docsDir: "docs",
    lastUpdated: true,
    contributors: true
  })
})

