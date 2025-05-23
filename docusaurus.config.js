/* @ts-check */
/* `@type` JSDoc annotations allow editor autocompletion and type checking
   (when paired with `@ts-check`).
   There are various equivalent ways to declare your Docusaurus config.
   See: https://docusaurus.io/docs/api/docusaurus-config */

   import { themes as prismThemes } from 'prism-react-renderer';

   // This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
   
   /** @type {import('@docusaurus/types').Config} */
   const config = {
     title: 'Os Tralaleros Tralalas',
     tagline: 'Documentação KickStart',
     favicon: 'img/favicon.ico',
   
     // Set the production url of your site here
     url: 'https://your-docusaurus-site.example.com',
     // Set the /<baseUrl>/ pathname under which your site is served
     // For GitHub pages deployment, it is often '/<projectName>/'
     baseUrl: '/',
   
     // GitHub pages deployment config.
     // If you aren't using GitHub pages, you don't need these.
     organizationName: 'Navarrasa', // Usually your GitHub org/user name.
     projectName: 'docusaurus_DRF_REACT_app', // Usually your repo name.
     onBrokenLinks: 'throw',
     onBrokenMarkdownLinks: 'warn',
   
     // Even if you don't use internationalization, you can use this field to set
     // useful metadata like html lang. For example, if your site is Chinese, you
     // may want to replace "en" with "zh-Hans".
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
             sidebarPath: './sidebars.js',
             // Please change this to your repo.
             // Remove this to remove the "edit this page" links.
             editUrl:
               'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
           },
           blog: {
             showReadingTime: true,
             feedOptions: {
               type: ['rss', 'atom'],
               xslt: true,
             },
             // Please change this to your repo.
             // Remove this to remove the "edit this page" links.
             editUrl:
               'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
             // Useful options to enforce blogging best practices
             onInlineTags: 'warn',
             onInlineAuthors: 'warn',
             onUntruncatedBlogPosts: 'warn',
           },
           theme: {
             customCss: './src/css/custom.css',
           },
         }),
       ],
     ],
   
     plugins: [
       // Adicionar o plugin Webpack personalizado
       './src/webpack-plugin.js',
     ],
   
     themeConfig:
       /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
       ({
         // Replace with your project's social card
         image: 'img/docusaurus-social-card.jpg',
         navbar: {
           title: 'App React',
           logo: {
             alt: 'My Site Logo',
             src: 'img/logo.svg',
           },
           items: [
             {
               type: 'docSidebar',
               sidebarId: 'tutorialSidebar',
               position: 'left',
               label: 'Tutorial',
             },
             { to: '/blog/welcome', label: 'Devs', position: 'left' },
             {
               href: 'https://github.com/Navarrasa/docusaurus_DRF_REACT_app',
               label: 'GitHub',
               position: 'right',
             },
           ],
         },
         footer: {
           style: 'dark',
           links: [
             {
               title: 'Tecnologias',
               items: [
                 {
                   label: 'Tutorial',
                   to: '/docs/kickstart',
                 },
               ],
             },
             {
               title: 'Participantes',
               items: [
                 {
                   label: 'Gustavo Bruno',
                   href: 'https://navarrasa.github.io/portfolio/',
                 },
                 {
                   label: 'Adrian Mataragi',
                   href: 'https://navarrasa.github.io/portfolio/',
                 },
                 {
                   label: 'Fracisca Yasmin',
                   href: 'https://navarrasa.github.io/portfolio/',
                 },
                 {
                   label: 'Kamila Vitória',
                   href: 'https://github.com/CodeByKamis/PWFE',
                 },
               ],
             },
             {
               title: 'Sobre nós',
               items: [
                 {
                   label: 'Blog',
                   to: '/blog',
                 },
                 {
                   label: 'GitHub',
                   href: 'https://github.com/Navarrasa/docusaurus_DRF_REACT_app',
                 },
               ],
             },
           ],
           copyright: `Copyright © ${new Date().getFullYear()} App React, Inc. Built with Docusaurus.`,
         },
         prism: {
           theme: prismThemes.github,
           darkTheme: prismThemes.dracula,
         },
       }),
   };
   
   export default config;