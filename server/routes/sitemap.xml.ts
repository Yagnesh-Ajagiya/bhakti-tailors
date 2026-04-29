import { defineEventHandler, setHeader } from 'h3'

export default defineEventHandler((event) => {
  setHeader(event, 'Content-Type', 'application/xml')

  const host = (event.node.req.headers['x-forwarded-host'] || event.node.req.headers.host || 'bhakti-tailors.vercel.app').replace(/\/$/, '')
  const protocol = (event.node.req.headers['x-forwarded-proto'] || 'https').replace(/\/$/, '')
  const baseUrl = `${protocol}://${host}`
  const routes = ['/', '/gallery', '/services', '/contact']

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
    .map((route) => `  <url>
    <loc>${baseUrl}${route}</loc>
    <changefreq>${route === '/' ? 'daily' : 'monthly'}</changefreq>
    <priority>${route === '/' ? '1.0' : route === '/contact' ? '0.7' : '0.8'}</priority>
  </url>`)
    .join('\n')}
</urlset>`

  return sitemap
})
  