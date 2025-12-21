import { articles } from '../../lib/articles';

// Helper function to parse article dates consistently
function parseArticleDate(dateString: string): Date {
    // Parse dates like "January 10, 2025" or "December 7, 2025"
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? new Date() : date;
}

export function GET() {
    const currentDate = new Date().toISOString();

    const staticPages = [
        {
            url: 'https://tech.weebcoder.com/',
            lastmod: currentDate,
        },
        // Removed /blog and /tutorials - empty "coming soon" pages hurt SEO
        {
            url: 'https://tech.weebcoder.com/articles',
            lastmod: currentDate,
        },
        {
            url: 'https://tech.weebcoder.com/privacy',
            lastmod: currentDate,
        },
        {
            url: 'https://tech.weebcoder.com/terms',
            lastmod: currentDate,
        },
        {
            url: 'https://tech.weebcoder.com/about',
            lastmod: currentDate,
        },
        {
            url: 'https://tech.weebcoder.com/contact',
            lastmod: currentDate,
        }
    ];

    const articlePages = Object.keys(articles).map((slug) => {
        const article = articles[slug as keyof typeof articles];
        const articleDate = article.date ? parseArticleDate(article.date).toISOString() : currentDate;

        return {
            url: `https://tech.weebcoder.com/articles/${slug}`,
            lastmod: articleDate,
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
