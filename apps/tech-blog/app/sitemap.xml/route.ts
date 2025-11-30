import { articles } from '../../lib/articles';

export function GET() {
    const currentDate = new Date().toISOString();

    const staticPages = [
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
        },
        {
            url: 'https://tech.weebcoder.com/privacy',
            lastmod: currentDate,
            changefreq: 'monthly',
            priority: '0.5'
        },
        {
            url: 'https://tech.weebcoder.com/terms',
            lastmod: currentDate,
            changefreq: 'monthly',
            priority: '0.5'
        },
        {
            url: 'https://tech.weebcoder.com/about',
            lastmod: currentDate,
            changefreq: 'monthly',
            priority: '0.6'
        },
        {
            url: 'https://tech.weebcoder.com/contact',
            lastmod: currentDate,
            changefreq: 'monthly',
            priority: '0.6'
        }
    ];

    const articlePages = Object.keys(articles).map((slug) => ({
        url: `https://tech.weebcoder.com/articles/${slug}`,
        lastmod: articles[slug as keyof typeof articles].date ? new Date(articles[slug as keyof typeof articles].date).toISOString() : currentDate,
        changefreq: 'weekly',
        priority: '0.9'
    }));

    const pages = [...staticPages, ...articlePages];

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
