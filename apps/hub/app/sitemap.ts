import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://weebcoder.com';

    // Hub pages only - each subdomain manages its own sitemap
    // Note: Anchor links are not included as they don't represent separate pages
    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1.0,
        },
        {
            url: `${baseUrl}/tools/json-editor`,
            lastModified: new Date('2026-01-29'),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/articles/integration-vs-differentiation`,
            lastModified: new Date('2026-03-02'),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
    ];
}
