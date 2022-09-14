import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default'
import { Head, NavBar, SideBar, Plugins } from './configs'


module.exports = defineUserConfig({
  base: '/advanced/',// 目录前缀
  title: '进阶之路',// 站点标题
  description: '前端进阶之路',// 站点描述
  lang: 'zh-CN', // 语言
  head: Head,
  plugins: Plugins, // 插件
  theme: defaultTheme({  // 主题配置
    tip: '提示',
    warning: '注意',
    danger: '警告',
    logo: '/logo/qie-b.png',
    logoDark: '/logo/qie-b.png',
    repo: 'https://github.com/RuningPenguin/advanced/tree/gh-pages',
    editLink: false, // 是否启用 编辑此页 链接
    docsBranch: "gh-pages",
    lastUpdated: false, // 是否显示最后更新时间
    navbar: NavBar,
    sidebar: SideBar, // 侧边栏
    // 404 page
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
    ],
    backToHome: '返回首页',
    openInNewWindow: '在新窗口打开',
    toggleColorMode: '切换颜色模式',
    toggleSidebar: '切换侧边栏',
  }),

})