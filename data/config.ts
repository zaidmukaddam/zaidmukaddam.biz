const config = {
  siteUrl: 'https://zaidmukadam.biz',
  siteName: 'Zaid Mukaddam',
  siteLocale: 'en_US',
  title: 'Zaid Mukaddam',
  titleTemplate: '%s – Developer, writer.',
  descritpion:
    'Personal space on the internet to share my work, my thoughts, a bit about myself and my working process, along with get in touch information.',
  defaultImage: '/images/blog/banner.jpg',
  blog: {
    name: 'Writing',
    path: 'writing',
    githubEditUrl:
      'https://github.com/zaidmukaddam/zaidmukaddam.biz/tree/main/data/writing',
  },
  snippets: {
    name: 'Snippets',
    path: 'snippets',
    githubEditUrl:
      'https://github.com/zaidmukaddam/zaidmukaddam.biz/tree/main/data/snippets',
  },
  twitter: {
    url: 'https://twitter.com/zaidmukaddam',
    handle: '@zaidmukaddam',
    find: 'https://mobile.twitter.com/search?q=',
  },
  linkedIn: 'https://www.linkedin.com/in/zaid-mukaddam-26b155202/',
  gitHub: 'https://github.com/zaidmukaddam',
  keywords: [ 'zaid','mukaddam','zaid mukaddam','zaidmukaddam','blog' ],
} as const;

export default config;
