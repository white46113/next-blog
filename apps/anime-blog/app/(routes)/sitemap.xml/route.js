// apps/anime-blog/app/(routes)/sitemap.xml/route.js

export function GET() {
  const currentDate = new Date().toISOString();

  const pages = [
    {
      url: 'https://anime.weebcoder.com/',
      lastmod: currentDate,
      changefreq: 'daily',
      priority: '1.0'
    },
    {
      url: 'https://anime.weebcoder.com/posts',
      lastmod: currentDate,
      changefreq: 'daily',
      priority: '0.8'
    },

    {
      url: 'https://anime.weebcoder.com/posts/top-10-anime-2025',
      lastmod: '2025-01-18T10:00:00Z',
      changefreq: 'weekly',
      priority: '0.9'
    },
    {
      url: 'https://anime.weebcoder.com/privacy',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.5'
    },
    {
      url: 'https://anime.weebcoder.com/terms',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.5'
    },
    {
      url: 'https://anime.weebcoder.com/about',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.6'
    },
    {
      url: 'https://anime.weebcoder.com/contact',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.6'
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
      .map(
        (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
      )
      .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
