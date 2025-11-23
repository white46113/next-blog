export default function SitemapRoute() {
  const currentDate = new Date().toISOString();

  const pages = [
    {
      url: 'https://animeblog.com',
      lastmod: currentDate,
      changefreq: 'daily',
      priority: '1.0'
    },
    {
      url: 'https://animeblog.com/posts',
      lastmod: currentDate,
      changefreq: 'daily',
      priority: '0.8'
    },
    {
      url: 'https://animeblog.com/posts/top-10-anime-to-watch-2025',
      lastmod: '2025-01-18T10:00:00Z',
      changefreq: 'weekly',
      priority: '0.9'
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'text/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}