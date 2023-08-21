// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Quán Cài Win',
  tagline: 'Khóa học cài Windows dành cho tất cả mọi người. Không rành về máy tính cùng có thể làm!',
  url: 'https://quancaiwin.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icons.png',
  organizationName: 'quancaiwin',
  projectName: 'quancaiwin',
  deploymentBranch: 'gh-pages',
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/quancaiwin/quancaiwin.github.io/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Quán Cài Win',
        logo: {
          alt: 'Quán Cài Win',
          src: 'img/icons.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Học cài Windows từ A-Z',
          },
          { to: '/resources', label: 'Tài nguyên hiện có', position: 'left' },
          {
            href: 'https://www.youtube.com/channel/UCgHyAVPzczuOs-M5tdRhKLg',
            label: 'YouTube',
            position: 'right',
          },
          {
            href: 'https://github.com/quancaiwin/quancaiwin.github.io/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `© ${new Date().getFullYear()} Quán Cài Win by team QCW cùng tất cả những người đóng góp và cả Bạn!. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

};

module.exports = config;
