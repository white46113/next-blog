import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://weebcoder.com';

    // Hub pages only - each subdomain manages its own sitemap
    // Note: Anchor links are not included as they don't represent separate pages
    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 1.0,
        },
        {
            url: `${baseUrl}/tools/json-editor`,
            lastModified: new Date('2026-01-29'),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
    ];
}
