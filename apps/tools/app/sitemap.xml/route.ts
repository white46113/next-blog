import { articles } from '../../lib/articles';

export function GET() {
    const currentDate = new Date().toISOString();

    const staticPages = [
        {
            url: 'https://tools.weebcoder.com/',
            lastmod: currentDate,
            changefreq: 'weekly',
            priority: '1.0'
        },
        {
            url: 'https://tools.weebcoder.com/tools',
            lastmod: currentDate,
            changefreq: 'weekly',
            priority: '0.9'
        },
        {
            url: 'https://tools.weebcoder.com/tools/bmi-calculator',
            lastmod: currentDate,
            changefreq: 'monthly',
            priority: '0.8'
        },
        {
            url: 'https://tools.weebcoder.com/tools/jpg-to-pdf',
            lastmod: currentDate,
            changefreq: 'monthly',
            priority: '0.8'
        },
        {
            url: 'https://tools.weebcoder.com/tools/pdf-to-image',
            lastmod: currentDate,
            changefreq: 'monthly',
            priority: '0.8'
        },
        {
            url: 'https://tools.weebcoder.com/tools/percentage-calculator',
            lastmod: currentDate,
            changefreq: 'monthly',
            priority: '0.8'
        },
        {
            url: 'https://tools.weebcoder.com/tools/png-to-webp',
            lastmod: currentDate,
            changefreq: 'monthly',
            priority: '0.8'
        },
        {
            url: 'https://tools.weebcoder.com/tools/qr-code-generator',
            lastmod: currentDate,
            changefreq: 'monthly',
            priority: '0.8'
        },
        {
            url: 'https://tools.weebcoder.com/tools/youtube-thumbnail-downloader',
            lastmod: currentDate,
            changefreq: 'monthly',
            priority: '0.8'
        },
        {
            url: 'https://tools.weebcoder.com/privacy',
            lastmod: currentDate,
            changefreq: 'monthly',
            priority: '0.5'
        },
        {
            url: 'https://tools.weebcoder.com/terms',
            lastmod: currentDate,
            changefreq: 'monthly',
            priority: '0.5'
        },
        {
            url: 'https://tools.weebcoder.com/about',
            lastmod: currentDate,
            changefreq: 'monthly',
            priority: '0.6'
        },
        {
            url: 'https://tools.weebcoder.com/contact',
            lastmod: currentDate,
            changefreq: 'monthly',
            priority: '0.6'
        }
    ];

    const articlePages = Object.keys(articles).map((slug) => {
        const article = articles[slug as keyof typeof articles];
        return {
            url: `https://tools.weebcoder.com/articles/${slug}`,
            lastmod: article.date ? new Date(article.date).toISOString() : currentDate,
            changefreq: 'weekly',
            priority: '0.9'
        };
    });

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
