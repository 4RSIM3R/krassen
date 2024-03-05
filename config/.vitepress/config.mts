import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Krassen",
  description: "Catatan Troubleshoot Instalasi, Upgrade Dan Operational SIMGOS",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Beranda', link: '/' },
      { text: 'Instalasi', link: '/installation/' },
      { text: 'Upgrade', link: '/upgrade/' },
      { text: 'Operasional', link: '/operational/' },
      { text: 'Catatan Lain', link: '/notes/' }
    ],

    sidebar: [
      {
        text: 'Instalasi',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Upgrade',
        items: [
          { text: '"MySQL 8.0 Community Server" repository are already ', link: '/mysql-repository-already' },
        ]
      },
      {
        text: 'Operasional',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Catatan Lain',
        items: [
          { text: 'TM Bogor 5 Maret 2024', link: '/notes/rme-bogor-5-maret' },
          { text: 'Link Penting', link: '/notes/link' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'mastodon', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
