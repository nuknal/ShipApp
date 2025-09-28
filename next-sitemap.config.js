/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://knowmorewithai.com',
  changefreq: 'daily',
  priority: 0.7,
  generateRobotsTxt: true,
  alternateRefs: [
    {
      href: 'https://knowmorewithai.com/zh',
      hreflang: 'zh',
    },
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
