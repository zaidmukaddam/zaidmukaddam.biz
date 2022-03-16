const siteUrl = 'https://zaidmukaddam.biz';

module.exports = {
  siteUrl,
  generateRobotsTxt: false,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: [
      `${siteUrl}/sitemap.xml`,
      `${siteUrl}/dynamic-sitemap.xml`,
    ],
  },
};
