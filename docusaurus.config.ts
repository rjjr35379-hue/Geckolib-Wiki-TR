import {
  themes as prismThemes
} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'GeckoLib Wiki', // General website title
  tagline: 'Official usage documentation for GeckoLib - The Minecraft Java mod',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true,
  },

  // Deployment settings
  // See: https://docusaurus.io/docs/deployment#deploying-to-github-pages
  url: 'https://tslat.github.io',
  baseUrl: '/Geckolib-Wiki/',
  // Github Pages settings
  organizationName: 'tslat',
  deploymentBranch: 'gh-pages',
  projectName: 'Geckolib-Wiki',
  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Tslat/Geckolib-Wiki/tree/main', // Wiki root, auto-generates 'Edit this page' links
          // Versions definition for version listings
          // Also see versions.json
          lastVersion: 'current',
          versions: {
            current: {
              label: "GeckoLib5",
              path: "geckolib5",
              badge: true,
            },
            geckolib4: {
              label: "GeckoLib4",
              path: "geckolib4",
              badge: true,
              banner: "none"
            },
            geckolib3: {
              label: "GeckoLib3",
              path: "geckolib3",
              badge: true,
              banner: "unmaintained"
            }
          }
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: { // Top navigation bar
      title: 'GeckoLib Wiki',
      logo: {
        alt: 'GeckoLib Logo',
        src: 'img/favicon.svg',
      },
      items: [
        {
          type: 'docsVersionDropdown',
        }
      ],
    },
    footer: { // This footer is present on all pages
      style: 'dark',
      links: [
        {
          title: 'Download GeckoLib',
          items: [
            {
              label: 'Modrinth',
              href: 'https://modrinth.com/mod/geckolib',
            },
            {
              label: 'CurseForge',
              href: 'https://www.curseforge.com/minecraft/mc-mods/geckolib',
            }
          ],
        },
        {
          title: 'Community Links',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/Bt3p6kA6TK',
            }
          ],
        },
        {
          title: 'Source Code',
          items: [
            {
              label: 'Java Mod',
              href: 'https://github.com/bernie-g/geckolib',
            },
            {
              label: 'Blockbench Plugin',
              href: 'https://github.com/JannisX11/blockbench-plugins/tree/master/plugins/geckolib',
            },
            {
              label: 'GeckoLib Wiki',
              href: 'https://github.com/Tslat/Geckolib-Wiki',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Wiki Issues/Suggestions',
              href: 'https://github.com/Tslat/Geckolib-Wiki/issues',
            },
            {
              label: 'General Modding Support',
              href: 'https://discord.gg/moddedmc',
            }
          ],
        },
      ]
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.okaidia,
      additionalLanguages: ['java', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
