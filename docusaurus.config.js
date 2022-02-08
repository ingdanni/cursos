// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'danny[dot]work',
  tagline: 'Cursos de desarrollo web y móvil',
  url: 'https://danny.work',
  baseUrl: '/cursos/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'danny[dot]work', // Usually your GitHub org/user name.
  projectName: 'cursos', // Usually your repo name.
  staticDirectories: ['static'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
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
        title: 'danny[dot]work',
        // logo: {
        //   alt: 'UPOLI logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            type: 'doc',
            docId: 'android/android1',
            position: 'left',
            label: 'Android',
          },
          // {
          //   to: '/blog',
          //   label: 'Blog',
          //   position: 'left'
          // },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Cursos',
            items: [
              {
                label: 'Android',
                to: '/docs/android/android1',
              },
            ],
          },
          {
            title: 'Contacto',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/dannynarvaez/',
              },
              {
                label: 'Instragram',
                href: 'https://www.instagram.com/rx__danny/',
              },
              {
                label: 'Whatsapp',
                href: 'https://wa.me/+50581162325',
              },
            ],
          },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} danny[dot]work, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['kotlin'],
      },
    }),
};

module.exports = config;
