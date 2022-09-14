import type { SidebarConfig } from '@vuepress/theme-default';

export const SideBar: SidebarConfig = {
  '/text': [
    {
      text: 'text',
      collapsible: true,
      children: [
        '/text/index.md',
      ]
    },
  ],
  '/code': [
    {
      text: 'code',
      collapsible: true,
      children: [
        '/code/index.md',
      ]
    },
  ],
  '/doc': [
    {
      text: 'vite',
      collapsible: true,
      children: [
        '/doc/vite-vue/index.md',
      ]
    },
    {
      text: 'homeBrew',
      collapsible: true,
      children: [
        '/doc/homeBrew/index.md',
      ]
    },
  ],

}