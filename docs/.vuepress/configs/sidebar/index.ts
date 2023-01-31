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
      collapsible: false,
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
    {
      text: 'nest',
      collapsible: true,
      children: [
        '/doc/nest/index.md',
      ]
    },
    {
      text: 'GameList',
      collapsible: true,
      children: [
        '/doc/gameList/index.md',
      ]
    },
  ],

}