import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Krassen",
  description: "Catatan Troubleshoot Instalasi, Upgrade Dan Operational SIMGOS",
  ignoreDeadLinks: true,
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
          { text: 'Pendahuluan', link: '/markdown-examples' },
          { text: 'Kebutuhan Hardware', link: '/api-examples' },
          { text: 'Almalinux', link: '/api-examples' },
          { text: 'Centos', link: '/api-examples' },
          { text: 'Rocky Linux', link: '/api-examples' },
          { text: 'Redhat Linux', link: '/api-examples' }
        ]
      },
      {
        text: 'Upgrade',
        items: [
          { text: 'MySQL repository are already ', link: '/mysql-repository-already' },
        ]
      },
      {
        text: 'Operasional',
        items: [
          { text: 'Error Cetak Report', link: '/markdown-examples' },
        ]
      },
      {
        text: 'Catatan Lain',
        items: [
          { text: 'TM Bogor 5 Maret 2024', link: '/notes/rme-bogor-5-maret' },
          { text: 'TM Bogor 6 Maret 2024', link: '/notes/rme-bogor-6-maret' },
          { text: 'Link Penting', link: '/notes/link' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
    
  }
})
