import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    // This is a sitemap index that points to all sub-app sitemaps
    // Note: Next.js sitemap() doesn't natively support sitemap index format
    // So we'll include the hub pages here and reference other sitemaps in robots.txt

    const baseUrl = 'https://weebcoder.com';

    // Hub pages
    const hubPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 1.0,
        },
        {
            url: `${baseUrl}/#explore`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/#stats`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
    ];

    // Add references to sub-app homepages (for cross-linking)
    const subAppPages = [
        {
            url: 'https://anime.weebcoder.com',
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.9,
        },
        {
            url: 'https://tech.weebcoder.com',
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.9,
        },
        {
            url: 'https://tools.weebcoder.com',
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.9,
        },
    ];

    return [...hubPages];
}
