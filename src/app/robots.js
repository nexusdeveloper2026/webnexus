export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://webnexus-umber.vercel.app/sitemap.xml',
  }
}
