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
        link: '/installation/',
        items: [
          { text: 'Pendahuluan', link: '/installation/pendahuluan' },
          { text: 'Kebutuhan Hardware', link: '/installation/hardware' },
          { text: 'Almalinux', link: '/installation/almalinux' },
          { text: 'Centos', link: '/installation/centos' },
          { text: 'Rocky Linux', link: '/installation/rocky' },
          { text: 'Redhat Linux', link: '/installation/redhat' }
        ]
      },
      {
        text: 'Upgrade',
        link: '/upgrade/',
        items: [
          { text: 'MySQL repository are already ', link: '/mysql-repository-already' },
        ]
      },
      {
        text: 'Operasional',
        link: '/operational/',
        items: [
          { text: 'Scaling PHP', link: '/operational/scaling-php' },
          { text: 'Scaling MySql', link: '/operational/scaling-db' },
          { text: 'Backup DB', link: '/operational/backup-db' },
          { text: 'Stock', link: '/operational/stock' },
          { text: 'Report', link: '/operational/report' },
          { text: 'Layanan', link: '/operational/layanan' },
        ]
      },
      {
        text: 'Catatan Lain',
        link: '/notes/',
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
