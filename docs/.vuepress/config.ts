import { defineUserConfig } from 'vuepress';
import { path } from '@vuepress/utils'
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";


module.exports = defineUserConfig({
  base: '/advanced/',
  title: '进阶之路',
  description: '前端进阶之路',
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components')
    })
  ]
})