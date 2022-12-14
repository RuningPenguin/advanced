// import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import { searchPlugin } from '@vuepress/plugin-search'
import { path } from '@vuepress/utils'
import { registerComponentsPlugin } from "@vuepress/plugin-register-components"; // 自定义组件

export const Plugins = [
  registerComponentsPlugin({
    componentsDir: path.resolve(__dirname, '../../components')
  }),
  searchPlugin({
    locales: {
      '/': {
        placeholder: 'Search',
      },
      '/zh/': {
        placeholder: '搜索',
      },
    },
  }),
  // docsearchPlugin({
  //   appId: '0RO9XLJ8K8',
  //   // apiKey: 'e83c2e6dcee439797143403cc2df38f3',
  //   apiKey: '33a999dda3e82d50eb838e29efde4fc4',
  //   indexName: 'runingpenguinio',
  //   placeholder: '搜索文档',
  //   translations: {
  //     button: {
  //       buttonText: '搜索文档',
  //       buttonAriaLabel: '搜索文档',
  //     },
  //     modal: {
  //       searchBox: {
  //         resetButtonTitle: '清除查询条件',
  //         resetButtonAriaLabel: '清除查询条件',
  //         cancelButtonText: '取消',
  //         cancelButtonAriaLabel: '取消',
  //       },
  //       startScreen: {
  //         recentSearchesTitle: '搜索历史',
  //         noRecentSearchesText: '没有搜索历史',
  //         saveRecentSearchButtonTitle: '保存至搜索历史',
  //         removeRecentSearchButtonTitle: '从搜索历史中移除',
  //         favoriteSearchesTitle: '收藏',
  //         removeFavoriteSearchButtonTitle: '从收藏中移除',
  //       },
  //       errorScreen: {
  //         titleText: '无法获取结果',
  //         helpText: '你可能需要检查你的网络连接',
  //       },
  //       footer: {
  //         selectText: '选择',
  //         navigateText: '切换',
  //         closeText: '关闭',
  //         searchByText: '搜索提供者',
  //       },
  //       noResultsScreen: {
  //         noResultsText: '无法找到相关结果',
  //         suggestedQueryText: '你可以尝试查询',
  //         reportMissingResultsText: '你认为该查询应该有结果？',
  //         reportMissingResultsLinkText: '点击反馈',
  //       },
  //     },
  //   },

  // }),
]