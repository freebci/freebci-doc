const { themes } = require('prism-react-renderer');

const code_themes = {
  light: themes.github,
  dark: themes.dracula,
};

/** @type {import('@docusaurus/types').Config} */
const meta = {
  title: 'The FreeBCI Project',
  tagline: 'Open source brain-computer interfaces, for everyone.',
  url: 'https://www.freebci.net',
  baseUrl: '/',
  favicon: '/favicon.ico',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
  },
};

const defaultSettings = {
  breadcrumbs: true,
  showLastUpdateTime: true,
  sidebarCollapsible: true,
  sidebarPath: require.resolve('./sidebars-default.js'),
};

const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');

/** @type {import('@docusaurus/types').Config} */
const config = {
  ...meta,
  plugins: [tailwindPlugin],

  future: {
    experimental_faster: false,
  },

  trailingSlash: true,
  onBrokenLinks: 'warn',

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
      docs: {
        path: 'docs/guides',
        id: 'docs',
        routeBasePath: 'docs',
        ...defaultSettings,
      },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
          ],
        },
        sitemap: {
          ignorePatterns: ['**/tags/**'],
        },
        googleTagManager: {
          containerId: 'GTM-5FDFFSS',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: '/logo/light.png',
      colorMode: {
        defaultMode: 'light',
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        },
      },
      navbar: {
        logo: {
          href: '/',
          src: '/logo/light.png',
          srcDark: '/logo/dark.png',
          alt: 'FreeBCI',
          height: '96px',
        },
        items: [
          {
            label: 'Docs',
            to: 'docs',
          },
          {
            label: 'Community',
            to: '/community',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/freebci',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
            className: 'navbar-locale-dropdown',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        logo: {
          href: '/',
          src: '/logo/light.png',
          srcDark: '/logo/dark.png',
          alt: 'FreeBCI',
          height: '36px',
        },
        links: [
          {
            title: 'Docs',
            items: [
              { label: 'Getting Started', to: '/docs/getting-started' },
              { label: 'Hardware', to: '/docs/hardware' },
              { label: 'Software', to: '/docs/software' },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'GitHub', href: 'https://github.com/freebci' },
              { label: 'Contributing', to: '/docs/contributing' },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'About', to: '/about' },
              { label: 'Privacy Policy', to: '/privacy' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The FreeBCI Project. All rights reserved. Supported by <a href="https://www.bbci.net/en" target="_blank" rel="noopener noreferrer">BBCI</a>.`,
      },
      prism: {
        theme: code_themes.light,
        darkTheme: code_themes.dark,
        additionalLanguages: [
          'bash',
          'json',
          'python',
          'c',
          'cpp',
        ],
      },
    }),
};

module.exports = config;
