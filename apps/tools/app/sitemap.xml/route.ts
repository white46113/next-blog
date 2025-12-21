import { articles } from '../../lib/articles';

export function GET() {
    const currentDate = new Date().toISOString();

    const staticPages = [
        {
            url: 'https://tools.weebcoder.com/',
            lastmod: currentDate,
        },
        {
            url: 'https://tools.weebcoder.com/tools',
            lastmod: currentDate,
        },
        {
            url: 'https://tools.weebcoder.com/tools/bmi-calculator',
            lastmod: currentDate,
        },
        {
            url: 'https://tools.weebcoder.com/tools/jpg-to-pdf',
            lastmod: currentDate,
        },
        {
            url: 'https://tools.weebcoder.com/tools/pdf-to-image',
            lastmod: currentDate,
        },
        {
            url: 'https://tools.weebcoder.com/tools/percentage-calculator',
            lastmod: currentDate,
        },
        {
            url: 'https://tools.weebcoder.com/tools/png-to-webp',
            lastmod: currentDate,
        },
        {
            url: 'https://tools.weebcoder.com/tools/qr-code-generator',
            lastmod: currentDate,
        },
        {
            url: 'https://tools.weebcoder.com/tools/youtube-thumbnail-downloader',
            lastmod: currentDate,
        },
        {
            url: 'https://tools.weebcoder.com/tools/form-data-debugger',
            lastmod: currentDate,
        },
        {
            url: 'https://tools.weebcoder.com/tools/seo-crawler',
            lastmod: currentDate,
        },
        {
            url: 'https://tools.weebcoder.com/privacy',
            lastmod: currentDate,
        },
        {
            url: 'https://tools.weebcoder.com/terms',
            lastmod: currentDate,
        },
        {
            url: 'https://tools.weebcoder.com/about',
            lastmod: currentDate,
        },
        {
            url: 'https://tools.weebcoder.com/contact',
            lastmod: currentDate,
        }
    ];

    const articlePages = Object.keys(articles).map((slug) => {
        const article = articles[slug as keyof typeof articles];
        return {
            url: `https://tools.weebcoder.com/articles/${slug}`,
            lastmod: article.date ? new Date(article.date).toISOString() : currentDate,
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
  </url>`
            )
            .join('\n')}
</urlset>`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=1800, s-maxage=3600',
        },
    });
}
