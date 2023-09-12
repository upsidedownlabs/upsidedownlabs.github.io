const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Upside Down Labs Docs',
  tagline: 'DIY Neuroscience for all!',
  favicon: 'img/favicon.ico',
 
  url: 'https://github.com',
  baseUrl: '/',

  organizationName: 'upsidedownlabs',
  projectName: 'upsidedownlabs.github.io',
  deploymentBranch: 'gh-pages',
  trailingSlash: 'false',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/upsidedownlabs/upsidedownlabs.github.io',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/upsidedownlabs/upsidedownlabs.github.io',
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
        announcementBar: {
        id: 'support_ukraine',
        content:
          //Example Content For Annoucement Bar--> 'Support Ukraine 🇺🇦 <a target="_blank" rel="noopener noreferrer" href="https://opensource.facebook.com/support-ukraine"> Help Provide Humanitarian Aid to Ukraine</a>. ',
          //<ADD YOUR TEXT HERE>
          'Work in progress @ Upside Down Labs',
        backgroundColor: '#097969',
        textColor: '#fff',
        isCloseable: true,

      },
    
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Upside Down Labs',
        logo: {
          alt: 'Upside Down Labs',
          src: 'img/udl_logo.svg',
          srcDark: 'img/udl_logo_white.svg',
        },
        items: [
          {
            type: 'docsVersionDropdown',
            position: 'left',
          },
          
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to:'/blog', label: 'Blog', position: 'left'},

          {to:'/Contributors', label: 'Contribute', position:'left'},

          {
            href: 'https://upsidedownlabs.tech/',
            label: 'Main site',
            position: 'right',
          },
          {
            href: 'https://store.upsidedownlabs.tech/',
            label: 'Store',
            position: 'right',
          },
          {
            href: 'https://github.com/upsidedownlabs/upsidedownlabs.github.io',
            position: 'right',
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'BioAmp Hardware',
                to: '/docs/category/BioAmp-Hardware',
              },
              {
                label: 'BioAmp Software',
                to: '/docs/category/BioAmp-Software',
              },
              {
                label: 'Experiments',
                to: '/docs/category/Experiments',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'YouTube',
                href: 'https://youtube.com/upsidedownlabs',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/myupsidedownlab',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/upsidedownlabs',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/upsidedownlabs/upsidedownlabs.github.io',
              },
              {
                label: 'Website',
                href: 'https://upsidedownlabs.tech/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Upside Down Labs`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
