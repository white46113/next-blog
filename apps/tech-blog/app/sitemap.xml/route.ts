export function GET() {
    const currentDate = new Date().toISOString();

    const pages = [
        {
            url: 'https://tech.weebcoder.com/',
            lastmod: currentDate,
            changefreq: 'daily',
            priority: '1.0'
        },
        {
            url: 'https://tech.weebcoder.com/blog',
            lastmod: currentDate,
            changefreq: 'daily',
            priority: '0.9'
        },
        {
            url: 'https://tech.weebcoder.com/tutorials',
            lastmod: currentDate,
            changefreq: 'weekly',
            priority: '0.9'
        },
        {
            url: 'https://tech.weebcoder.com/articles',
            lastmod: currentDate,
            changefreq: 'weekly',
            priority: '0.8'
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
