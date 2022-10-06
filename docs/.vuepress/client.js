// 一个基础的客户端配置文件
import { defineClientConfig } from '@vuepress/client'
import Layout from './layout/Layout.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {},
  setup() {},
  rootComponents: [],
  layouts: {
    Layout,
  },
})